function logout(){
  fetch('/logout')
  .catch(function(error){
    console.log(error);
  })
}
