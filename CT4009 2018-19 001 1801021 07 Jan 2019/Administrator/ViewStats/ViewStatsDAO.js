//function writes number of users to page
function getNumberOfUsers(){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
    //selects all users and returns as dict
		selectAll(function(results){
      //gets number of users
      var len = results.length;
      //writes as list item to page
      $("#statsList").append("<li>Total number of users: " +  len);
    })
	}, function () {});
}

//function writes number of posts to page
function getNumberOfPosts(){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    //selects all posts and returns as dict
		selectAll(function(results){
      //gets number of posts
      var len = results.length;
      //writes as list item to page
      $("#statsList").append("<li>Total number of posts: " +  len);
    })
	}, function () {});
}
