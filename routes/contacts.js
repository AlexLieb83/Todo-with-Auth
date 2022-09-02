const express = require("express");
const router = express.Router();
const hitlistController = require("../controllers/hitlist");
const contactsController = require("../controllers/contacts");
const editContactController = require("../controllers/editContact");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, contactsController.getContacts);

router.get("/getCompany", contactsController.getCompany);

router.post("/addContact", contactsController.addContact);


//buttons at end of each contact
router.get("/updateContact", editContactController.updateConctact);

router.delete("/deleteContact", editContactController.deleteContact);

//hamburger menu? how will you get out of this page and back to hitlist
router.get("/hitlist", hitlistController.getHitlist) 

module.exports = router;
