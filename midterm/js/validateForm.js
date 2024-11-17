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
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
}
