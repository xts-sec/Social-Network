
function validate(){
  event.preventDefault();
  register();
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
