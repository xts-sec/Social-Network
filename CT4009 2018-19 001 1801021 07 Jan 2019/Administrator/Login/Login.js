function login(){
  if($("#txtPassword").val() == "pass"){
    window.location = "../ViewStats/ViewStats.html"
  } else {
    alert("Incorrect password");
    $("#txtPassword").val() = "";
  }
}
