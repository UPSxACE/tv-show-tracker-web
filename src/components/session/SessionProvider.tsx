"use client";
import { useMutation, useQuery } from "@apollo/client/react";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import type {
  RefreshTokenMutation,
  SessionInfoQuery,
} from "@/__generated__/graphql";
import { RefreshToken } from "./gql/mutation";
import SessionInfo from "./gql/query";
import { SessionContext } from "./SessionContext";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false); // session is considered initialized after it attempted to refreshToken at least once

  const [refreshToken, { called: refreshTokenCalled }] =
    useMutation<RefreshTokenMutation>(RefreshToken, {
      onCompleted: ({ refreshToken }) => {
        if (!initialized) setInitialized(true);

        // if mutation returned null, reevaluate session because the user session was probably invalidated
        if (!refreshToken) refetch();
      },
    });

  const { data, refetch, error } = useQuery<SessionInfoQuery>(SessionInfo, {
    skip: !initialized, // must refresh token at least once before querying session info
  });

  const profile = data?.sessionInfo;
  const loggedIn = Boolean(profile) && !error;

  useEffect(() => {
    if (!refreshTokenCalled) {
      // must refresh token at least once before querying session info
      refreshToken();
    }

    let timeout: NodeJS.Timeout;

    // if logged in, refresh access token each 40 seconds
    if (loggedIn)
      timeout = setInterval(() => {
        refreshToken();
      }, 40000);

    return () => clearTimeout(timeout);
  }, [refreshTokenCalled, loggedIn, refreshToken]);

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
