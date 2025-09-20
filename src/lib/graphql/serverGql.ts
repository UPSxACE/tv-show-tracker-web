import { GraphQLClient } from "graphql-request";

const serverGql = new GraphQLClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`);

export default serverGql;

