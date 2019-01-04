
function validate(){
  event.preventDefault();
  var passwordsMatch = false;
  var emailUnique = true;
  if($("#txtPassword").val() == $("#txtConfirmPassword").val()){
    register();
  } else {
    alert("Passwords do not match. Please try again.")
  }
}

function register(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function () {
  	saveRegistrationData();
  	alert("Thank you for registering! Please now login to access your account.")
  	window.location.href = "../Login/Login.html";
  }, function () {});
}
