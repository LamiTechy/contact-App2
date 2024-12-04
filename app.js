

let contactArray = JSON.parse(localStorage.getItem("userInfo")) || [];

function collectUserInfo() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let phoneNo = document.getElementById("phoneNo").value;
  let address = document.getElementById("address").value;

  let userObject = {
    first_Name: firstName,
    last_Name: lastName,
    user_email: email,
    dob: dob,
    phoneNo: phoneNo,
    address: address,
  };

  contactArray.push(userObject);
  localStorage.setItem("userInfo", JSON.stringify(contactArray));
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("phoneNo").value = "";
  document.getElementById("address").value = "";
  displayContact();
}

function displayContact() {
  let display = "";
  for (let i = 0; i < contactArray.length; i++) {
    display += `
      <tr>
        <td>${i + 1}</td>
        <td>${contactArray[i].first_Name + " " + contactArray[i].last_Name}</td>
        <td>${contactArray[i].user_email}</td>
        <td>${contactArray[i].phoneNo}</td>
        <td>
          <button onclick="deleteContact(${i})" class="btn btn-danger">Delete</button>
          <button onclick="editContact(${i})" class="btn btn-warning">Edit</button>
        </td>
      </tr>
    `;
  }
  document.getElementById("display-contact").innerHTML = display;
}

function deleteContact(index) {
  if (confirm("Are you sure you want to delete this contact?")) {
    contactArray.splice(index, 1);
    localStorage.setItem("userInfo", JSON.stringify(contactArray));
    displayContact();
  }
}

let updateIndex = null;

function editContact(index) {
  document.getElementById("btn1").style.display = "none";
  document.getElementById("button").style.display = "block";
  document.getElementById("firstName").value = contactArray[index].first_Name;
  document.getElementById("lastName").value = contactArray[index].last_Name;
  document.getElementById("email").value = contactArray[index].user_email;
  document.getElementById("dob").value = contactArray[index].dob;
  document.getElementById("phoneNo").value = contactArray[index].phoneNo;
  document.getElementById("address").value = contactArray[index].address;
  updateIndex = index;
}

function updateUserInfo() {
  document.getElementById("btn1").style.display = "block";
  document.getElementById("button").style.display = "none";
  contactArray[updateIndex].first_Name = document.getElementById("firstName").value;
  contactArray[updateIndex].last_Name = document.getElementById("lastName").value;
  contactArray[updateIndex].user_email = document.getElementById("email").value;
  contactArray[updateIndex].dob = document.getElementById("dob").value;
  contactArray[updateIndex].phoneNo = document.getElementById("phoneNo").value;
  contactArray[updateIndex].address = document.getElementById("address").value;
  localStorage.setItem("userInfo", JSON.stringify(contactArray));
  displayContact();
}

window.onload = function() {
  displayContact();
};







  // let firstName = document.getElementById("firstName").value;
  // let  lastName = document.getElementById("lastName").value;
  // let phoneNo = document.getElementById("phoneNo").value;
  // let email = document.getElementById("email").value;


   
    // localStorage.clear()

console.log(localStorage)

