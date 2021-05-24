import {gql} from "graphql-request";

export const BecomeHost = gql `
    mutation becomeAHost($input: BecomeHostInput!){
        becomeAHost(input: $input){
            status
            message
        }
    }
`