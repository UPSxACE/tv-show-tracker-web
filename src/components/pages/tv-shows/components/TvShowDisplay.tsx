import { For, Grid, Skeleton, VStack } from "@chakra-ui/react";
import type { TvShow } from "@/__generated__/graphql";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import TvShowComponent from "./TvShow";

export default function TvShowDisplay({
  tvShows,
  page,
  total,
  pageSize,
  emptyStateMessage,
}: {
  tvShows?: Pick<
    TvShow,
    "__typename" | "id" | "name" | "posterUrl" | "voteAverage"
  >[];
  page: number | null;
  total: number;
  pageSize: number;
  emptyStateMessage?: string;
}) {
  if (tvShows && tvShows.length === 0)
    return (
      <>
        <EmptyState message={emptyStateMessage} />
        <VStack mt={0}>
          <Pagination page={page} total={total} pageSize={pageSize} />
        </VStack>
      </>
    );

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={3}
      >
        {tvShows ? (
          tvShows.map((t) => <TvShowComponent key={t.id} tvShow={t} />)
        ) : (
          <For each={new Array(pageSize).fill(true)}>
            {(_, i) => <Skeleton key={i} h="260px" />}
          </For>
        )}
      </Grid>
      <VStack mt={6}>
        <Pagination page={page} total={total} pageSize={pageSize} />
      </VStack>
    </>
  );
}
