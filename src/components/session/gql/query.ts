import { gql } from "@apollo/client";

const SessionInfo = gql`
query SessionInfo {
    sessionInfo {
        id
        username
        avatarUrl
    }
}
`;

export default SessionInfo;
