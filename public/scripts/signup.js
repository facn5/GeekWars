var signupbtn = document.getElementById('signupbtn');
var txtUser = document.getElementById('username');
var password = document.getElementById('passtxt');
var email = document.getElementById('email');
var confirmPassword = document.getElementById('confirmpass');
var form = document.getElementsByTagName("form")[0];
var emailErr = document.getElementById("emailErr");
var passwordErr = document.getElementById("passwordErr");
var confirmErr = document.getElementById("confirmErr");
var userErr = document.getElementById("userErr");

var checkEmail = function() {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, "Please enter a valid email address");
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, "Please enter an email address");
  } else {
    displayErr(emailErr, "");
    return true;
  }
};

var checkPw = function() {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};

var checkConfirmPw = function() {
  if (password.value != confirmPassword.value) {
    displayErr(confirmErr, "Passwords do not match");
  } else if (confirmPassword.validity.valueMissing) {
    displayErr(confirmErr, "Please confirm your password");
  } else {
    displayErr(confirmErr, "");
    return true;
  }
};

function displayErr(errElem, errMsg) {
  errElem.innerText = errMsg;
}

email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);
confirmPassword.addEventListener("focusout", checkConfirmPw);

signupbtn.addEventListener("click", function() {
  if (!checkPw() || !checkEmail() || !checkConfirmPw()) {

  } else {
    fetch("/signup", {
        method: 'POST',
        body: JSON.stringify({
          'username': username.value,
          'password': password.value,
          'email': email.value
        })
      })
      .then(function(response) {
        console.log("FE response is", response);
        console.log("1");
        // TODO : CHECK RESPONSE STATUS CODE
        return response.json();

      })
      .then(function(signupdata) {
        console.log("2");
        // console.log(signupdata);
        if (signupdata.succeed) {
          alert("Successfully signup, go to login page")
          window.location.href = "/login.html";
        } else {
          displayErr(userErr, "Username exists")
        }
      })
      .catch(function(error) {
        console.log("error fetch");
        console.log(error);
      });
  }
});


// }
