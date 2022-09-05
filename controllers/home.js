// returns the getIndex function, which renders the index.ejs file

// const contacts = [{
//   name: 'Framework',
//   position: 'CEO',
//   email: 'fram-work@email.com',
//   phone: '555-555-5555',
//   notes: 'Contact likes to drink espresso and plays DnD.',
//   thankYou: true,
//   coffeeChat: true,
//   coffeeChatDate: formatDate(new Date(2022,09,01)),
//   status: 'active',
//   links: [
//     {
//       label: 'Twitter',
//       url: 'www.twitter.com"'
//     },
//     {
//       label: 'LinkedIn',
//       url: 'www.linkedin.com'
//     }
//   ],
//   notes: 'Contact likes to drink espresso and plays DnD.'
// },
// {
//   name: 'Framework',
//   position: 'CEO',
//   email: 'fram-work@email.com',
//   phone: '555-555-5555',
//   notes: 'Contact likes to drink espresso and plays DnD.',
//   thankYou: true,
//   coffeeChat: true,
//   coffeeChatDate: formatDate(new Date(2022,09,01)),
//   status: 'active',
//   links: [
//     {
//       label: 'Twitter',
//       url: 'www.twitter.com"'
//     },
//     {
//       label: 'LinkedIn',
//       url: 'www.linkedin.com'
//     }
//   ],
//   notes: 'Contact likes to drink espresso and plays DnD.'
// }]

// function formatDate(date) {
//   let d = new Date(date),
//       month = '' + (d.getMonth() + 1),
//       day = '' + d.getDate(),
//       year = d.getFullYear();

//   if (month.length < 2) 
//       month = '0' + month;
//   if (day.length < 2) 
//       day = '0' + day;

//   return [year, month, day].join('-');
// }

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
    // res.render("companyView.ejs", {contacts: contacts})
  }
};
