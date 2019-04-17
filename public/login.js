var loginbutton = document.getElementById('loginbtn');
var usertxt = document.getElementById('user');
var passtxt = document.getElementById('pass');
// loginbutton.addEventListener("click",fetchlogin())
function fetchlogin() {

  // console.log(usertxt.innerText);
   console.log("fetch ran");
console.log(passtxt);
// window.event.preventDefault();
   // console.log("after asd");
  fetch("/login", {
    method: 'POST',
    body:JSON.stringify({
      'username':usertxt.value,
      'password':passtxt.value
    })
  })
  .then(function(response){
    return console.log(response.json());

  })
  .then(function(data) {
    console.log(data);

  })
  .catch(function(error){
    console.log("error fetch");
    console.log(error);
  });
}

// loginbutton.addEventListener("submit",function(d){
//   console.log(d);
// })
