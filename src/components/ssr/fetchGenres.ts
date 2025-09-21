import type { GetGenresQuery } from "@/__generated__/graphql";
import { query } from "../apollo/ApolloServerClient";
import GetGenres from "./gql/query";

export default async function fetchGenres() {
  const { data } = await query<GetGenresQuery>({
    query: GetGenres,
    context: {
      fetchOptions: {
        next: {
          revalidate: 21600, // cache for 6 hours
        },
      },
    },
  });

  return data?.allGenres;
}
