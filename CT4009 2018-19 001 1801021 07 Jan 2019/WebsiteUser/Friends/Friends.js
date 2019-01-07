$("#document").ready(function(){
  loadUserList();
});

function searchNames(input, ul){
  var input, filter, ul, li, a, i, txtValue;
  filter = input.val().toUpperCase();
  li = ul[0].getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function loadUserList(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    getFriends();
  }, function(){});
}

function addAsFriend(id){
  myId = sessionStorage.getItem("userID");
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


function removeAsFriend(id){
  myId = sessionStorage.getItem("userID");
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
