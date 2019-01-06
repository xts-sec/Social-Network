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
