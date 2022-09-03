const companies = [
  {
    companyName: "NPR",
    dateAdded: "9 / 3 / 22",
    URL: "https://www.npr.org/careers",
    role: "Front End Dev",
    typeOfPosition: "Software Dev",
    jobSource: "https://www.npr.org/careers",
    applied: "false",
    dateAppSent: "NA",
    interviewDate: "NA",
    interviewFollowUp: "NA",
    interviewFollowUpDate: "NA",
    nextSteps: "Reach out to Contacts",
  },
  {
    companyName: "NPR",
    dateAdded: "9 / 3 / 22",
    URL: "https://www.npr.org/careers",
    role: "Front End Dev",
    typeOfPosition: "Software Dev",
    jobSource: "https://www.npr.org/careers",
    applied: "false",
    dateAppSent: "NA",
    interviewDate: "NA",
    interviewFollowUp: "NA",
    interviewFollowUpDate: "NA",
    nextSteps: "Reach out to Contacts",
  },
];

console.log(companies);

//loops through the companies array
function loadTableData(table, data) {
  for (let company of data) {
    let row = table.insertRow();
    for (key in company) {
      let cell = row.insertCell();
      let text = document.createTextNode(company[key]);
      cell.appendChild(text);
    }
  }
}

//populates hitlist with data from companies array
let table = document.querySelector("#hitlistTableBody");
let data = companies;
loadTableData(table, companies);

//Adding Buttons to each row
let tr = document.querySelectorAll("tbody > tr");

Array.from(tr).forEach(function (trArray) {
  //add View Contacts Button
  let buttonViewContacts = document.createElement("button");
  let tdViewContacts = document.createElement("td");
  buttonViewContacts.innerText = "View Contacts";
  tdViewContacts.append(buttonViewContacts);
  trArray.append(tdViewContacts);
  buttonViewContacts.addEventListener("click", viewContacts);

  //add Edit Company Button
  let buttonEditCompany = document.createElement("button");
  let tdEditCompany = document.createElement("td");
  buttonEditCompany.innerText = "Edit Company";
  tdEditCompany.append(buttonEditCompany);
  trArray.append(tdEditCompany);
  buttonEditCompany.addEventListener("click", editCompany);

  //add Delete Company Button
  let buttonDeleteCompany = document.createElement("button");
  let tdDeleteCompany = document.createElement("td");
  buttonDeleteCompany.innerText = "Delete Company";
  tdDeleteCompany.append(buttonDeleteCompany);
  trArray.append(tdDeleteCompany);
  buttonDeleteCompany.addEventListener("click", deleteCompany);
});

function viewContacts() {
  console.log("clicked view contacts");
}

function editCompany() {
  console.log("clicked edit company");
}

function deleteCompany() {
  console.log("clicked delete company");
}