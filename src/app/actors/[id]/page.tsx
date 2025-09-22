import { notFound } from "next/navigation";
import type {
  GetActorQuery,
  GetActorQueryVariables,
} from "@/__generated__/graphql";
import { query } from "@/components/apollo/ApolloServerClient";
import GetActor from "@/components/pages/actor/gql/query";
import Page from "@/components/pages/actor/Page";
import { safeParseInt } from "@/lib/utils/numbers";

export default async function Actor({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsedId = safeParseInt(id);

  if (parsedId === null) notFound();

  const { data } = await query<GetActorQuery, GetActorQueryVariables>({
    query: GetActor,
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

  if (!data?.getActor || !data?.getActorCredits) notFound();

  return <Page actor={data.getActor} actorCredits={data.getActorCredits} />;
}
