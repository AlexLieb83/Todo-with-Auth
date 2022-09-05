//returns the getIndex function, which renders the index.ejs file

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
    // res.render("companyView.ejs")
  },
};
