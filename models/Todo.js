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
  links: [{
    label: { type: String },
    url: { type: String }
  }],
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
  contacts: [{
    name: { type: String },
    position: { type: String },
    email: { type: String },
    phone: { type: String },
    notes: { type: String },
    thankYou: { type: Date },
    coffeeChat: { type: Boolean },
    coffeeChatDate: { type: Date },
    status: { type: String },
    links: [{
      label: { type: String },
      url: { type: String }
    }]
  }],
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
