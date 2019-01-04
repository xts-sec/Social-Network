function loadPostData(){
  return selectAll(function(results) {
    console.log(results);
    if (!results.length){
      $("#postList").append('<p style="text-align: center"> No posts yet, be the first to write one!</p>');
    } else {
      var len = results.length;
      var posterID, content, time;
      for(i = 0; i < len; i++) {
        posterID = results[i].posterID;
        content = results[i].content;
        time = results[i].time;
        publish(posterID, content, time);
      }
    }
	})
}

function savePostData(){
  var posterID, content, time;
  posterID = sessionStorage.getItem("userID");
  content = $("#txtPostBody").val();
  console.log("Saving this: " + content);
  time = new Date().toLocaleString();

  postData = {
    posterID: posterID,
    content: content,
    time: time
  }
  insertOne(postData, function(lastID) {
    return false;
  });
}
