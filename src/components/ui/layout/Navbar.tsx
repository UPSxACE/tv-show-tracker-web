import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../Logo";
import { NAVBAR_HEIGHT, NAVBAR_ITEMS } from "./constants";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import UserOptions from "./UserOptions";

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
        <HStack
          align="stretch"
          display={{ base: "none", xl: "flex" }}
          flexGrow={1}
        >
          {NAVBAR_ITEMS.map((n) => (
            <NavbarItem key={n.id} link={n.link}>
              {n.label}
            </NavbarItem>
          ))}
          <UserOptions />
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
