const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Jobs.js
const jobSchema = require('./Job');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedJobs to be an array of data that adheres to the jobSchema
    savedJobs: [jobSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Receive a `jobCount` 
userSchema.virtual('jobCount').get(function () {
  return this.savedJobs.length;
});

const User = model('User', userSchema);

module.exports = User;