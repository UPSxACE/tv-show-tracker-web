"use client";
import Fallback from "@/components/pages/profile/Fallback";
import Page from "@/components/pages/profile/Page";
import { useSession } from "@/components/session/SessionContext";
import SignedIn from "@/components/session/SignedIn";

export default function Profile() {
  const { profile } = useSession();

  return (
    <SignedIn fallback={<Fallback />}>
      {profile ? <Page profile={profile} /> : null}
    </SignedIn>
  );
}
