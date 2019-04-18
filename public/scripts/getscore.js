function getScore(cb) {
  fetch("/getscore")
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return "Looks like there was a problem. Status Code: " + response.status;
      }
      return response.json();
    })
    .then((myJson) => {
      return(cb(myJson));
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });
}
