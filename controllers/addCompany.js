const addCompany = require("../models/addCompany"); 

module.exports = {
    //reading the companies
    getCompanyList: async (req, res) => { //get company
        console.log(req.user);
        try {
            //go through, grab just the companies from the logged in user
            const companyList = await addCompany.find({ userId: req.user.id }); //list out all the companies relevant to the logged in user. 
            const totalCompanies = await addCompany.countDocuments({ //Currently repurposing this to tally number of companies listed in db for that logged in user.
                userId: req.user.id,
                completed: false,
            });
            res.render("companyView.ejs", { //the full list of companies in the hitlist.
                companies: companyList,
                left: totalCompanies, //numerical value of all companies in users database. 
                user: req.user,
            });
        } catch (err) {
            console.log(err);
        }
    },
    //creating a new company
    createCompany: async (req, res) => { //create a company
        try {
            await addCompany.create({
                userId: req.user.id,

                company: req.body.companyName,
                coffeeChatDate: req.body.DateAdded,
                role: req.body.Role,
                positionType: req.body.PositionType,
                source: req.body.Source,
                links: req.body.URLText,
                url: req.body.URLLink,
                firstName: req.body.FirstName,
                lastName: req.body.LastName,
                email: req.body.Email,
                phone: req.body.Phone,
                notes: req.body.Notes,
                // coffeeChatDate: req.body.CoffeeChat, //I believe this second coffee chat is a duplicate from line 26 on todos.ejs?
                // cofeeChatDate: req.body.CoffeeChat, // another duplicate?
                // cofeechatDate: req.body.DateAdded, // another duplicate?
                status: req.body.Active, //extracting data from drop down, anythign special needed?
                applied: req.body.Applied,
                completed: false, // leaving in to grab a count of total companies. 
                
            });
            console.log("A new company has been created!");
            res.redirect("/"); //***CHANGE*** -> whats the home directory called?
        } catch (err) {
            console.log(err);
        }
    },
    //completing todos
    //   markComplete: async (req, res) => { //...mark company complete
    //     try {
    //       await addCompany.findOneAndUpdate(
    //         { _id: req.body.todoIdFromJSFile },
    //         {
    //           completed: true,
    //         }
    //       );
    //       console.log("Marked Complete");
    //       res.json("Marked Complete");
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    //   //reversing completed todos
    //   markIncomplete: async (req, res) => {
    //     try {
    //       await addCompany.findOneAndUpdate(
    //         { _id: req.body.todoIdFromJSFile },
    //         {
    //           completed: false,
    //         }
    //       );
    //       console.log("Marked Incomplete");
    //       res.json("Marked Incomplete");
    //     } catch (err) {
    //       console.log(err);
    //     }
    // },
    //deleting todos
    deleteCompany: async (req, res) => { //delete company. 
        console.log(req.body.todoIdFromJSFile);
        try {
            await addCompany.findOneAndDelete({ _id: req.body.todoIdFromJSFile }); //convert todoId if changed on front end by Tristan/Antonio
            console.log("Deleted Company");
            res.json("Deleted It");
        } catch (err) {
            console.log(err);
        }
    },
};

