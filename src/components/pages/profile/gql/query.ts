import { gql } from "@apollo/client";

const GetFavoriteTvShows = gql`
query GetFavoriteTvShows($input: FavoriteTvShowsInput!) {
  favoriteTvShows(input: $input) {
    __typename
    total
    pageable {
      __typename
      pageNumber
      pageSize
    }
    content {
      __typename
      id
      favoritedAt
      tvShow {
        __typename
        id
        name
        posterUrl
        voteAverage
      }
    }
  }
}
`;

export default GetFavoriteTvShows;
