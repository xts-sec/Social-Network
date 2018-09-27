//array containing user objects
var users = [
    {
      FirstName: "Matt",
      LastName: "Cocklin",
      Country: "England",
      Age: "18",
      Email: "mnc2603@gmail.com",
      Password: "testpass"
    }
]

//function to authenticate users
function Authenticate(){

    var loginEmail = document.getElementById("Email")
    var loginPassword = document.getElementById("Password")
    //debug
    //console.log(loginEmail.value)
    //console.log(loginPassword.value)
    var i;
    for (i = 0; i < users.length; i++){
        //debug
        //console.log(users[i].username)
        //console.log(users[i].password)
        if ((loginEmail.value == users[i].Email) && (loginPassword.value == users[i].Password)){
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
