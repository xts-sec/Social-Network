function loadPostData(){
  return selectAll(function(results) {
    console.log(results);
    if (!results.length){
      alert("no posts")
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
  alert("saving");
  var posterID, content, time;
  alert("1");
  posterID = sessionStorage.getItem("userID");
  alert("2");
  content = $("#txtPostBody").val();
  alert("3");
  console.log("Saving this: " + content);
  alert("4");
  time = new Date().toLocaleString();

  postData = {
    posterID: posterID,
    content: content,
    time: time
  }
  alert("5");
  insertOne(postData, function(lastID) {
    return false;
  });
  alert("6");
}
