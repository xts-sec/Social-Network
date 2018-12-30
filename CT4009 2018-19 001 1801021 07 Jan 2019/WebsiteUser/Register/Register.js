var password = document.getElementById("txtPassword");
var confirmPassword = document.getElementById("txtConfirmPassword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    alert("Passwords Don't Match");
  } else {

  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

$("#frmRegister").submit(function(event){
  event.preventDefault();

	setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		//saveRegistrationData();
		alert("Thank you for registering! Please now login to access your account.")
		window.location.href = "../Login/Login.html";
    event.preventDefault();
	}, function () {});
});
