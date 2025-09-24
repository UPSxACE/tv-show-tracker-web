import { useApolloClient, useMutation, useQuery } from "@apollo/client/react";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import type {
  GetTvShowFavoriteInfoQuery,
  GetTvShowFavoriteInfoQueryVariables,
  GetTvShowQuery,
  SaveFavoriteTvShowMutation,
  SaveFavoriteTvShowMutationVariables,
  TvShow,
  UnfavoriteTvShowMutation,
  UnfavoriteTvShowMutationVariables,
} from "@/__generated__/graphql";
import { Tooltip } from "@/components/cui/tooltip";
import { useSession } from "@/components/session/SessionContext";
import useDelayedValue from "@/lib/utils/hooks/useDelayedValue";
import { SaveFavoriteTvShow, UnfavoriteTvShow } from "./gql/mutation";
import { GetTvShowFavoriteInfo } from "./gql/query";

export default function FavoriteButton({
  tvShow,
}: {
  tvShow: NonNullable<GetTvShowQuery["getTvShow"]>;
}) {
  const { isLoggedIn } = useSession();
  const client = useApolloClient();

  const { data } = useQuery<
    GetTvShowFavoriteInfoQuery,
    GetTvShowFavoriteInfoQueryVariables
  >(GetTvShowFavoriteInfo, {
    skip: !isLoggedIn,
    variables: {
      id: Number(tvShow.id),
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: 86400, // cache for 24 hours
        },
      },
    },
  });

  const favorited = data?.getTvShow?.favorite;

  const [hover, setHover] = useState(false);

  const [saveFavorite] = useMutation<
    SaveFavoriteTvShowMutation,
    SaveFavoriteTvShowMutationVariables
  >(SaveFavoriteTvShow);

  const [unfavorite] = useMutation<
    UnfavoriteTvShowMutation,
    UnfavoriteTvShowMutationVariables
  >(UnfavoriteTvShow);

  const handleToggleFavorite = () => {
    if (favorited === null || favorited === undefined) return;

    if (!favorited) {
      client.cache.modify<TvShow>({
        id: client.cache.identify(tvShow),
        fields: {
          favorite() {
            return true;
          },
        },
      });
      client.cache.evict({ id: "ROOT_QUERY", fieldName: "favoriteTvShows" });
      saveFavorite({ variables: { id: Number(tvShow.id) } });
      return;
    }

    client.cache.modify<TvShow>({
      id: client.cache.identify(tvShow),
      fields: {
        favorite() {
          return false;
        },
      },
    });
    client.cache.evict({ id: "ROOT_QUERY", fieldName: "favoriteTvShows" });
    unfavorite({ variables: { id: Number(tvShow.id) } });
  };

  const tooltip = useDelayedValue(
    favorited ? "Save favorite" : "Unfavorite",
    500,
  );

  if (favorited === null || favorited === undefined) return null;

  return (
    <Tooltip
      content={tooltip}
      openDelay={0}
      positioning={{
        offset: { mainAxis: 3, crossAxis: 0 },
        placement: "bottom",
      }}
    >
      <IconButton
        variant="ghost"
        color={favorited ? "yellow" : "white"}
        css={{
          _icon: {
            width: 7,
            height: 7,
          },
        }}
        minW={0}
        minH={0}
        h="36px"
        w="36px"
        bg="transparent"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={handleToggleFavorite}
      >
        {favorited ? <IoStar /> : hover ? <IoStar /> : <IoStarOutline />}
      </IconButton>
    </Tooltip>
  );
}
