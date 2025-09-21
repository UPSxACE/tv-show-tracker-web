"use client";
import {
  Flex,
  Image,
  Stack,
  Text,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineTitle,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import type { GetActorQuery } from "@/__generated__/graphql";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";
import imageFallback from "@/components/ui/utils/imageFallback";

export default function Page({
  actor,
  actorCredits,
}: {
  actor: NonNullable<GetActorQuery["getActor"]>;
  actorCredits: NonNullable<GetActorQuery["getActorCredits"]>;
}) {
  const actorCreditsOrdered = actorCredits.toSorted((a, b) => {
    const dateA = a.firstCreditAirDate
      ? new Date(a.firstCreditAirDate).getTime()
      : 0;
    const dateB = b.firstCreditAirDate
      ? new Date(b.firstCreditAirDate).getTime()
      : 0;
    return dateB - dateA;
  });

  return (
    <VStack
      minH={{
        base: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
      as="main"
    >
      <Stack w="full" maxW="8xl" px={{ base: 2.5, xl: 6 }} gap={0} py={6}>
        <Flex wrap="wrap" gap={5} justify="center">
          <Image
            rounded={"lg"}
            flexBasis="calc(33% - (1.25rem / 2))"
            flexGrow={1}
            minW="200px"
            maxW="320px"
            maxH="320px"
            alt="actor poster"
            src={actor.profileUrl}
            onError={imageFallback}
          />
          <Stack
            flexBasis="calc(67% - (1.25rem / 2))"
            flexGrow={1}
            minW="200px"
          >
            <Text textStyle="3xl" fontWeight="bold">
              {actor.name}
            </Text>
            <TimelineRoot>
              {actorCreditsOrdered.map((ac) => (
                <TimelineItem key={ac.id}>
                  <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">
                      {ac.firstCreditAirDate
                        ? new Date(ac.firstCreditAirDate)
                            .toISOString()
                            .slice(0, 4)
                        : "????"}
                    </TimelineTitle>
                  </TimelineContent>
                  <TimelineConnector>
                    <TimelineSeparator />
                    <TimelineIndicator />
                  </TimelineConnector>
                  <TimelineContent>
                    <TimelineTitle
                      asChild
                      fontWeight="bold"
                      textDecoration={ac.tvShowId ? "underline" : "none"}
                    >
                      {ac.tvShowId ? (
                        <Link href={`/tv-shows/${ac.tvShowId}`}>{ac.name}</Link>
                      ) : (
                        <Text>{ac.name}</Text>
                      )}
                    </TimelineTitle>
                    {ac.character ?? (
                      <TimelineDescription>
                        as{" "}
                        <Text as="span" color="black">
                          {ac.character}
                        </Text>
                      </TimelineDescription>
                    )}
                    {ac.overview ?? <Text textStyle="sm">{ac.overview}</Text>}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineRoot>
          </Stack>
        </Flex>
      </Stack>
    </VStack>
  );
}
