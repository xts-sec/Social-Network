function saveRegistrationData(){
  const userData = {
    firstName: $("#txtFirstName").val(),
    lastName: $("#txtLastName").val(),
    country: $("#txtCountry").val(),
    age: $("#numAge").val(),
    email: $("#txtEmail").val(),
    password: $("#txtPassword").val(),
    picPath: "",
    blockedUsers: [""]
  };

  insertOne(userData, function(lastID) {
    return false;
  });
};
