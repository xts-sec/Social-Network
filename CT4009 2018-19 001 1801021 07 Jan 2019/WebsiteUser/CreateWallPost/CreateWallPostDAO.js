//function to load all the posts
function loadPostData(){
  //selects all posts and returns as dict
  return selectAll(function(results) {
    //console.log(results); //testing
    //if there are no posts saved
    if (!results.length){
      //tell the user there are no posts
      $("#postList").append('<p style="text-align: center"> No posts yet, be the first to write one!</p>');
    } else {
      //gets number of posts
      var len = results.length;
      var posterID, content, time;
      //for each post, get post data and publish it
      for(i = 0; i < len; i++) {
        posterID = results[i].posterID;
        content = results[i].content;
        time = results[i].time;
        publish(posterID, content, time);
      }
    }
	})
}

//function to save posts
function savePostData(){
  //sets up vars
  var posterID, content, time;
  posterID = sessionStorage.getItem("userID");
  content = $("#txtPostBody").val();
  console.log("Saving this: " + content);
  time = new Date().toLocaleString();

  //stores post data as dict
  postData = {
    posterID: posterID,
    content: content,
    time: time
  }
  //inserts post data into db
  insertOne(postData, function(lastID) {
    return false;
  });
}
