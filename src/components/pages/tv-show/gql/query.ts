import { gql } from "@apollo/client";

const GetTvShow = gql`
query GetTvShow($id: Int!) {
    getTvShow(id: $id){
        __typename
        id
        name
        overview
        posterUrl
        popularity
        voteAverage
        numberOfSeasons
        numberOfEpisodes
        firstAirDate
        lastAirDate
        inProduction
        seasons {
            __typename
            id
            seasonNumber
            name
            episodeCount
            airDate
        }
        genres {
            __typename
            id
            name
        }
        actorCredits {
            __typename
            id
            character
            popularity
            actor {
                id
                name
                popularity
                profileUrl
            }
        }
    }
}
`;

export default GetTvShow;
