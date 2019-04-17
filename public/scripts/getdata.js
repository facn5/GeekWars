var ans = document.querySelectorAll(".answer");
var skipQues = document.querySelector("#skip");
var waiting = document.querySelector("#waiting");
var loadAnim = document.querySelector("#waitanim");
var curScore = document.querySelector("#hscore").textContent;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var curScore = getScore("tamer");
 var question = getRandomInt(9);
 console.log(curScore);
var data;

// getRandomInt(9)
getData((dataq) => {
  data = dataq;
	function updateQues(response) {

  question++;



		document.querySelector("#question").innerHTML =dataq[question].question;
		document.querySelector("#optn1").innerHTML = dataq[question].option1;
		document.querySelector("#optn2").innerHTML = dataq[question].answer;
		document.querySelector("#optn3").innerHTML = dataq[question].option2;
		document.querySelector("#optn4").innerHTML = dataq[question].option3;
		// if(curScore>5){
		// 	console.log("you finished the game")
		// }

	}
		document.querySelector("#question").innerHTML =dataq[question].question;
		document.querySelector("#optn1").innerHTML = dataq[question].option1;
		document.querySelector("#optn2").innerHTML = dataq[question].answer;
		document.querySelector("#optn3").innerHTML = dataq[question].option2;
		document.querySelector("#optn4").innerHTML = dataq[question].option3;
		for (var i = 0; i < ans.length; i++) {
			ans[i].addEventListener("click", function() {
				if(question<9){

					checkAnswer(this);
				}
				else{

					alert("you finished all the questions, go to the leaderboard page to find your score!");

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
		console.log(dataq[0].question)







})



// for (var i = 0; i < ans.length; i++) {
// 	ans[i].addEventListener("click",function(){
// 		checkAnswer(this);
// 	});
// }
// function checkAnswer(ele) {
// 	if(ele.innerHTML === data.correct_answer){
// 		ele.classList.add("correct");
// 		loading(true);
// 		document.querySelector("#hscore").innerHTML = ++curScore;
// 		changeQues();
// 	}else {
// 		ele.classList.add("incorrect");
// 		loading(true);
// 		document.querySelector("#hscore").innerHTML = --curScore;
// 		changeQues();
// 	}
// }
// function changeQues() {
//
// 	setTimeout(function(){
// 		for (var j = 0; j < ans.length; j++) {
// 			ans[j].classList.remove("incorrect")
// 			ans[j].classList.remove("correct")
// 		}
// 		fetchReq();
// 	},800)
// }
// function loading(fire){
// 	if(fire){
// 		waiting.classList.add("loading");
// 		loadAnim.classList.add("animation");
// 	}else{
// 		waiting.classList.remove("loading");
// 		loadAnim.classList.remove("animation");
// 	}
// }
//
// skipQues.addEventListener("click",function() {
// 	loading(true);
// 	fetchReq();
// })
// fetchReq();
