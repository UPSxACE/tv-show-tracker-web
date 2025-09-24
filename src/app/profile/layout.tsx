"use client";
import { VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Fallback from "@/components/pages/profile/Fallback";
import Header from "@/components/pages/profile/Header";
import { useSession } from "@/components/session/SessionContext";
import SignedIn from "@/components/session/SignedIn";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { profile } = useSession();

  return (
    <SignedIn fallback={<Fallback />}>
      <VStack as="main" gap={0}>
        <Header profile={profile} />
        {children}
      </VStack>
    </SignedIn>
  );
}
