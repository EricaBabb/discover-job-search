const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become it's own model, but we'll use it as the schema for the User's `savedJobs` array in User.js
const jobSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved job id from Indeed
  JobsId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = jobSchema;