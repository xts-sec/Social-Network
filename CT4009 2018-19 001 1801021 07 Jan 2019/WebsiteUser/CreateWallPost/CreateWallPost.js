$("#document").ready(loadPosts());

function loadPosts(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    loadPostData();
	}, function () {});
}

function publish(id, content, time){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
  startDB(function () {
    selectAll(function(results){
      var name = "";
      var len = results.length;
      for(i = 0; i < len; i++){
        if(results[i].id == id){
          name = results[i].firstName + " " + results[i].lastName;
        }
      }
      $("#postList").append("<li>" + name + " " + time + "<br><br>" + content + "<hr></li>");
    })
  })
}

function savePost(){
  alert("saaaaave");
  event.preventDefault();
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    alert("it has begun");
    savePostData();
	}, function () {});
}
