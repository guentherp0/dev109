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
  var lastname = document.getElementById("lastname").value;
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
    errorMessages += "<p class=\"error\">Invalid email</p>";
  }
  else {
    validEmail = true;
  }
  
  var validPhone=false;
  var phone = document.getElementById("phone").value;
  if (isNaN(phone) || phone.length > 15 || phone===null || phone==="") {
    errorMessages += "<p class=\"error\">Invalid phone number</p>";
  }
  else {
    validPhone = true;
  }
  
  var validUsername=false;
  var username = document.getElementById("username").value;
  if (username==="null" || username==="" || username.length > 12) {
    errorMessages += "<p class=\"error\">The username is required and cannot be greater than 12 characters</p>";
  }
  else {
    validUsername = true;
  }
  
  var validPassword=false;
  var password = document.getElementById("password").value;
  if (password==="null" || password==="" || password.length > 7) {
    errorMessages += "<p class=\"error\">The password is required and cannot be greater than 7 characters</p>";
  }
  else {
    validPassword = true;
  }
  
  var validAddress=false;
  var address = document.getElementById("address").value;
  if (address==="null" || address==="") {
    errorMessages += "<p class=\"error\">The address is required</p>";
  }
  else {
    validAddress = true;
  }
  
  var validCity=false;
  var city = document.getElementById("city").value;
  if (city==="null" || city==="") {
    errorMessages += "<p class=\"error\">The city is required</p>";
  }
  else {
    validCity = true;
  }

  var state = document.getElementById("state").value;
  var validState=true:
  // no need to verify
  
  var country = document.getElementById("country").value;
  var validCountry=true;
  // no need to verify
  
  var validZipcode=false;
  var zipcode = document.getElementById("zipcode").value;
  if (country === "usa" && zipcode.length > 5) {
    errorMessages += "<p class=\"error\">The zipcode is invalid</p>";
  }
  else {
    validZipcode = true;
  }

  if (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode){
    const params = new URLSearchParams({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      username: username,
      password: password,
      address: address,
      city: city,
      state: state,
      country: country,
      zipcode: zipcode,
      comments: comments,
    }).toString();

    const url = `https://guentherp0.github.io/dev109/midterm/thankyou.html?${params}`;

    window.open(url, '_self');
  }
  document.getElementById("errorMessages").innerHTML = errorMessages;
}
