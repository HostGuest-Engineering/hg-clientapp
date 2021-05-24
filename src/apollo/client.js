import {GraphQLClient} from "graphql-request";

const client = new GraphQLClient(process.env.REACT_APP_BACKEND_URL, {
    headers: {
        // authorization: `Bearer ${token}`
    },
    credentials: 'include',
});

export default client;
