import { useQuery } from "@apollo/client/react";
import {
  HStack,
  Stack,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type {
  GetFavoriteTvShowsQuery,
  GetFavoriteTvShowsQueryVariables,
  SessionInfo,
} from "@/__generated__/graphql";
import TvShowDisplay from "@/components/tv-show/TvShowDisplay";
import Avatar from "@/components/ui/Avatar";
import GetFavoriteTvShows from "./gql/query";

const PAGE_SIZE = 10;

export default function Page({ profile }: { profile: SessionInfo }) {
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
    <VStack as="main" gap={0}>
      <VStack w="full" bg="brand.secondary" color="white" gap={0}>
        <HStack
          h="90px"
          w="full"
          maxW="8xl"
          px={{ base: 2.5, xl: 6 }}
          gap={4.5}
          py={3.5}
        >
          <Avatar username={profile.username} size="xl" />
          <Text fontSize="26px" fontWeight="bold">
            {profile.username}
          </Text>
        </HStack>
      </VStack>

      <VStack w="full" gap={0}>
        <VStack
          w="full"
          borderBottom="1px solid"
          borderColor="border"
          bg="gray.100"
        >
          <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} pt={0}>
            <TabsRoot value="favorites" variant="line">
              <TabsList border={0} _before={{ border: 0 }}>
                <TabsTrigger asChild value="favorites" textStyle="sm">
                  <Link href="/profile">Favorites</Link>
                </TabsTrigger>
                <TabsTrigger asChild value="settings" textStyle="sm">
                  <Link href="/profile/settings">Settings</Link>
                </TabsTrigger>
              </TabsList>
            </TabsRoot>
          </Stack>
        </VStack>
        <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} py={3.5}>
          <TvShowDisplay
            page={page}
            pageSize={PAGE_SIZE}
            total={paginationTotal}
            tvShows={tvShows}
            emptyStateMessage="All clear for now. Come back here after adding a TV show to your favorites!"
          />
        </Stack>
      </VStack>
    </VStack>
  );
}

function resolvePage(page: string | null) {
  if (!page) return 1;
  return Number.parseInt(page, 10);
}
