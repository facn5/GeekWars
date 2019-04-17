function logout(cb){
  fetch('/logout')
  .then(function(response){
    return cb(response);
  })
  .catch(function(error){
    console.log(error);
  })
}
