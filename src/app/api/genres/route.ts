import { gql } from "graphql-request";
import { NextResponse } from "next/server";
import type { GetGenresQuery } from "@/__generated__/graphql";
import serverGql from "@/lib/graphql/serverGql";

const GetGenres = gql`
query GetGenres {
  allGenres {
    __typename,
    id,
    name
  }
}
`;

export async function GET() {
  const data = await serverGql.request<GetGenresQuery>(GetGenres);
  return NextResponse.json(data.allGenres);
}
