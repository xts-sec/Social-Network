function isValidUser() {
	return selectAll(function(results) {
		valid = false
		var len = results.length;
		var userEmail = $("#txtEmail").val();
		var userPassword = $("#txtPassword").val();
		sessionStorage.clear();
		console.log(userEmail);
		console.log(userPassword);
		for(i = 0; i < len; i++) {
			if(userEmail === results[i].email && userPassword === results[i].password) {
				sessionStorage.setItem('userEmail', results[i].email);
				sessionStorage.setItem('userID', results[i].id);
        console.log("User found");
				valid = true;
				}
			}
			if (valid == true) {
				console.log("Email and Password accepted");
				window.location.href = "../CreateWallPost/CreateWallPost.html";
			} else {
				alert("Invalid email or password. Please try again.");
			}
		})
	}
