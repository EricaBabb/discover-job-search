const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Job {
        _id: ID
        description: String
        JobId: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        jobCount: Int
        savedJobs: [job]
    }
    type Query {
        me: User
    }
    input jobToSave {
        description: String
        jobId: String
        link: String
        title: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveJob(job: jobToSave): User
        removeJob(jobId: String!): User
    }
`;

module.exports = typeDefs;