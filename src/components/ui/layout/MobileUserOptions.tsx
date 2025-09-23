"use client";
import { useMutation } from "@apollo/client/react";
import type { LogoutMutation } from "@/__generated__/graphql";
import { useSession } from "@/components/session/SessionContext";
import Logout from "./gql/mutation";
import MobileNavbarItem from "./MobileNavbarItem";

export default function MobileUserOptions() {
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
      <>
        <MobileNavbarItem link="/login">Login</MobileNavbarItem>
        <MobileNavbarItem link="/register">Register</MobileNavbarItem>
      </>
    );

  return <MobileNavbarItem onClick={handleLogout}>Logout</MobileNavbarItem>;
}
