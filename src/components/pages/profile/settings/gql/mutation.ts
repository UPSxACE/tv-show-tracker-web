import { gql } from "@apollo/client";

const DeleteAccount = gql`
mutation DeleteAccount {
  deleteAccount(input:  {
     confirm: true
  })
}
`;

export default DeleteAccount;
