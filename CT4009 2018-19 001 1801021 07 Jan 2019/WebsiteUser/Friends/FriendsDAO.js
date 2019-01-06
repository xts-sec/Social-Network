function getFriends(){
  var myId = sessionStorage.getItem("userID");
  selectOne(myId, function(result){
    var myFriends = result.friends;
    //alert("MYFRIENDS: " + myFriends);
    return myFriends;
  })
}
