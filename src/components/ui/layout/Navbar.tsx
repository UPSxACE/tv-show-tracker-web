import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../Logo";
import { NAVBAR_HEIGHT } from "./constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <HStack as="header" color="white" bg="brand.primary" justify="center">
      <MobileMenu />
      <HStack
        as="nav"
        minH={{
          base: `${NAVBAR_HEIGHT.base}px`,
          xl: `${NAVBAR_HEIGHT.xl}px`,
        }}
        justify={{
          xlDown: "center",
        }}
        align="stretch"
        w="full"
        maxW="8xl"
        px={{ xl: 6 }}
        gap={4}
      >
        <Logo />
        <HStack align="stretch" display={{ base: "none", xl: "flex" }}>
          <Button
            ml={2.5}
            asChild
            variant="plain"
            minH="0"
            h="auto"
            borderBottom="2px solid"
            borderBottomColor={{
              base: "transparent",
              _hover: "brand.cta",
            }}
            px={1}
            pt={1}
            color="gray.300"
          >
            <Link href="/tv-shows">TV Shows</Link>
          </Button>
        </HStack>
      </HStack>
      <Box
        display={{
          xl: "none",
        }}
        h={{
          base: `${NAVBAR_HEIGHT.base}px`,
          xl: `${NAVBAR_HEIGHT.xl}px`,
        }}
        w={{
          base: `${NAVBAR_HEIGHT.base}px`,
          xl: `${NAVBAR_HEIGHT.xl}px`,
        }}
        flexShrink={0}
      />
    </HStack>
  );
}
