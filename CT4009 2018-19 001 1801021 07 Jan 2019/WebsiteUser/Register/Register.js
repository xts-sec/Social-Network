//function to register Users
function RegisterUser(){
  //gets user data from registration forms
  var FirstName = document.getElementById("FirstName").value
  var LastName = document.getElementById("LastName").value
  var Country = document.getElementById("Country").value
  var Age = document.getElementById("Age").value
  var Email = document.getElementById("Email").value
  var Password = document.getElementById("Password").value
  var ConfirmPassword = document.getElementById("ConfirmPassword").value

  //creates array to hold user accounts
  var users = []
  //if first value in locally stored array is not null
  if (users.concat(JSON.parse(localStorage.getItem("users")))[0]) {
    //loads locally stored array into variable
    users = users.concat(JSON.parse(localStorage.getItem("users")))
  }
  //creates new user object from the registration form
  var newUser = {
    FirstName: FirstName,
    LastName: LastName,
    Country: Country,
    Age: Age,
    Email: Email,
    Password: Password
  }
  //pushes the new user to the array variable
  users.push(newUser)
  //saves the array variable to local storage
  localStorage.setItem('users', JSON.stringify(users))
  //informs the user that they have registered
  alert("user registered")
  //takes the user to the login page
  window.location.href = "../Login/Login.html"
}
