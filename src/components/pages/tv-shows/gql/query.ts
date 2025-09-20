import { gql } from "@apollo/client";

const GetTvShows = gql`
query GetTvShows($input: AllTvShowsInput) {
  allTvShows(input: $input) {
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
      name
      posterUrl
      voteAverage
    }
  }
}
`

export default GetTvShows;