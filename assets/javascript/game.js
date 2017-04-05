// Audio file
var audio = new Audio('assets/audio/Baseball Tonight.mp3');
     function playAudio() {
    audio.play();
   }
  function pauseAudio() {
    audio.pause();
   }

	//Variables
var computerNumber = 0;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;
var num1 = Math.floor(Math.random() * 12) + 1;
var num2 = Math.floor(Math.random() * 12) + 1;
var num3 = Math.floor(Math.random() * 12) + 1;
var num4 = Math.floor(Math.random() * 12) + 1;

//Click Functions 

$("#buttonBaseball").click(function() {
  totalScore=totalScore+num1; 		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonFootball").click(function() {
  totalScore=totalScore+num2;		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonBasketball").click(function() {
	totalScore=totalScore+num3;		
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#buttonHockey").click(function() {
	totalScore=totalScore+num4;
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

// 
newGame();

function newGame() {
totalScore = 0;	
computerNumber =  Math.floor(Math.random() * (102) + 19);
num1 = Math.floor(Math.random() * 12) + 1;
num2 = Math.floor(Math.random() * 12) + 1;
num3 = Math.floor(Math.random() * 12) + 1;
num4 = Math.floor(Math.random() * 12) + 1;
$("#compNum").html(computerNumber);
$("#scoreNum").html(totalScore);
};


function scoreCheck() {
	if (totalScore==computerNumber){
		winCount++;
		$("#winCount").html(winCount);
		$("#message").html("You won!");
		newGame();
	}else if(totalScore>computerNumber){
		lossCount++;
		$("#lossCount").html(lossCount);
		$("#message").html("You lost");
		newGame();
	}
}; 


