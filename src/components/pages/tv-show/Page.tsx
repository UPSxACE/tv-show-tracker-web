"use client";
import {
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRoot,
  TableRow,
  TableScrollArea,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import type { GetTvShowQuery } from "@/__generated__/graphql";
import TextSection from "@/components/pages/tv-show/TextSection";
import { CSS_NO_SCROLL } from "@/components/ui/common/css";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import imageFallback from "@/components/ui/utils/imageFallback";
import FavoriteButton from "./FavoriteButton";

export default function Page({
  tvShow,
}: {
  tvShow: NonNullable<GetTvShowQuery["getTvShow"]>;
}) {
  const formatDate = (date: string | null) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  const year = tvShow.firstAirDate
    ? new Date(tvShow.firstAirDate).getFullYear()
    : null;

  const actorCreditsUniqueActors = tvShow.actorCredits.filter(
    (item, index, self) => {
      return self.findIndex((i) => i.actor.id === item.actor.id) === index;
    },
  );

  return (
    <VStack
      minH={{
        base: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
      as="main"
    >
      <VStack bg="brand.secondary" w="full" gap={0} color="white">
        <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} py={6}>
          <Flex wrap="wrap" gap={5} justify="center">
            <Image
              rounded={"lg"}
              flexBasis="calc(33% - (1.25rem / 2))"
              flexGrow={1}
              minW="200px"
              maxW="320px"
              alt="tv-show poster"
              src={tvShow.posterUrl}
              onError={imageFallback}
            />
            <Stack
              flexBasis="calc(67% - (1.25rem / 2))"
              flexGrow={1}
              minW="200px"
            >
              <HStack gap={1}>
                <Text textStyle="3xl" fontWeight="bold">
                  {tvShow.name} {year && <Text as="span">({year})</Text>}
                </Text>
                <FavoriteButton tvShow={tvShow} />
              </HStack>
              <HStack>
                <Center bg="brand.cta" w="36px" h="36px" rounded="md">
                  <Text as="span" textStyle="md" fontWeight="bold">
                    {tvShow.voteAverage.toFixed(1)}
                  </Text>
                </Center>
                <Text fontWeight="bold">User Score</Text>
              </HStack>
              <Flex wrap="wrap" gap={5}>
                <TextSection title="Overview">{tvShow.overview}</TextSection>
                <TextSection
                  flexBasis="calc(33% - (2.5rem / 3))"
                  title="Status"
                >
                  {tvShow.inProduction ? "Airing" : "Ended"}
                </TextSection>
                {tvShow.firstAirDate && (
                  <TextSection
                    flexBasis="calc(33% - (2.5rem / 3))"
                    title="First Air"
                  >
                    {formatDate(tvShow.firstAirDate)}
                  </TextSection>
                )}
                {tvShow.lastAirDate && (
                  <TextSection
                    flexBasis="calc(33% - (2.5rem / 3))"
                    title="Last Air"
                  >
                    {formatDate(tvShow.lastAirDate)}
                  </TextSection>
                )}
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </VStack>
      <Stack
        w="full"
        maxW="8xl"
        px={{ base: 2.5, xl: 6 }}
        gap={4}
        py={3.5}
        pb={8}
      >
        {tvShow.actorCredits.length > 0 && (
          <Stack>
            <Text textStyle="xl" fontWeight="bold">
              Cast
            </Text>
            <HStack overflow="auto" css={CSS_NO_SCROLL}>
              {actorCreditsUniqueActors.map((ac) => (
                <Stack
                  asChild
                  key={ac.id}
                  bg="gray.200"
                  h="240px"
                  w="240px"
                  flexShrink={0}
                  overflow="hidden"
                  gap={0}
                  rounded="sm"
                  pos="relative"
                >
                  <Link href={`/actors/${ac.actor.id}`}>
                    <Image
                      src={ac.actor.profileUrl}
                      objectFit="cover"
                      onError={imageFallback}
                      minH={0}
                      flexGrow={1}
                    />
                    <VStack
                      justify="center"
                      bg="gray.700/75"
                      color="white"
                      pos="absolute"
                      bottom={0}
                      h="48px"
                      w="full"
                      flexShrink={0}
                      px={2}
                      gap={0}
                    >
                      <Text
                        textAlign="center"
                        w="full"
                        fontWeight="bold"
                        lineClamp={1}
                      >
                        {ac.actor.name}
                      </Text>
                      <Text
                        textAlign="center"
                        w="full"
                        fontWeight="bold"
                        lineClamp={1}
                        textStyle="sm"
                      >
                        {ac.character}
                      </Text>
                    </VStack>
                  </Link>
                </Stack>
              ))}
            </HStack>
          </Stack>
        )}
        {tvShow.seasons.length > 0 && (
          <Stack>
            <Text textStyle="xl" fontWeight="bold">
              Seasons
            </Text>
            <TableScrollArea borderWidth="1px">
              <TableRoot size="sm" variant="outline">
                <TableHeader>
                  <TableRow>
                    <TableColumnHeader>Season</TableColumnHeader>
                    <TableColumnHeader>Episodes</TableColumnHeader>
                    <TableColumnHeader>Air Date</TableColumnHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tvShow.seasons.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell>{s.name}</TableCell>
                      <TableCell>{s.episodeCount}</TableCell>
                      <TableCell>
                        {s.airDate
                          ? new Date(s.airDate).toISOString().split("T")[0]
                          : ""}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableRoot>
            </TableScrollArea>
          </Stack>
        )}
      </Stack>
    </VStack>
  );
}
