import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email:String!, $password:String! ){
  login(email: $email, password: $password){
    token

    user {
      _id
      username
      email
      savedJobs{
        _id
        authors
        description
        title
        image
        link
      }
  }
}
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token

    user {
      _id
      username
      email
      savedJobs{
        _id
        authors
        description
        title
        image
        link
      }
    }
  }
}

`;

export const SAVE_JOB = gql`
mutation saveJob($job: jobSaving!){
  saveJob(job: $job){
     
     _id
      username
      email
      savedJobs{
        _id
        authors
        description
        title
        image
        link
      }
    
  	
  }
}
`;

export const REMOVE_JOB = gql`
mutation removeJob($jobId: String!){
  removeJob(jobId: $jobId){
    _id
      username
      email
      savedJobs{
        _id
        jobId
        authors
        description
        title
        image
        link
      }
  }
}
`;
