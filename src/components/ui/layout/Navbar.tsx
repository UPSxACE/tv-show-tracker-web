import { Box, HStack } from "@chakra-ui/react";
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
      >
        <Logo />
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
