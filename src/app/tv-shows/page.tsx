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
import Pagination from "@/components/pages/tv-shows/Pagination";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default function TvShows() {
  const searchParams = useSearchParams();
  const sort = resolveSort(searchParams.get("sort"));

  const router = useRouter();
  const pathname = usePathname();

  const createLink = useCallback(
    (sort: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sort);

      return `${pathname}?${params.toString()}`;
    },
    [searchParams, pathname],
  );

  const onTabChange = ({ value }: { value: string }) => {
    router.push(createLink(value));
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
        <Text textStyle="xl" fontWeight="bold">
          TV Shows
        </Text>
        <TabsRoot value={sort} onValueChange={onTabChange}>
          <TabsList>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="recent">Recently Added</TabsTrigger>
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
          gap={6}
          mt={5}
        >
          <For each={new Array(10).fill(true)}>
            {(_, i) => (
              <Box asChild key={i} bg="gray.200" h="280px">
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
