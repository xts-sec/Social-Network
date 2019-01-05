$("#document").ready(loadUserList());

function searchNames(){
  var input, filter, ul, li, a, i, txtValue;
  input = $("#searchNames");
  filter = input.val().toUpperCase();
  ul = $("#findFriendsList");
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
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');

  startDB(function () {

    var myId = sessionStorage.getItem("userID");

    var myFriends = selectOne(myId, function(result){
      var myFriends = [""];
      var len = result.friends.length;
      for(i=0; i < len; i++){
        myFriends.append(result.friends[i]);
      }
      return myFriends;
    })

    alert("MYFRIENDS: " + myFriends); //testing

    selectAll(function(results){

      var name, id;
      var len = results.length;

      for(i = 0; i < len; i++){

        alert(results[i].id);
        id = results[i].id;
        if(myFriends != [""]){
          if((results[i].id != myId) && (myFriends.contains(results[i].id) == false)) {
            name = results[i].firstName + " " + results[i].lastName;
            $("#findFriendsList").append("<li><p>" + name + "</p><input type='button' value='Add Friend' onclick='AddAsFriend(" + id + ")'></li>");
            alert(name + " yep");
          }
          if((results[i].id != myId) && (myFriends.contains(results[i].id == true))){
            $("#friends").append("<li><p>" + name + "</p><input type='button' value='Add Friend' onclick='removeAsFriend(" + id + ")'></li>");
          }
        }
      }
    })
  })
}

function AddAsFriend(id){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
  startDB(function(){
    selectOne(id, function(result){
      result.friends =+ sessionStorage.getItem("userID");
      updateOne(result, function(lastID) {
        return false;
      });
      selectOne(sessionStorage.getItem("userID"), function(result){
        result.friends =+ id;
        updateOne(result, function(lastID) {
          return false;
        });
      })
      alert(result.friends);
    });
  })
}
