import { gql } from "@apollo/client";

const LoginUser = gql`
mutation LoginUser($input: LoginUserInput!){
loginUser(input: $input){
    accessToken
}
}
`;

export default LoginUser;
