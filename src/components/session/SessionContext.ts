import { createContext, useContext } from "react";
import type { SessionInfo } from "@/__generated__/graphql";

type SessionState = {
  isLoggedIn: boolean;
  loading: boolean;
  reevaluate: () => void;
  profile?: SessionInfo | null;
};

export const SessionContext = createContext<SessionState | null>(null);

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      `${useSession.name} must be used within a ${SessionContext.name} provider`,
    );
  }
  return context;
}
