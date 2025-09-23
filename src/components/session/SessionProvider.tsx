"use client";
import { useMutation, useQuery } from "@apollo/client/react";
import { ReactNode, useContext, useEffect, useMemo, useState } from "react";
import type {
  RefreshTokenMutation,
  SessionInfoQuery,
} from "@/__generated__/graphql";
import { RefreshToken } from "./gql/mutation";
import SessionInfo from "./gql/query";
import { SessionContext } from "./SessionContext";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const { data, refetch, error } = useQuery<SessionInfoQuery>(SessionInfo);

  const [refreshToken] = useMutation<RefreshTokenMutation>(RefreshToken, {
    onCompleted: ({ refreshToken }) => {
      // if mutation returned null, reevaluate session because the user session was probably invalidated
      if (!refreshToken) refetch();
    },
  });

  const profile = data?.sessionInfo;
  const loggedIn = Boolean(profile) && !error;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // if logged in, refresh access token each 40 seconds
    if (loggedIn)
      timeout = setInterval(() => {
        refreshToken();
      }, 3000);

    return () => clearTimeout(timeout);
  }, [loggedIn, refreshToken]);

  const state = useMemo(
    () => ({
      isLoggedIn: loggedIn,
      loading: profile === undefined && !error,
      reevaluate: () => {
        refetch();
      },
      profile,
    }),
    [loggedIn, profile, error, refetch],
  );

  return (
    <SessionContext.Provider value={state}>{children}</SessionContext.Provider>
  );
}
