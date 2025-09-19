import {
  Box,
  Center,
  Flex,
  For,
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
import TextSection from "@/components/pages/tv-show/TextSection";
import { CSS_NO_SCROLL } from "@/components/ui/common/css";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default async function TvShow({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
              src="https://image.tmdb.org/t/p/original/yZevl2vHQgmosfwUdVNzviIfaWS.jpg"
            />
            <Stack
              flexBasis="calc(67% - (1.25rem / 2))"
              flexGrow={1}
              minW="200px"
            >
              <Text textStyle="3xl" fontWeight="bold">
                The Flash <Text as="span">(2014)</Text>
              </Text>
              <HStack>
                <Center bg="brand.cta" w="36px" h="36px" rounded="md">
                  <Text as="span" textStyle="md" fontWeight="bold">
                    8.4
                  </Text>
                </Center>
                <Text fontWeight="bold">User Score</Text>
              </HStack>
              <Flex wrap="wrap" gap={5}>
                <TextSection title="Overview">
                  After being struck by lightning, CSI investigator Barry Allen
                  awakens from a nine-month coma to discover he has been granted
                  the gift of super speed. Teaming up with S.T.A.R. Labs, Barry
                  takes on the persona of The Flash, the Fastest Man Alive, to
                  protect his city.
                </TextSection>
                <TextSection
                  flexBasis="calc(33% - (2.5rem / 3))"
                  title="Status"
                >
                  Airing
                </TextSection>
                <TextSection
                  flexBasis="calc(33% - (2.5rem / 3))"
                  title="First Air"
                >
                  {formatDate(new Date())}
                </TextSection>
                <TextSection
                  flexBasis="calc(33% - (2.5rem / 3))"
                  title="Last Air"
                >
                  {formatDate(new Date())}
                </TextSection>
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
        <Stack>
          <Text textStyle="xl" fontWeight="bold">
            Cast
          </Text>
          <HStack overflow="auto" css={CSS_NO_SCROLL}>
            <For each={new Array(10).fill(true)}>
              {(_, i) => (
                <Box
                  asChild
                  key={i}
                  bg="gray.200"
                  h="240px"
                  w="200px"
                  flexShrink={0}
                >
                  <Link href={`/actors/${i}`} />
                </Box>
              )}
            </For>
          </HStack>
        </Stack>
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
                <TableRow>
                  <TableCell>Season 1</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2022-11-23</TableCell>
                </TableRow>
              </TableBody>
            </TableRoot>
          </TableScrollArea>
        </Stack>
      </Stack>
    </VStack>
  );
}
