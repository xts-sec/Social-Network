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
    getUsers();
  }, function(){});
}

function deleteUser(id){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('UsersObjectStore');
  deleteOne(id,function(){
    alert("User deleted");
  });
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
  setCurrObjectStoreName('PostsObjectStore');
  selectAll(function(results){
    var len = results.length;
    for(i = 0; i < len; i++){
      if(results[i].posterID == id){
        setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore', 'reportsObjectStore']);
        setCurrObjectStoreName('UsersObjectStore');
        deleteOne(id,function(){
          alert("Post deleted");
        });
      }
    }
  })
}
