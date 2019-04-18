var ans = document.querySelectorAll(".answer");
var skipQues = document.querySelector("#skip");
var waiting = document.querySelector("#waiting");
var loadAnim = document.querySelector("#waitanim");
var curScore = document.querySelector("#hscore").textContent;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

verifyUser(function(data) {

    if (data.status === 200) {
      var ans = document.querySelectorAll(".answer");
      var skipQues = document.querySelector("#skip");
      var waiting = document.querySelector("#waiting");
      var loadAnim = document.querySelector("#waitanim");
      var curScore = document.querySelector("#hscore").textContent;
      let logoutbtn = document.getElementById('logoutbtn');

      getScore((data) => {
        var curScore = data;
      })
      logoutbtn.addEventListener("click", function() {
        logout();
        window.location.href = '/index.html'
      })


      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      var question = getRandomInt(9);
      // console.log(curScore);
      var data;

      // getRandomInt(9)
      getData((dataq) => {
        data = dataq;

        function updateQues(response) {

          question++;



          document.querySelector("#question").innerHTML = dataq[question].question;
          document.querySelector("#optn1").innerHTML = dataq[question].option1;
          document.querySelector("#optn2").innerHTML = dataq[question].answer;
          document.querySelector("#optn3").innerHTML = dataq[question].option2;
          document.querySelector("#optn4").innerHTML = dataq[question].option3;
          // if(curScore>5){
          // 	console.log("you finished the game")
          // }

        }
        document.querySelector("#question").innerHTML = dataq[question].question;
        document.querySelector("#optn1").innerHTML = dataq[question].option1;
        document.querySelector("#optn2").innerHTML = dataq[question].answer;
        document.querySelector("#optn3").innerHTML = dataq[question].option2;
        document.querySelector("#optn4").innerHTML = dataq[question].option3;
        for (var i = 0; i < ans.length; i++) {
          ans[i].addEventListener("click", function() {
            if (question < 9) {

              checkAnswer(this);
            } else {
              alert("you finished all the questions, go to the leaderboard page to find your score!");
              curScore = 0;

            }
          });
        }

        function checkAnswer(ele) {
          if (ele.innerHTML === dataq[question].answer) {
            //		ele.classList.add("correct");
            document.querySelector("#hscore").innerHTML = ++curScore;

            updateQues();
          } else {
            //				ele.classList.add("incorrect");
            // loading(true);
            document.querySelector("#hscore").innerHTML = --curScore;

          }
        }
        // console.log(dataq[0].question)
      })

    } else {
      if (window.confirm('You are not logged in, do you want to make an account?')) {
        window.location.href = "/sign_up.html"
      } else {
        window.location.href = "/login.html"
      }
    }

})
