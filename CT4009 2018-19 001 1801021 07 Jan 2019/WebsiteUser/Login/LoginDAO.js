function isValidUser() {
	selectAll(function(results) {
		var result = false;
		if(!results || !results.length) {

		}
		else {
			var len = results.length, i;

			var userEmail = document.getElementById("txtEmail").value;
			var userPassword = document.getElementById("txtPassword").value;
			sessionStorage.clear();
			console.log(userEmail);
			console.log(userPassword);

			for(i = 0; i < len; i++) {
				if(userEmail === results[i].email && userPassword === results[i].password) {
					sessionStorage.setItem('userEmail', results[i].email);
					sessionStorage.setItem('userID', results[i].id);
					result = true;
					return false;
					console.log('after true');
				}

			}

			if(result) {
				//window.location.href = "../SellItemPage/SellItem.html";
				window.location.href = "../CreateWallPost/CreateWallPost.html";
			} else {
				alert("Invalid email or password.");
			}
			console.log('after true');

		}
	});


	console.log('test true' + a);
	return result;
}
