import { HttpLink } from "@apollo/client";
import {
    ApolloClient,
    InMemoryCache,
    registerApolloClient,
} from "@apollo/client-integration-nextjs";

export const { getClient: getServerClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            // this needs to be an absolute url, as relative urls cannot be used in SSR
            uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
            fetchOptions: {},
        }),
    });
})