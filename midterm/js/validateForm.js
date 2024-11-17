function validateForm(){
  var n = document.getElementById('name').value;
//1) create a variable to control status of each field. Assume that they are not valid

//2) create variables to read the values from html text inputs

//3) do the validation

//4) send error messages 

//5) return the status of each field
  var errorMessages = "";
  errorMessages += "<p class=\"error\">" + n + "</p>";
  document.getElementById("errorMessages").innerHTML = errorMessages;
}
