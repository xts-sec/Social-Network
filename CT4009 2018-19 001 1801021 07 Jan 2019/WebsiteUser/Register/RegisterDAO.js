//finction to save registration data
function saveRegistrationData(){
  //saves user data from registration form in a dictionary
  const userData = {
    firstName: $("#txtFirstName").val(),
    lastName: $("#txtLastName").val(),
    country: $("#txtCountry").val(),
    age: $("#numAge").val(),
    email: $("#txtEmail").val(),
    password: $("#txtPassword").val(),
    friends: []
  };

  //inserts data from dictionary into the database
  insertOne(userData, function(lastID) {
    return false;
  });
};
