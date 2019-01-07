//login function
function login(){
  //prevents refresh on submit
  event.preventDefault();
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
    //validates user with function in the DAO
		isValidUser();
	}, function () {});
};
