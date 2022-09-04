const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  notes: {
    type: String,
  },
  thankYou: {
    type: Boolean,
  },
  coffeeChatDate: {
    type: Date,
  },
  Status: {
    type: String,
  },
  links: [
    {
      label: {
        type: String,
      },
      url: {
        type: String,
      }
    }
  ]
})

const CompaniesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
  },
  links: [
    {
      label: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
  },
  positionType: {
    type: String,
  },
  source: {
    type: String,
  },
  contacts: [ContactSchema],
  applied: {
    type: Boolean,
  },
  dateApplicationSent: {
    type: Date,
  },
  InterviewDate: {
    type: Date
  },
  InterviewFollowUp: {
    type: Boolean,
  },
  InterviewFollowUpDate: {
    type: Date,
  },
  nextSteps: {
    type: String,
  }
  
})

module.exports = mongoose.model('Todo', TodoSchema)
