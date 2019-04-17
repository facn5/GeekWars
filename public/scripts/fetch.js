function getData(url) {
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });
}
