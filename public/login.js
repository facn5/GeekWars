var loginbutton = document.getElementById(loginbtn);
var usertxt = document.getElementById(user).value;
var passtxt = document.getElementById(pass).value;

document.getElementById("loginbtn").addEventListener("submit", function() {

  fetch("/signin", {
    method: 'POST',
    body: JSON.stringify({
      username:usertxt,
      password:passtxt
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => {
if(res.status == 200){
console.log("logged in")

}
else if (res.status == 401){
console.log("username or password is wrong")
}


  } )
  .catch(error => console.error('Error:', error));






});
