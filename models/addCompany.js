const mongoose = require("mongoose");

// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

const AddCompanySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
  joblink: {
    type: String,
  },
  role: {
    type: String,
    // required: true
  },
  positionType: {
    type: String,
    // required: true
  },
  source: {
    type: String,
    // required: true
  },
  dateApplicationSent: {
    type: String,
  },
  interviewDate: {
    type: String,
  },
  interviewFollowUpDate: {
    type: String,
  },
  nextSteps: {
    type: String,
  },
  //contacts probably needs to be its own schema
  contacts: [
    {
      name: { type: String },
      position: { type: String },
      email: { type: String },
      phone: { type: String },
      notes: { type: String },
      thankYou: { type: Date },
      coffeeChat: { type: Boolean },
      coffeeChatDate: { type: Date },
      status: { type: String },
      links: [
        {
          label: { type: String },
          url: { type: String },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("addCompany", AddCompanySchema);
