import {gql} from "graphql-request";

export const BecomeHost = gql `
    mutation becomeAHost($input: BecomeHostInput!){
        becomeAHost(input: $input){
            status
            message
        }
    }
`

export const CreateExperience = gql `
    mutation createExperience($input: CreateExperienceInput!){
        createExperience(input: $input){
            status
            message
        }
    }
`