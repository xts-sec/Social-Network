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
    myFriends = getFriends();
    selectAll(function(results){
      var len = results.length;
      if(myFriends){
        for(i = 0; i < len; i++){
          if(myFriends.contains(results[i].id)){
            $("#friendList").append("<li><p>" + name + "</p><input type='button' value='Remove As Friend' onclick='removeAsFriend(" + results[i].id + ")'></li>");
          } else {
            $("#userList").append("<li><p>" + name + "</p><input type='button' value='Add As Friend' onclick='addAsFriend(" + results[i].id + ")'></li>");
          }
        }
      } else {
        for(i = 0; i < len; i++){
          if(results[i].id != sessionStorage.getItem("userID")){
            var name = results[i].firstName + " " + results[i].lastName;
            $("#userList").append("<li><p>" + name + "</p><input type='button' value='Add Friend' onclick='addAsFriend(" + results[i].id + ")'></li>");
          }
        }
      }
    })
  }, function(){});
}

function addAsFriend(id){
  myId = sessionStorage.getItem("UserID");
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    //adds current user to selected user's friends
    var result = selectOne(id, function(result){
      return result;
    })
    if(result.friends){
      result.friends.append(myId);
    } else {
      result.friends = [myId]
    }
    //adds selected user to current user's friends
    var result = selectOne(myId, function(result){
      return result;
    })
    result.friends.append(id);
  }, function(){});
}

function removeAsFriend(id){
  myId = sessionStorage.getItem("UserID");
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    //removes current user from selected user's friends
    var result = selectOne(id, function(result){
      return result;
    })
    for( var i = 0; i < array.length-1; i++){
      if ( array[i] === myId) {
        arr.splice(i, 1);
      }
    }
    //removes selected user from current user's friends
    var result = selectOne(myId, function(result){
      return result;
    })
    for( var i = 0; i < array.length-1; i++){
      if ( array[i] === id) {
        arr.splice(i, 1);
      }
    }
  }, function(){});
}
