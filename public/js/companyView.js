// // Sample data until Schema is built and data is passed in
// const contacts = [
//   {
//     name: 'Apple',
//     position: 'frontend dev',
//     email: 'newdev@email.com',
//     phone: '123-456-7890',
//     notes: 'Likes DnD. Plays Halo on Series X. Uses mainly MERN stack.',
//     thankYou: true ,
//     coffeeChat: true,
//     coffeeChatDate: formatDate(new Date(2022, 10, 17)) ,
//     status: 'active',
//     links: [
//       {
//         label: 'Twitter',
//         url: 'www.twitter.com'
//       },
//       {
//         labe: 'Facebook',
//         url: 'www.facebook.com'
//       }
//     ],
//   },
//   {
//     name: 'Google',
//     position: 'fullstack dev',
//     email: 'newdev2@email.com',
//     phone: '123-456-0987',
//     notes: 'Likes MtG. Plays Fallout on Steam. Uses mainly MEVN stack.',
//     thankYou: false ,
//     coffeeChat: true,
//     coffeeChatDate: formatDate(new Date(2022, 09, 15)) ,
//     status: 'active',
//     links: [
//       {
//         label: 'Twitter',
//         url: 'www.twitter.com'
//       },
//       {
//         labe: 'Facebook',
//         url: 'www.facebook.com'
//       }
//     ],
//   },
// ]

// // Function to format date found: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
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

// // Load all data into the table
// // To possibly be replaced by a for loop in EJS to handle this
// function loadContacts(){

//   // Target the table body
//   const contactsTable = document.querySelector('#contactsTable')

//   // Loop through all contact records
//   for(let i = 0; i < contacts.length; i++){
//     // <tr>
//     //   <td><%= contacts[i].name %></td>
//     // </tr>

//     // Create a new table header and table row for each contact record
//     let th = document.createElement('th')
//     let tr = document.createElement('tr')

//     // Set up the table header as specified in Bootstrap documentation
//     // Creates an incrementing index for each row
//     th.setAttribute('scope', 'row')
//     th.innerHTML = `${i + 1}`

//     // Add the table header to the table row
//     tr.appendChild(th)

//     // create an array of all entries in each object, to use to loop through
//     const obj = Object.entries(contacts[i])
    
//     // Loop through each property in each element of the contact object
//     for(let i = 0; i < obj.length; i++){
//       // Create a new row field
//       let td = document.createElement('td')

//       // Set the value of the row field to the value in the object (name, address, email, etc.)
//       td.innerText = obj[i][1]

//       // add the new row field to the row
//       tr.appendChild(td)
//     }

//     // Add the row (with all fields) to the table body
//     contactsTable.appendChild(tr)
//   }
// }

// // trigger the loadContacts function on page load
// loadContacts()
