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
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default function Actor({ params }: { params: Promise<{ id: number }> }) {
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
            alt="tv-show poster"
            src="https://image.tmdb.org/t/p/original/kEGU1gGySIe63lyL7AnwXEw4rQn.jpg"
          />
          <Stack
            flexBasis="calc(67% - (1.25rem / 2))"
            flexGrow={1}
            minW="200px"
          >
            <Text textStyle="3xl" fontWeight="bold">
              Grant Gustin
            </Text>
            <TimelineRoot>
              <TimelineItem>
                <TimelineContent width="auto">
                  <TimelineTitle whiteSpace="nowrap">2023</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                  <TimelineSeparator />
                  <TimelineIndicator />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle
                    asChild
                    fontWeight="bold"
                    textDecoration={{ _hover: "underline" }}
                  >
                    <Link href="/tv-shows/1">Product Shipped</Link>
                  </TimelineTitle>
                  <TimelineDescription>
                    as{" "}
                    <Text as="span" color="black">
                      Barry Keenen
                    </Text>
                  </TimelineDescription>
                  <Text textStyle="sm">
                    We shipped your product via <strong>FedEx</strong> and it
                    should arrive within 3-5 business days.
                  </Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineContent width="auto">
                  <TimelineTitle whiteSpace="nowrap">2021</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                  <TimelineSeparator />
                  <TimelineIndicator />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle fontWeight="bold">
                    Order Confirmed
                  </TimelineTitle>
                  <TimelineDescription>
                    as{" "}
                    <Text as="span" color="black">
                      Barry Keenen
                    </Text>
                  </TimelineDescription>
                  <Text textStyle="sm">
                    We shipped your product via <strong>FedEx</strong> and it
                    should arrive within 3-5 business days.
                  </Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineContent width="auto">
                  <TimelineTitle whiteSpace="nowrap">2020</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                  <TimelineSeparator />
                  <TimelineIndicator />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle fontWeight="bold">
                    Order Delivered
                  </TimelineTitle>
                  <TimelineDescription>
                    as{" "}
                    <Text as="span" color="black">
                      Barry Keenen
                    </Text>
                  </TimelineDescription>
                  <Text textStyle="sm">
                    We shipped your product via <strong>FedEx</strong> and it
                    should arrive within 3-5 business days.
                  </Text>
                </TimelineContent>
              </TimelineItem>
            </TimelineRoot>
          </Stack>
        </Flex>
      </Stack>
    </VStack>
  );
}
