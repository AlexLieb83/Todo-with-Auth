const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  // todo: {
  //   type: String,
  //   required: true,
  // },
  // completed: {
  //   type: Boolean,
  //   required: true,
  // },
  // userId: {
  //   type: String,
  //   required: true
  // }
  userId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true
  },
  //LINKS:{},
  role: {
    type: String,
    required: true
  },
  positionType: {
    type: String,
    required: true
  },
  //we could use a better name here
  source: {
    type: String,
    required: true
  },
  //CONTACTS: {},
  Applied: {
    type: Boolean,
    required: true
  },
  //not required if user is just scouting the area
  dateApplicationSent: {
    type: Date
  },
  interviewDate: {
    type: Date
  },
  interviewFollowUp: {
    type: Boolean
  },
  interviewFollowupDate: {
    type: Date
  },
  nextSteps: {
    type: String
  }


})

module.exports = mongoose.model('Todo', TodoSchema)
