function getFriends(){
  var myId = sessionStorage.getItem("userID");
  var myFriends = selectOne(myId, function(result){
    var myFriends = result.friends;
    selectAll(function(results){
      var len = results.length;
      if(myFriends){
        for(i = 0; i < len; i++){
          var name = results[i].firstName + " " + results[i].lastName;
          if(results[i].id != myId){
            if(myFriends.includes(results[i].id)){
              $("#friendList").append("<li><p>" + name + "</p><input type='button' value='Remove As Friend' onclick='removeAsFriend(" + results[i].id + ")'></li>");
            } else {
              $("#userList").append("<li><p>" + name + "</p><input type='button' value='Add As Friend' onclick='addAsFriend(" + results[i].id + ")'></li>");
            }
          }
        }
      } else {
        for(i = 0; i < len; i++){
          if(results[i].id != myId){
            var name = results[i].firstName + " " + results[i].lastName;
            $("#userList").append("<li><p>" + name + "</p><input type='button' value='Add Friend' onclick='addAsFriend(" + results[i].id + ")'></li>");
          }
        }
      }
    })
  })
}
