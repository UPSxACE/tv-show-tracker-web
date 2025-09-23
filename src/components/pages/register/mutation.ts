import { gql } from "@apollo/client";

const RegisterUser = gql`
mutation RegisterUser($input: RegisterUserInput!){
    registerUser(input: $input)
}
`;

export default RegisterUser;
