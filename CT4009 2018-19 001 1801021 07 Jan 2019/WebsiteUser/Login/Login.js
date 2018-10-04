//function to authenticate users
function Authenticate(){
  //gets user object array from local storage
    var users = JSON.parse(localStorage.getItem("users"))

    var loginEmail = document.getElementById("Email").value
    var loginPassword = document.getElementById("Password").value
    //debug
    //console.log(loginEmail.value)
    //console.log(loginPassword.value)
    var i;
    for (i = 0; i < users.length; i++){
        //debug
        //console.log(users[i].username)
        //console.log(users[i].password)
        if ((loginEmail == users[i].Email) && (loginPassword == users[i].Password)){
            alert("logging in")
            window.location.href = "../CreateWallPost/CreateWallPost.html"
            return true
        }
        else{
            //debug
            //alert("Incorrect details")
        }
    }
    alert("Incorrect details")
    return false;
}
