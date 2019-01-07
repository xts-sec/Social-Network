function getNumberOfUsers(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		selectAll(function(results){
      var len = results.length;
      $("#statsList").append("<li>Total number of users: " +  len);
    })
	}, function () {});
}

function getNumberOfPosts(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
		selectAll(function(results){
      var len = results.length;
      $("#statsList").append("<li>Total number of posts: " +  len);
    })
	}, function () {});
}
