//event listener for document loaded
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

//function to load list of users
function loadUserList(){
  //sets up tabe in the db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    //calls function in the DAO
    getFriends();
  }, function(){});
}

//function to add a user as a friend
function addAsFriend(id){
  //gets current user's ID
  myId = sessionStorage.getItem("userID");
  //sets up table in the db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    //adds current user to selected user's friends
    selectOne(id, function(result){
      result.friends.push(myId);
      updateOne(result, function(lastID){
        return lastID;
      })
    })
    //adds selected user to current user's friends
    selectOne(myId, function(result){
      result.friends.push(id);
      updateOne(result, function(lastID){
        return lastID;
      })
    })
  })
}

//function to remove users as friends
function removeAsFriend(id){
  //gets current user's ID
  myId = sessionStorage.getItem("userID");
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    //removes current user from selected user's friends
    selectOne(id, function(result){
      var index = result.friends.indexOf(myId);
      if(index > -1){
        result.friends.splice(index, 1);
      }
      updateOne(result, function(lastID){
        return lastID;
      })
    })
    //removes selected user from current user's friends
    selectOne(myId, function(result){
      var index = result.friends.indexOf(id);
      if(index > -1){
        result.friends.splice(index, 1);
      }
      updateOne(result, function(lastID){
        return lastID;
      })
    })
  }, function(){});
}
