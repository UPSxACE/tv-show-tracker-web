"use client";
import { useQuery } from "@apollo/client/react";
import {
  For,
  Grid,
  Skeleton,
  Stack,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  type Genre,
  type GetTvShowsQuery,
  type GetTvShowsQueryVariables,
  SortDirection,
  TvShowSortableField,
} from "@/__generated__/graphql";
import Pagination from "@/components/pages/tv-shows/Pagination";
import { CSS_NO_SCROLL } from "@/components/ui/common/css";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import GetTvShows from "./gql/query";
import TvShow from "./TvShow";

const PAGE_SIZE = 10;

export default function Page({ genres }: { genres: Genre[] }) {
  const searchParams = useSearchParams();
  const [sort, order] = resolveSort(searchParams.get("sort"));
  const [genre, filter] = resolveGenre(genres, searchParams.get("genre"));
  const page = resolvePage(searchParams.get("page"));

  const { data, previousData, loading } = useQuery<
    GetTvShowsQuery,
    GetTvShowsQueryVariables
  >(GetTvShows, {
    variables: {
      input: {
        order,
        page: {
          size: PAGE_SIZE,
          page: page ? page - 1 : null,
        },
        filter,
      },
    },
  });

  const router = useRouter();
  const pathname = usePathname();

  const createSortLink = useCallback(
    (sort: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sort);
      params.delete("page");

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const createGenreLink = useCallback(
    (genre: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("genre", genre);
      params.delete("page");

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const onSortChange = ({ value }: { value: string }) => {
    router.push(createSortLink(value));
  };

  const onGenreChange = ({ value }: { value: string }) => {
    router.push(createGenreLink(value));
  };

  // prevent pagination element from flashing while changing page
  const paginationTotal = loading
    ? (data?.allTvShows?.total ?? previousData?.allTvShows?.total ?? 0)
    : (data?.allTvShows?.total ?? 0);

  const tvShows = data?.allTvShows?.content;

  return (
    <VStack
      minH={{
        base: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
      as="main"
    >
      <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} py={3.5}>
        <Text textStyle="2xl" fontWeight="bold">
          TV Shows
        </Text>
        <TabsRoot mt={1} value={sort} onValueChange={onSortChange}>
          <TabsList>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="ratings">Highest Ratings</TabsTrigger>
            <TabsTrigger value="recent">Recently Added</TabsTrigger>
          </TabsList>
        </TabsRoot>
        <TabsRoot
          value={genre || "all"}
          onValueChange={onGenreChange}
          variant="enclosed"
          mt={3}
          size="sm"
          w="full"
        >
          <TabsList minW="full" overflow="auto" css={CSS_NO_SCROLL} maxW="full">
            <TabsTrigger minW="fit" value={"all"}>
              All
            </TabsTrigger>
            {genres.map((g) => (
              <TabsTrigger minW="fit" key={g.id} value={g.id.toString()}>
                {g.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsRoot>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={3}
          mt={3}
        >
          {tvShows ? (
            tvShows.map((t) => <TvShow key={t.id} tvShow={t} />)
          ) : (
            <For each={new Array(PAGE_SIZE).fill(true)}>
              {(_, i) => <Skeleton key={i} h="260px" />}
            </For>
          )}
        </Grid>
        <VStack mt={6}>
          <Pagination
            page={page}
            total={paginationTotal}
            pageSize={PAGE_SIZE}
          />
        </VStack>
      </Stack>
    </VStack>
  );
}

function resolveSort(sort: string | null) {
  switch (sort) {
    case "ratings":
      return [
        "ratings",
        {
          field: TvShowSortableField.VoteAverage,
          direction: SortDirection.Desc,
        },
      ] as const;
    case "recent":
      return [
        "recent",
        {
          field: TvShowSortableField.Id,
          direction: SortDirection.Desc,
        },
      ] as const;
    default:
      return [
        "popular",
        {
          field: TvShowSortableField.Popularity,
          direction: SortDirection.Desc,
        },
      ] as const;
  }
}

function resolveGenre(genres: Genre[], genre: string | null) {
  const genreId =
    genres.find((g) => g.id.toString() === genre)?.id.toString() || null;

  return [
    genreId,
    {
      genreId: genreId ? Number(genreId) : null,
    },
  ] as const;
}

function resolvePage(page: string | null) {
  if (!page) return 1;
  return Number.parseInt(page, 10);
}
