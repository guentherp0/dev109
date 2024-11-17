// get our HTML attributes
var contactForm = getElementById('contactForm');

// stop the button from actually submitting, instead using custom logic
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // where the error messages eventually wind up
  const errorMessageDiv = getElementById("errorMessages");
  
  // the results of the function
  const validationResult = validateForm();
  
  // temp
  errorMessageDiv.innerHTML = "hate u <3";
});

function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
  var isNameValid = false;
  var isEmailValid = false;
  var isCommentValid = false;
//2) create variables to read the values from html text inputs

//3) do the validation
  var isNameValid = true;
  var isEmailValid = true;
  var isCommentValid = true;
//4) send error messages 

//5) return the status of each field
  return {
    isValid: isNameValid && isEmailValid && isCommentValid,
  };
}
