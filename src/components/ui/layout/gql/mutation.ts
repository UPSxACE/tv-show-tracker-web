import { gql } from "@apollo/client";

const Logout = gql`
mutation Logout{
    logout
}
`;

export default Logout;
