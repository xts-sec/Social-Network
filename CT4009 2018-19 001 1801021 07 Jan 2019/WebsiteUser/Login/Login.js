function login(){
  event.preventDefault();
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		isValidUser();
	}, function () {});
};
