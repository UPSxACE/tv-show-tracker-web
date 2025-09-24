import { gql } from "@apollo/client";

export const SaveFavoriteTvShow = gql`
mutation SaveFavoriteTvShow($id: Int!) {
    saveFavoriteTvShow(tvShowId: $id)
}
`;

export const UnfavoriteTvShow = gql`
mutation UnfavoriteTvShow($id: Int!) {
    unfavoriteTvShow(tvShowId: $id)
}
`;
