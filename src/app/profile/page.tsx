"use client";

import { useQuery } from "@apollo/client/react";
import { Stack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import type {
  GetFavoriteTvShowsQuery,
  GetFavoriteTvShowsQueryVariables,
} from "@/__generated__/graphql";
import GetFavoriteTvShows from "@/components/pages/profile/gql/query";
import TvShowDisplay from "@/components/pages/tv-shows/components/TvShowDisplay";

const PAGE_SIZE = 10;

export default function Profile() {
  const searchParams = useSearchParams();
  const page = resolvePage(searchParams.get("page"));

  const { data, previousData, loading } = useQuery<
    GetFavoriteTvShowsQuery,
    GetFavoriteTvShowsQueryVariables
  >(GetFavoriteTvShows, {
    variables: {
      input: {
        page: {
          size: PAGE_SIZE,
          page: page ? page - 1 : null,
        },
      },
    },
  });

  // prevent pagination element from flashing while changing page
  const paginationTotal = loading
    ? (data?.favoriteTvShows?.total ??
      previousData?.favoriteTvShows?.total ??
      0)
    : (data?.favoriteTvShows?.total ?? 0);

  const tvShows = data?.favoriteTvShows?.content.map((f) => f.tvShow);

  return (
    <Stack
      as="main"
      w="full"
      maxW="8xl"
      px={{ base: 2.5, xl: 6 }}
      gap={0}
      py={3.5}
      pt={6}
    >
      <TvShowDisplay
        page={page}
        pageSize={PAGE_SIZE}
        total={paginationTotal}
        tvShows={tvShows}
        emptyStateMessage="All clear for now. Come back here after adding a TV show to your favorites!"
      />
    </Stack>
  );
}

function resolvePage(page: string | null) {
  if (!page) return 1;
  return Number.parseInt(page, 10);
}
