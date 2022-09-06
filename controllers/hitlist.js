//returns the getIndex function, which renders the index.ejs file

module.exports = {
    getHitList: (req, res) => {
      res.render("hitList.ejs");
    },
}