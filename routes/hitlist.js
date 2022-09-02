const express = require("express");
const router = express.Router();
const hitlistController = require("../controllers/hitlist");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//when '/' is called, run ensureAuth, to make sure user is logged in, getTodos from the todosController
//etc etc
router.get("/", ensureAuth, hitlistController.getHitlist);

router.post("/createCompany", hitlistController.createCompany);

router.get("/getContacts", hitlistController.getConctacts);

router.delete("/deleteCompany", hitlistController.deleteCompany);

module.exports = router;
