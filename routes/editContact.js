const express = require("express");
const router = express.Router();
const hitlistController = require("../controllers/hitlist");
const addCompanyController = require("../controllers/addCompany");
const contactsController = require("../controllers/contacts");
const editCompanyController = require("../controllers/editCompany");
const editContactController = require("../controllers/editContact");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, editContactController.getEditContact);

//on inital load, get company that contact works for
router.get("/getCompany", editCompanyController.getCompany);

//on inital load, get contact that is targeted for editing (this might be completed on the above get method and could be redundent)
router.get("/getContact", editContactController.getContact);

router.put("updateContact", editContactController.updateContact)

//cancel button
router.get("/contacts", contactsController.getContacts) 

module.exports = router;
