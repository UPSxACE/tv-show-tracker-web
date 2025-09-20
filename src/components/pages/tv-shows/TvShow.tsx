import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { GetTvShowsQuery } from "@/__generated__/graphql";
import imageFallback from "@/components/ui/utils/imageFallback";

export default function TvShow({
  tvShow,
}: {
  tvShow: GetTvShowsQuery["allTvShows"]["content"][number];
}) {
  return (
    <Stack
      asChild
      bg="gray.200"
      h="260px"
      overflow="hidden"
      gap={0}
      rounded="sm"
      pos="relative"
    >
      <Link href={`/tv-shows/${tvShow.id}`}>
        <Image
          src={tvShow.posterUrl}
          objectFit="cover"
          onError={imageFallback}
          minH={0}
          flexGrow={1}
        />
        <HStack
          bg="gray.700/75"
          color="white"
          pos="absolute"
          bottom={0}
          h="32px"
          w="full"
          flexShrink={0}
          px={2}
        >
          <Text textAlign="center" w="full" fontWeight="bold" lineClamp={1}>
            {tvShow.name}
          </Text>
        </HStack>
      </Link>
    </Stack>
  );
}
