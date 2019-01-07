function login(){
  if($("#txtPassword").val() == "pass"){
    window.location = "../ViewPostsSummary/ViewPostsSummary.html"
  } else {
    alert("Incorrect password");
    $("#txtPassword").val() = "";
  }
}
