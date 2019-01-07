$("#document").ready(loadPosts());

function loadPosts(){
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    loadPostData();
	}, function () {});
}

function publish(id, content, time){
  var myId = sessionStorage.getItem("userID");
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
  startDB(function () {
    var showPost = false;
    var myFriends = [];
    selectOne(myId, function(result){
      myFriends = result.friends
      len = myFriends.length;
      if(id == myId){
        showPost = true;
        alert(id + "is me");
      }
      if(len > 0){
        for(i = 0; i < len; i++){
          if(myFriends[i] == id){
            showPost = true;
            alert(id + "is a friend");
          }
        }
      }
      if(showPost == true){
        selectAll(function(results){
          var name = "";
          var len = results.length;
          for(i = 0; i < len; i++){
            if(results[i].id == id){
              name = results[i].firstName + " " + results[i].lastName;
            }
          }
          $("#postList").prepend("<li><p style='color: deepskyblue;'>- <b>" + name + "</b> @ " + time + "</p>" + content + "<hr></li>");
        })
        $("#txtPostBody").val("");
      } else {
        alert(id + "is not me or a friend")
      }
    })
  })
}

function savePost(){
  event.preventDefault();
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    savePostData();
    publish(sessionStorage.getItem("userID"), $("#txtPostBody").val(), new Date().toLocaleString());
	}, function () {});
}
