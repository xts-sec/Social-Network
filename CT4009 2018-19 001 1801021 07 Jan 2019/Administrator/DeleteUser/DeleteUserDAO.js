//function to list users
function getUsers(){
  //selects all users and returns as dict
  selectAll(function(results){
    //len = number of users
    var len = results.length;
    //for each user
    for(i = 0; i < len; i++){
      //adds their name to list with a delete button
      var name = results[i].firstName + " " + results[i].lastName;
      $("#userList").append("<li><p>" + name + "</p><input type='button' value='Delete User' onclick='deleteUser(" + results[i].id + ")'></li>");
    }
  })
}
