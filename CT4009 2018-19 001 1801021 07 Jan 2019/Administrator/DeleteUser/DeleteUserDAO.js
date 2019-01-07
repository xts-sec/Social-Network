function getUsers(){
  selectAll(function(results){
    var len = results.length;
    for(i = 0; i < len; i++){
      var name = results[i].firstName + " " + results[i].lastName;
      $("#userList").append("<li><p>" + name + "</p><input type='button' value='Delete User' onclick='deleteUser(" + results[i].id + ")'></li>");
    }
  })
}
