var username = document.getElementById("username");
var password = document.getElementById("password");var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var email = document.getElementById("email");
var birthdate = document.getElementById("birthdate");
var city = document.getElementById("city");
var form= document.getElementById("form");
var c=document.getElementById("cpp");
var cpp=document.getElementById("c");
var java=document.getElementById("java");
var javascript=document.getElementById("javascript");
var python=document.getElementById("python");

form.addEventListener("submit", function (event) {
    if (!(validateUsername(username.value) && validatePassword(password.value))) {
        event.preventDefault();
        if(!validateUsername(username.value)){
            alert("Username rules: Less than 20 characters")
        }
        if(!validatePassword(password.value)){
            alert("Password rules: Min length 8 characters. Contains one lowercase letter, one uppercase letter and one special character ")
        }
    }
    else{
        document.write("Username: "+username.value);
        document.write("<br>Password: "+password.value);
        document.write("<br>Email: "+email.value);
        document.write("<br>Birthdate: "+birthdate.value);
        document.write("<br>City: "+city.value);
        document.write("<br>Programming Languages Known:");
        if(cpp.checked==true){
            document.write("<br>"+cpp.value);
        }
        if(c.checked==true){
            document.write("<br>"+c.value);
        }
        if(java.checked==true){
            document.write("<br>"+java.value);
        }
        if(javascript.checked==true){
            document.write("<br>"+javascript.value);
        }
        if(python.checked==true){
            document.write("<br>"+python.value);
        }
    }


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate one special characters
  var characters = /[@,#,$,!,&,%,*]/g;
  if(myInput.value.match(special characters)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  // When the user clicks on the Programming Languages known
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }

}