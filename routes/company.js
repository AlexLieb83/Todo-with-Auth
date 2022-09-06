const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company");
const hitlistController = require("../controllers/hitlist");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, companyController.getCompanyList);

router.get("/goToAdd", companyController.getAddCompanyPage);
router.post("/addCompany", companyController.createCompany);

//cancel button
router.get("/hitlist", hitlistController.getHitList);

module.exports = router;
