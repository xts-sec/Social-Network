//functon to get a list of Friends
function getFriends(){
  //gets current user's ID
  var myId = sessionStorage.getItem("userID");
  //gets current user's friends list
  var myFriends = selectOne(myId, function(result){
    var myFriends = result.friends;
    //selects all users and returns as a dict
    selectAll(function(results){
      //gets number of users
      var len = results.length;
      //if you have any friends
      if(myFriends){
        //for each user
        for(i = 0; i < len; i++){
          //get their name
          var name = results[i].firstName + " " + results[i].lastName;
          if(results[i].id != myId){
            //if they are your friend, add them to the friends list
            if(myFriends.includes(results[i].id)){
              $("#friendList").append("<li><p>" + name + "</p><input type='button' value='Remove As Friend' onclick='removeAsFriend(" + results[i].id + ")'></li>");
              //if they are not your friend, add them to the users list
            } else {
              $("#userList").append("<li><p>" + name + "</p><input type='button' value='Add As Friend' onclick='addAsFriend(" + results[i].id + ")'></li>");
            }
          }
        }
        //if you have no friends
      } else {
        //just add everyone to the users list
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
