const express = require("express");
const router = express.Router();
const addCompanyController = require("../controllers/addCompany");
const hitlistController = require("../controllers/hitlist");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, addCompanyController.getCompanyList);
router.post("/addCompany", addCompanyController.createCompany);

//cancel button
router.get("/hitlist", hitlistController.getHitlist);



module.exports = router;
