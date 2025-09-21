import { gql } from "@apollo/client";

const GetActor = gql`
query GetActor($id: Int!) {
  getActor(id: $id){
    __typename
    id
    name
    popularity
    profileUrl
  }
  getActorCredits(actorId: $id){
    __typename
    id
    name
    overview
    popularity
    character
    firstAirDate
    firstCreditAirDate
    tvShowId
  }
}
`;

export default GetActor;
