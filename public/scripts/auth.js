function verifyUser(cb){
  fetch('/auth')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log("authorized");
    return cb(data);
  })
  .catch(function(error){
    console.log("error auth");;
  })
}
