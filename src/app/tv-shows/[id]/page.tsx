import { notFound } from "next/navigation";
import type {
  GetTvShowQuery,
  GetTvShowQueryVariables,
} from "@/__generated__/graphql";
import { query } from "@/components/apollo/ApolloServerClient";
import { GetTvShow } from "@/components/pages/tv-show/gql/query";
import Page from "@/components/pages/tv-show/Page";
import { safeParseInt } from "@/lib/utils/numbers";

export default async function TvShow({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsedId = safeParseInt(id);

  if (parsedId === null) notFound();

  const { data } = await query<GetTvShowQuery, GetTvShowQueryVariables>({
    query: GetTvShow,
    variables: {
      id: parsedId,
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: 86400, // cache for 24 hours
        },
      },
    },
  });

  if (!data?.getTvShow) notFound();

  return <Page tvShow={data.getTvShow} />;
}
