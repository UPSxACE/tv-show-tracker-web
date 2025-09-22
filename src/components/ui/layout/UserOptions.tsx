"use client";

import { HStack } from "@chakra-ui/react";
import NavbarItem from "./NavbarItem";

export default function UserOptions() {
  return (
    <HStack align="stretch" ml="auto">
      <NavbarItem link="/login">Login</NavbarItem>
      <NavbarItem link="/register">Register</NavbarItem>
    </HStack>
  );
}
