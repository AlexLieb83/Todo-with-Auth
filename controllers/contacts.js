const Contacts = require("../models/Contact"); //Will this be a separate model or part of the Todo? -Evan 9/5/22

//
module.exports = {
  //reading the todos
  getContacts: async (req, res) => {
    console.log(req.user);
    try {
      //go through, grab just the contact from the logged in user
      const contactList = await Contacts.find({ userId: req.user.id });
      const totalContacts = await Contacts.countDocuments({ //total contacts for the company?
        userId: req.user.id,
        completed: false,
      });
      res.render("fullContactList.ejs", { // alex to make the ejs/
        contactInfo: contactList,
        left: totalContacts,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  //creating new todos
  createContact: async (req, res) => {
    try {
      await Contact.create( req.body {
        name: req.body.fullName,
        position: req.body.position,
        email: req.body.email,
        phone: req.body.phone,
        notes: req.body.notes,
        thankYou: req.body.thankYou,
        coffeeChat: req.body.hadCoffeeChat,
        coffeeChat: req.body.coffeeChatDate,
        status: req.body.status,
        links: [
          {
            linkedIn: req.body.linkedInLink,
            twitter: req.body.twitterLink,
            personalSite: req.body.personalSite
          }
        ],
        completed: false,
        userId: req.user.id,
      });
      console.log("Contact has been added!");
      res.redirect("/contacts");
    } catch (err) {
      console.log(err);
    }
  },
  // //completing todos
  // markComplete: async (req, res) => {
  //   try {
  //     await Todo.findOneAndUpdate(
  //       { _id: req.body.todoIdFromJSFile },
  //       {
  //         completed: true,
  //       }
  //     );
  //     console.log("Marked Complete");
  //     res.json("Marked Complete");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // //reversing completed todos
  // markIncomplete: async (req, res) => {
  //   try {
  //     await Todo.findOneAndUpdate(
  //       { _id: req.body.todoIdFromJSFile },
  //       {
  //         completed: false,
  //       }
  //     );
  //     console.log("Marked Incomplete");
  //     res.json("Marked Incomplete");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  //deleting todos
  deleteContact: async (req, res) => {
    console.log(req.body.todoIdFromJSFile); //change name if needed
    try {
      await Contacts.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Contact");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
