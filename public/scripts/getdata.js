// var ans = document.querySelectorAll(".answer");
// var skipQues = document.querySelector("#skip");
// var waiting = document.querySelector("#waiting");
// var loadAnim = document.querySelector("#waitanim");
// var curScore = document.querySelector("#hscore").textContent;
// // console.log(curScore);
// var data;

verifyUser(function(data){
  console.log(data)
});

// getData((dataq) => {
//   data = dataq;
//   document.querySelector("#question").innerHTML = dataq[0].question;
//   document.querySelector("#optn1").innerHTML = dataq[0].option1;
//   document.querySelector("#optn2").innerHTML = dataq[0].answer;
//   document.querySelector("#optn3").innerHTML = dataq[0].option2;
//   document.querySelector("#optn4").innerHTML = dataq[0].option3;
//   for (var i = 0; i < ans.length; i++) {
//     ans[i].addEventListener("click", function() {
//       checkAnswer(this);
//     });
//   }
//
//   function checkAnswer(ele) {
//     if (ele.innerHTML === dataq[0].answer) {
//       ele.classList.add("correct");
//       // loading(true);
//       document.querySelector("#hscore").innerHTML = ++curScore;
//       changeQues();
//     } else {
//       ele.classList.add("incorrect");
//       // loading(true);
//       document.querySelector("#hscore").innerHTML = --curScore;
//       changeQues();
//     }
//   }
//   console.log(dataq[0].question)
//
// })

// function updateQues(response) {
  // data = response.data.results[0];
  // document.querySelector("#question").innerHTML = data.question;
  // var options = data.incorrect_answers;
  // options.splice(randIndex(),0,data.correct_answer);
  // document.querySelector("#optn1").innerHTML = ;
  // document.querySelector("#optn2").innerHTML = ;
  // document.querySelector("#optn3").innerHTML = ;
  // document.querySelector("#optn4").innerHTML = ;
  // loading(false);
// }
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
