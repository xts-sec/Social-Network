function saveRegistrationData(){
  const userData = {
    firstName: $("#txtFirstName").val(),
    lastName: $("#txtLastName").val(),
    country: $("#txtCountry").val(),
    age: $("#numAge").val(),
    email: $("#txtEmail").val(),
    password: $("#txtPassword").val(),
    blockedUsers: [],
    friends: []
  };

  insertOne(userData, function(lastID) {
    return false;
  });
};
