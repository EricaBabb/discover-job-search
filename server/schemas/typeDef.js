const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Job {
        _id: ID
        authors: [String]
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
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    input jobToSave {
        authors: [String]
        description: String
        jobId: String
        image: String
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