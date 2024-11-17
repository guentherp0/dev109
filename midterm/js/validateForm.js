function validateForm(){
  var errorMessages = "";
  
  var validFirstname=false;
  var firstname = document.getElementById("firstname").value;
  if (firstname==="null" || firstname==="" || firstname.length > 20) {
    errorMessages += "<p class=\"error\">The firstname is required and cannot be greater than 20 characters</p>";
  }
  else {
    validFirstname = true;
  }
  
  var validLastname=false;
  var firstname = document.getElementById("lastname").value;
  if (lastname==="null" || lastname==="" || lastname.length > 50) {
    errorMessages += "<p class=\"error\">The lastname is required and cannot be greater than 50 characters</p>";
  }
  else {
    validLastname = true;
  }
  
  var validEmail=false;
  var email = document.getElementById("email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    errorMessages = "<p>Invalid email</p>";
  }
  else {
    validEmail = true;
  }


  
  document.getElementById("errorMessages").innerHTML = errorMessages;
}
