"use client";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { useSession } from "./SessionContext";

export default function SignedIn({
  fallback,
  children,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const router = useRouter();

  const { isLoggedIn, loading } = useSession();

  useEffect(() => {
    if (!loading && !isLoggedIn) router.push("/");
  }, [loading, isLoggedIn, router]);

  if (loading) return fallback || null;

  if (!isLoggedIn) return null;

  return children;
}
