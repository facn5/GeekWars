
var signupbtn = document.getElementById('signupbtn');
var txtUser = document.getElementById('username');
var txtPass = document.getElementById('passtxt');
var txtEmail = document.getElementById('email');
var txtPassRepeat = document.getElementById('confirmpass');

signupbtn.addEventListener("click",function(e){
e.preventDefault();
  fetch("/signup", {
    method: 'POST',
    body:JSON.stringify({
      'username':txtUser.value,
      'password':txtPass.value,
      'email' : txtEmail.value
    })
  })
  .then(function(response){
    console.log(response);
    // TODO : CHECK RESPONSE STATUS CODE
     return response.json();
  })
  .then(function(logindata) {
    console.log(signupdata);
    if(signupdata.succeed){
      // TODO : Save details in cookies
      // console.log("asd");
      window.location.href = "/login.html";
    } else {

    }
  })
  .catch(function(error){
    // console.log("error fetch");
    console.log(error);
  });
// }
})
