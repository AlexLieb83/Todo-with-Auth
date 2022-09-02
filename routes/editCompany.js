const express = require("express");
const router = express.Router();
const editCompanyController = require("../controllers/editCompany");
const hitlistController = require("../controllers/hitlist");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, editCompanyController.getEditCompany);

//on inital load, get company that is targeted for editing (this might be completed on the above get method and could be redundent)
router.get("/getCompany", editCompanyController.getCompany);

router.put("updateCompany", editCompanyController.updateCompany)


//cancel button
router.get("/hitlist", hitlistController.getHitlist) 

module.exports = router;
