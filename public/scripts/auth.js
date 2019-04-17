function verifyUser(cb){
  fetch('/auth')
  // .then(function(response){
  //   return response.json();
  // })
  .then(function(data){
    return cb(data);
  })
  .catch(function(error){
    console.log("error auth");
  })
}
