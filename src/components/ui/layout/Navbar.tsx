import { Box, HStack } from "@chakra-ui/react";
import Logo from "../Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <HStack as="header" color="white" bg="brand.primary" justify="center">
      <MobileMenu />
      <HStack
        as="nav"
        minH={{
          base: "50px",
          xl: "70px",
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
          base: "50px",
          xl: "70px",
        }}
        w={{
          base: "50px",
          xl: "70px",
        }}
        flexShrink={0}
      />
    </HStack>
  );
}
