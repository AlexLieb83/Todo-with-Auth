const addCompany = require("../models/addCompany"); 
//returns the getIndex function, which renders the index.ejs file

module.exports = {
  getHitlist: (req, res) => {
    res.render("hitList.ejs");
    // res.render("companyView.ejs")
  },
};

