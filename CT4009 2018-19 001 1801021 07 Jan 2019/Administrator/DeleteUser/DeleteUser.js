//event listener for when the page loads
$("#document").ready(function(){
  loadUserList();
});

//function to filter and search names in the list of users
function searchNames(input, ul){
  //creates variables
  var input, filter, ul, li, a, i, txtValue;
  //gets filter text
  filter = input.val().toUpperCase();
  //finds the list
  li = ul[0].getElementsByTagName('li');

  //for each item in the list
  for (i = 0; i < li.length; i++) {
    //finds the p tag
    p = li[i].getElementsByTagName("p")[0];
    //gets the text within the p tag
    txtValue = p.textContent || p.innerText;
    //if it matches the filter
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //show
      li[i].style.display = "";
    } else {
      //hide
      li[i].style.display = "none";
    }
  }
}

//loads list of users
function loadUserList(){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  //opens the db and runs a function
  startDB(function(){
    //gets a list of users (main function in the DAO)
    getUsers();
  }, function(){});
}

//delets users from the site by their id
function deleteUser(id){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  //deletes user specified by id and gives an alert to tell user it is done
  deleteOne(id,function(){
    alert("User deleted");
  });
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('PostsObjectStore');
  //selects all posts and returns as a dict
  selectAll(function(results){
    //len = number of posts
    var len = results.length;
    //for each post
    for(i = 0; i < len; i++){
      //if posted by deleted user
      if(results[i].posterID == id){
        //delets the post
        setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
        setCurrObjectStoreName('UsersObjectStore');
        deleteOne(id,function(){
          alert("Post deleted");
        });
      }
    }
  })
}
