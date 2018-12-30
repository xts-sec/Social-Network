$('#frmLogin').submit(function(event){
    // cancels the form submission
    event.preventDefault();

    setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		//var isValid = isValidUser();
		console.log('test' + sessionStorage.getItem('userEmail'));
		isValidUser();
		if (isValidUser()) {
			window.location.href = "../SellItemPage/SellItem.html";
			alert("valid email or password.");
		} else {
			alert("Invalid email or password.");
		}
		event.preventDefault();
	}, function () {});
});
