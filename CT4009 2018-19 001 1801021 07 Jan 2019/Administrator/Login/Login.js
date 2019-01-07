//login function
function login(){
  //if password = "pass"
  if($("#txtPassword").val() == "pass"){
    //log in
    window.location = "../ViewStats/ViewStats.html"
  } else {
    //don't log in
    alert("Incorrect password");
    $("#txtPassword").val() = "";
  }
}

/*
note: i didnt even try to secure the password for the user account
because its pointless when using client side scripting and storage, so
its just there in plain text
*/
