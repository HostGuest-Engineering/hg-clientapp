import {gql} from "graphql-request";

const OauthGoogleResolver = gql `
    mutation OauthGoogleResolver($input:GoogleAuth!){
        oauthGoogleResolver(input:$input){
            status
            id
            token
        }
    }
`

export const SIGN_IN = gql `
    mutation signIn($input:SignInInput!){
        signIn(input:$input){
            status
            message
            id
        }
    }
`

export const SIGN_UP = gql `
    mutation signUp($input:SignUpInput!){
        signUp(input:$input){
            status
            message
        }
    }
`

export const USER_DETAILS = gql `
    query userDetails{
        userDetails{
            email
            mobile
            name
        }
    }
`

export const LOG_OUT = gql `
    mutation logOut {
        logOut {
            message
        }
    }

`
export default OauthGoogleResolver;