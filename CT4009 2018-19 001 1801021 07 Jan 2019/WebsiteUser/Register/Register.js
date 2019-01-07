//function to validate input
function validate(){
  //prevents refresh on onsubmit
  event.preventDefault();
  //if password and confirm password match
  if($("#txtPassword").val() == $("#txtConfirmPassword").val()){
    //allow user to register
    register();
  } else {
    //error message
    alert("Passwords do not match. Please try again.")
  }
}

//registration function
function register(){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function () {
    //saves registration data (function in the DAO)
  	saveRegistrationData();
    //lets user know they are registered
  	alert("Thank you for registering! Please now login to access your account.")
    //takes user to login page
  	window.location.href = "../Login/Login.html";
  }, function () {});
}
