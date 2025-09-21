import { gql } from "@apollo/client";

const GetGenres = gql`
query GetGenres {
  allGenres {
    __typename,
    id,
    name
  }
}
`;

export default GetGenres;
