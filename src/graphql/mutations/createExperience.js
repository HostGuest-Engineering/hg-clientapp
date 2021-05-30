import {gql} from "graphql-request";

export const CREATE_EXPERIENCE = gql`
    mutation createExperience($input:CreateExperienceInput!) {
        createExperience(input:$input){
            joinedPeople 
            imagesOfExperience
            userBrings
            status
            datesOfExperience
            createdAt
            _id
            nameOfExperience
            descriptionOfExperience
            numberOfPeopleAllowed
            price
            experienceAuthor 
            duration
            category
            subcategory
        }
    }
`;

// {
//     host
//     _id
//     name
//     email
//     mobile
//     description
//     hostBrand
//     location
//     picture
// }