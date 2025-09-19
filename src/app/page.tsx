import { Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import CtaButton from "@/components/ui/button/CtaButton";
import { NAVBAR_HEIGHT } from "@/components/ui/layout/constants";

export default function Home() {
  return (
    <VStack
      pos="relative"
      minH={{
        base: `calc(100svh - ${NAVBAR_HEIGHT.base}px)`,
        xl: `calc(100svh - ${NAVBAR_HEIGHT.xl}px)`,
      }}
      as="main"
      backgroundImage="url('./landing.jpg')"
      backgroundSize="cover"
      backgroundPositionX="center"
      _before={{
        content: "''",
        pos: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: "black",
        opacity: "60%",
      }}
      color="white"
    >
      <Center
        pos="relative"
        w="full"
        maxW="8xl"
        px={{ xl: 6 }}
        py={{ base: 4, xl: 6 }}
        flexGrow="1"
      >
        <VStack>
          <Text
            textTransform="uppercase"
            textStyle="5xl"
            textAlign="center"
            fontWeight="semibold"
          >
            Manage your{" "}
            <Text as="span" color="brand.cta">
              TV Shows
            </Text>{" "}
            easily!
          </Text>
          <Text mt={1.5} textAlign="center" textStyle="2xl">
            Explore, Organize and Schedule your Favorite TV Shows right here.
          </Text>
          <CtaButton mt={8} rounded="full" size="lg" asChild>
            <Link href="/tv-shows">Get Started</Link>
          </CtaButton>
        </VStack>
      </Center>
    </VStack>
  );
}
