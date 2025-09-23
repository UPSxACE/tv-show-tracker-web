"use client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloProviderLib } from "@apollo/client/react";
import type { ReactNode } from "react";

const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function ApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloProviderLib client={client}>{children}</ApolloProviderLib>;
}
