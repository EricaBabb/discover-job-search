import { gql } from '@apollo/client';

export const GET_ME = gql`

query {
    me{
       _id
        username
        email
        savedJobs{
          _id
          jobId
          description
          title
          image
          link
        }
    }
  }
`;