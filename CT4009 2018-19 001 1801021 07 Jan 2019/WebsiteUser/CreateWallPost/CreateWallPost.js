//event listener for page loaded
$("#document").ready(loadPosts());

//function to load posts
function loadPosts(){
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    //calls another function to actually get the data
    loadPostData();
	}, function () {});
}

//function that publishes posts
function publish(id, content, time){
  //gets current user's id
  var myId = sessionStorage.getItem("userID");
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
  startDB(function () {
    //this whole section decides wether the current user should see this post
    var showPost = false;
    var myFriends = [];
    selectOne(myId, function(result){
      //gets current user's friends list
      myFriends = result.friends
      len = myFriends.length;
      //if i wrote the post, show it
      if(id == myId){
        showPost = true;
        //alert(id + "is me"); //testing
      }
      if(len > 0){
        //if my friend wrote the post, show it
        for(i = 0; i < len; i++){
          if(myFriends[i] == id){
            showPost = true;
            //alert(id + "is a friend"); //testing
          }
        }
      }
      //if i should see this post
      if(showPost == true){
        selectAll(function(results){
          //gets poster name
          var name = "";
          var len = results.length;
          for(i = 0; i < len; i++){
            if(results[i].id == id){
              name = results[i].firstName + " " + results[i].lastName;
            }
          }
          //post the post
          $("#postList").prepend("<li><p style='color: deepskyblue;'>- <b>" + name + "</b> @ " + time + "</p>" + content + "<hr></li>");
        })
        //clear the input box
        $("#txtPostBody").val("");
        //if i shouldnt see it, do nothing
      } else {
        //alert(id + "is not me or a friend") //testing
      }
    })
  })
}

//saves post the current user makes
function savePost(){
  //prevents refresh on submit
  event.preventDefault();
  //sets up table in db
  setDatabaseName('dbUsers', ['UsersObjectStore', 'PostsObjectStore', 'MessagesObjectStore']);
	setCurrObjectStoreName('PostsObjectStore');
	startDB(function () {
    //calls function in the DAO
    savePostData();
    //publishes post
    publish(sessionStorage.getItem("userID"), $("#txtPostBody").val(), new Date().toLocaleString());
	}, function () {});
}
