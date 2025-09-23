"use client";

import { useMutation } from "@apollo/client/react";
import { HStack } from "@chakra-ui/react";
import type { LogoutMutation } from "@/__generated__/graphql";
import { useSession } from "@/components/session/SessionContext";
import Logout from "./gql/mutation";
import NavbarItem from "./NavbarItem";

export default function UserOptions() {
  const { loading, isLoggedIn, reevaluate } = useSession();

  const [logout] = useMutation<LogoutMutation>(Logout, {
    onCompleted: () => {
      reevaluate();
    },
  });

  const handleLogout = () => logout();

  if (loading) return null;

  if (!isLoggedIn)
    return (
      <HStack align="stretch" ml="auto">
        <NavbarItem link="/login">Login</NavbarItem>
        <NavbarItem link="/register">Register</NavbarItem>
      </HStack>
    );

  return (
    <HStack align="stretch" ml="auto">
      <NavbarItem onClick={handleLogout}>Logout</NavbarItem>
    </HStack>
  );
}
