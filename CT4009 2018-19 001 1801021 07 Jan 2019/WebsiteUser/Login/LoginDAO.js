//function to validate users
function isValidUser() {
	//selects all users and returns as a dict
	return selectAll(function(results) {
		valid = false
		var len = results.length;
		//gets user input
		var userEmail = $("#txtEmail").val();
		var userPassword = $("#txtPassword").val();
		sessionStorage.clear();
		//console.log(userEmail); //testing
		//console.log(userPassword); //testing
		//for every user account
		for(i = 0; i < len; i++) {
			//if username and password match
			if(userEmail === results[i].email && userPassword === results[i].password) {
				//store user data in session storage
				sessionStorage.setItem('userEmail', results[i].email);
				sessionStorage.setItem('userID', results[i].id);
				//user is valid
        //console.log("User found"); //testing
				valid = true;
				}
			}
			//if user is valid
			if (valid == true) {
				//console.log("Email and Password accepted"); //testing
				//log the user in
				window.location.href = "../CreateWallPost/CreateWallPost.html";
			} else {
				alert("Invalid email or password. Please try again.");
			}
		})
	}
