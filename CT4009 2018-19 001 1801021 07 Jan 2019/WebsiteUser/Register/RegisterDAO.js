function saveRegistrationData(){
  const userData = {
    FirstName: $("#txtFirstName").value,
    LastName: $("#txtLastName").value,
    Country: $("#txtCountry").value,
    Age: $("#numAge").value,
    Email: $("#txtEmail").value,
    Password: $("#txtPassword").value,
  };

  insertOne(userData, function(lastID) {
    event.preventDefault();
    return false;
  });
};
