function Authenticate(){

  if ((document.getElementById(Email) != "") && (document.getElementById(Password) != "")) {
    var email = document.getElementById(Email).value
    var password = document.getElementById(Password).value
    alert("logging in")
    window.location.href = "../CreateWallPost/CreateWallPost.html"
    return true
  }
  else {
    alert("one or more fields are blank")
    return false
  }
};
