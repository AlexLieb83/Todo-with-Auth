const express = require("express");
const router = express.Router();
const hitlistController = require("../controllers/hitlist");
const addCompanyController = require("../controllers/addCompany");


const contactsController = require("../controllers/contacts");
// const editCompanyController = require("../controllers/editCompany");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// //when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
// //etc etc
router.get("/", ensureAuth, hitlistController.getHitlist);
router.get("/addCompany", addCompanyController.createCompany);


// //buttons at end of each company
// router.get("/addContacts", contactsController.addContact); 
// router.get("/getContacts", contactsController.getConctacts);
// router.get("/editCompany", editCompanyController.getEditCompany)
// router.delete("/deleteCompany", editCompanyController.deleteCompany);

module.exports = router;
 