"use client";
import {
  Box,
  For,
  Grid,
  Stack,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { GENRES } from "@/components/pages/tv-shows/constants";
import Pagination from "@/components/pages/tv-shows/Pagination";
import { CSS_NO_SCROLL } from "@/components/ui/common/css";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default function TvShows() {
  // TODO: SSR genres

  const searchParams = useSearchParams();
  const sort = resolveSort(searchParams.get("sort"));
  const genre = resolveGenre(searchParams.get("genre"));

  const router = useRouter();
  const pathname = usePathname();

  const createSortLink = useCallback(
    (sort: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sort);

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const createGenreLink = useCallback(
    (genre: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("genre", genre);

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
          overflow="auto"
          css={CSS_NO_SCROLL}
        >
          <TabsList minW="full">
            <TabsTrigger minW="fit" value={"all"}>
              All
            </TabsTrigger>
            {GENRES.map((g) => (
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
          <For each={new Array(10).fill(true)}>
            {(_, i) => (
              <Box asChild key={i} bg="gray.200" h="260px">
                <Link href={`/show/${i}`} />
              </Box>
            )}
          </For>
        </Grid>
        <VStack mt={6}>
          <Pagination />
        </VStack>
      </Stack>
    </VStack>
  );
}

function resolveSort(sort: string | null) {
  switch (sort) {
    case "recent":
      return "recent";
    default:
      return "popular";
  }
}

function resolveGenre(genre: string | null) {
  return GENRES.find((g) => g.id.toString() === genre)?.id.toString() || null;
}
