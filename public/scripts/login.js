
var loginbutton = document.getElementById('loginbtn');
var usertxt = document.getElementById('user');
var passtxt = document.getElementById('pass');
var wronglbl = document.getElementById('wrong')
loginbutton.addEventListener("click",function(e){
e.preventDefault();
  fetch("/login", {
    method: 'POST',
    body:JSON.stringify({
      'username':usertxt.value,
      'password':passtxt.value
    })
  })
  .then(function(response){
    console.log(response);
    // TODO : CHECK RESPONSE STATUS CODE
     return response.json();
  })
  .then(function(logindata) {
    console.log(logindata);
    if(logindata.succeed){
      // TODO : Save details in cookies
      // console.log("asd");
      window.location.href = "/main.html";
    } else {
      wronglbl.style.display = "block"
    }
  })
  .catch(function(error){
    // console.log("error fetch");
    console.log(error);
  });
// }
})

// loginbutton.addEventListener("submit",function(d){
//   console.log(d);
// })
