$(document).ready(function () {
	window.highScore = 0;
	window.score = 0;
	window.wins = 0;
	window.winStreak = 0;
	window.gamesPlayed = 0;
	window.buttonClicks = 0;
	window.statsOpen = false;
	window.easterEgg = 0;
	
	$(".stats").hide();
	$('.menu li ul').hide();
	
		$('.menuImage').hover(
		function () { 
			this.src = "imagery/menuButtonHover.png";
		},
		function () { 
			this.src = "imagery/menuButton.png";
		}
	);
	
	$('.menu li').hover(
		function () { //appearing on hover
			$('ul', this).fadeIn();
		},
		function () { //disappearing on hover
			$('ul', this).fadeOut();
		}
	);  
});

function setDifficulty(clickId){
	var difficultyButtonClicked = document.getElementById(clickId);
	var difficultyButtonClickedId = difficultyButtonClicked.id;
	var elementInputs = document.getElementsByTagName("input");
	
	$(".title").fadeOut(750);
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	
	if (difficultyButtonClickedId){
		setTimeout(function(){
			$(elementInputs).remove();
			elementInputs = null;
			difficultySelected(difficultyButtonClickedId);
		}, 750);
	}else{
		alert('ERROR: No Compatiable Difficulty Selected');
	}
	
}

function difficultySelected(difficulty){
	var elementInputs = document.getElementsByTagName("input");
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		switch(difficulty){
			case 'easy': 
				window.difficulty = 'easy';
				window.easterEgg = Math.floor((Math.random() * 20) + 7);
				
				$(".title").html("Pick A Grid Size").hide().fadeIn(750);
				if(window.statsOpen == true){
					$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
				}
				for(var i = 1; i < 5; i++){
					buttonGridSize = document.createElement("input");
					buttonGridSize.type = "button";
					buttonGridSize.style.cssFloat = 'left';
					buttonGridSize.style.width = '120px';
					buttonGridSize.value = i * 10;
					buttonGridSize.id = "clickSelection" + i;
					buttonGridSize.onclick = function(){buildEasyButtonGrid(this.value);};
					$(".contentWrap").hide().fadeIn(750);
					$(".content").append($(buttonGridSize)).hide().fadeIn(750);
				}
				break;
			case 'medium': 
				window.difficulty = 'medium';
				window.easterEgg = Math.floor((Math.random() * 15) + 7);
				
				$(".title").html("Pick A Grid Size").hide().fadeIn(750);
				if(window.statsOpen == true){
					$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
				}
				for(var i = 1; i < 5; i++){
					buttonGridSize = document.createElement("input");
					buttonGridSize.type = "button";
					buttonGridSize.style.cssFloat = 'left';
					buttonGridSize.style.width = '120px';
					buttonGridSize.value = i * 10;
					buttonGridSize.id = "clickSelection" + i;
					buttonGridSize.onclick = function(){buildMediumButtonGrid(this.value);};
					$(".contentWrap").hide().fadeIn(750);
					$(".content").append($(buttonGridSize)).hide().fadeIn(750);
				}
				break;
			case 'hard':
				window.difficulty = 'hard';
				window.easterEgg = Math.floor((Math.random() * 12) + 7);
				
				$(".title").html("Pick A Grid Size").hide().fadeIn(750);
				if(window.statsOpen == true){
					$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
				}
				for(var i = 1; i < 5; i++){
					buttonGridSize = document.createElement("input");
					buttonGridSize.type = "button";
					buttonGridSize.style.cssFloat = 'left';
					buttonGridSize.style.width = '120px';
					buttonGridSize.value = i * 10;
					buttonGridSize.id = "clickSelection" + i;
					buttonGridSize.onclick = function(){buildHardButtonGrid(this.value);};
					$(".contentWrap").hide().fadeIn(750);
					$(".content").append($(buttonGridSize)).hide().fadeIn(750);
				}
				break;
			case 'insanity': 
				window.difficulty = 'insanity';
				window.easterEgg = Math.floor((Math.random() * 10) + 7);
				
				$(".title").html("Pick A Grid Size").hide().fadeIn(750);
				if(window.statsOpen == true){
					$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
				}
				for(var i = 1; i < 5; i++){
					buttonGridSize = document.createElement("input");
					buttonGridSize.type = "button";
					buttonGridSize.style.cssFloat = 'left';
					buttonGridSize.style.width = '120px';
					buttonGridSize.value = i * 10;
					buttonGridSize.id = "clickSelection" + i;
					buttonGridSize.onclick = function(){buildInsaneButtonGrid(this.value);};
					$(".contentWrap").hide().fadeIn(750);
					$(".content").append($(buttonGridSize)).hide().fadeIn(750);
				}
				break;
			default:
				alert('ERROR: No Compatiable Difficulty Selected');
		}
	}, 750);
}

function buildEasyButtonGrid(gridSize){
	var gridSize = parseInt(gridSize);
	var elementInputs = document.getElementsByTagName("input");
	var e = document.body.childNodes[1].children[4].children[0];
	var buttonCounter = 0;
	var easyComparisonValuesArray = [];
	window.gridSize = gridSize;
	
	for (var count = 0; count < (gridSize * 4) + 1; count++){
		easyComparisonValuesArray[count] = count;
	}
	
	for(var j, x, i = easyComparisonValuesArray.length; i; j = parseInt(Math.random() * i), x = easyComparisonValuesArray[--i], easyComparisonValuesArray[i] = easyComparisonValuesArray[j], easyComparisonValuesArray[j] = x);
	window.easyComparisonValuesArray = easyComparisonValuesArray;
	
	$(".title").fadeOut(750);
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		for(var rowCounter = 0; rowCounter < 5; rowCounter++){ 
	        var row = document.createElement("div"); 
	        row.className = "row"; 
			for(var buttonCellCounter = 1; buttonCellCounter <= (gridSize / 5); buttonCellCounter++){
				buttonCounter++;
				buttonCell = document.createElement("input");
				buttonCell.type = "button";
				buttonCell.style.cssFloat = 'left';
				buttonCell.value = buttonCounter;
				buttonCell.id = "clickSelection" + buttonCounter;
				buttonCell.onclick = function(){easyButtonPress(this.id, this.value);};
				row.appendChild(buttonCell);
			}
			e.appendChild(row);
		}
		$(".contentWrap").hide().fadeIn(750);
		$(".content").hide().fadeIn(750);
	}, 750);
}

function buildMediumButtonGrid(gridSize){
	var gridSize = parseInt(gridSize);
	var elementInputs = document.getElementsByTagName("input");
	var e = document.body.childNodes[1].children[4].children[0];
	var buttonCounter = 0;
	var mediumComparisonValuesArray = [];
	window.gridSize = gridSize;
	
	for (var count = 0; count < (gridSize * 3) + 1; count++){
		mediumComparisonValuesArray[count] = count;
	}
	
	for(var j, x, i = mediumComparisonValuesArray.length; i; j = parseInt(Math.random() * i), x = mediumComparisonValuesArray[--i], mediumComparisonValuesArray[i] = mediumComparisonValuesArray[j], mediumComparisonValuesArray[j] = x);
	window.mediumComparisonValuesArray = mediumComparisonValuesArray;
	
	$(".title").fadeOut(750);
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		for(var rowCounter = 0; rowCounter < 5; rowCounter++){ 
	        var row = document.createElement("div"); 
	        row.className = "row"; 
			for(var buttonCellCounter = 1; buttonCellCounter <= (gridSize / 5); buttonCellCounter++){
				buttonCounter++;
				buttonCell = document.createElement("input");
				buttonCell.type = "button";
				buttonCell.style.cssFloat = 'left';
				buttonCell.value = buttonCounter;
				buttonCell.id = "clickSelection" + buttonCounter;
				buttonCell.onclick = function(){mediumButtonPress(this.id, this.value);};
				row.appendChild(buttonCell);
			}
			e.appendChild(row);
		}
		$(".contentWrap").hide().fadeIn(750);
		$(".content").hide().fadeIn(750);
	}, 750);
}

function buildHardButtonGrid(gridSize){
	var gridSize = parseInt(gridSize);
	var elementInputs = document.getElementsByTagName("input");
	var e = document.body.childNodes[1].children[4].children[0];
	var buttonCounter = 0;
	var hardComparisonValuesArray = []
	window.gridSize = gridSize;
	
	for (var count = 0; count < (gridSize * 2) + 1; count++){
		hardComparisonValuesArray[count] = count;
	}
	
	for(var j, x, i = hardComparisonValuesArray.length; i; j = parseInt(Math.random() * i), x = hardComparisonValuesArray[--i], hardComparisonValuesArray[i] = hardComparisonValuesArray[j], hardComparisonValuesArray[j] = x);
	window.hardComparisonValuesArray = hardComparisonValuesArray;
	
	$(".title").fadeOut(750);
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		for(var rowCounter = 0; rowCounter < 5; rowCounter++){ 
	        var row = document.createElement("div"); 
	        row.className = "row"; 
			for(var buttonCellCounter = 1; buttonCellCounter <= (gridSize / 5); buttonCellCounter++){
				buttonCounter++;
				buttonCell = document.createElement("input");
				buttonCell.type = "button";
				buttonCell.style.cssFloat = 'left';
				buttonCell.value = buttonCounter;
				buttonCell.id = "clickSelection" + buttonCounter;
				buttonCell.onclick = function(){hardButtonPress(this.id, this.value);};
				row.appendChild(buttonCell);
			}
			e.appendChild(row);
		}
		$(".contentWrap").hide().fadeIn(750);
		$(".content").hide().fadeIn(750);
	}, 750);
}

function buildInsaneButtonGrid(gridSize){
	var gridSize = parseInt(gridSize);
	var elementInputs = document.getElementsByTagName("input");
	var e = document.body.childNodes[1].children[4].children[0];
	var buttonCounter = 0;
	var insaneComparisonValuesArray = [];
	window.gridSize = gridSize;
	
	for (var count = 0; count < gridSize + 1; count++){
		insaneComparisonValuesArray[count] = count;
	}
	
	for(var j, x, i = insaneComparisonValuesArray.length; i; j = parseInt(Math.random() * i), x = insaneComparisonValuesArray[--i], insaneComparisonValuesArray[i] = insaneComparisonValuesArray[j], insaneComparisonValuesArray[j] = x);
	window.insaneComparisonValuesArray = insaneComparisonValuesArray;
	
	$(".title").fadeOut(750);
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		for(var rowCounter = 0; rowCounter < 5; rowCounter++){ 
	        var row = document.createElement("div"); 
	        row.className = "row"; 
			for(var buttonCellCounter = 1; buttonCellCounter <= (gridSize / 5); buttonCellCounter++){
				buttonCounter++;
				buttonCell = document.createElement("input");
				buttonCell.type = "button";
				buttonCell.style.cssFloat = 'left';
				buttonCell.value = buttonCounter;
				buttonCell.id = "clickSelection" + buttonCounter;
				buttonCell.onclick = function(){insaneButtonPress(this.id, this.value);};
				row.appendChild(buttonCell);
			}
			e.appendChild(row);
		}
		$(".contentWrap").hide().fadeIn(750);
		$(".content").hide().fadeIn(750);
	}, 750);
}


function easyButtonPress(buttonId, buttonValue){
	var buttonClicked = document.getElementById(buttonId);
	var easyComparisonValuesArray = window.easyComparisonValuesArray;
	window.buttonClicks = window.buttonClicks +1;
	
	if (buttonValue != easyComparisonValuesArray[buttonValue]){
		clickScore();
		buttonClicked.disabled = true;
		buttonClicked.style.backgroundColor = '759999';
		buttonClicked.style.color = '#FFFFFF';
	}
	else {
		window.winStreak = 0;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		for(var i = 1; i < window.gridSize + 1; i++){
			buttonToDisable = document.getElementById("clickSelection" + i);
			if (buttonToDisable != buttonClicked){
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '759999';
				buttonToDisable.style.color = '#FFFFFF';
			}else{
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '#FF826F';
				buttonToDisable.style.color = '#FFFFFF';
			}
		}
		window.gamesPlayed = window.gamesPlayed + 1;
		endGame();
	}
	
	if(window.score == window.gridSize){
		window.wins = window.wins + 1;
		window.winStreak = window.winStreak + 1;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		window.gamesPlayed = window.gamesPlayed + 1;
		if(window.winStreak == window.easterEgg){
			e = document.body.childNodes[1].childNodes[1];
			easterEgg = document.createElement("img");
			easterEgg.id = 'egg';
			easterEgg.src = 'imagery/easterEgg.png';
			easterEgg.style.cssFloat = 'right';
			easterEgg.style.display = 'block';
			easterEgg.style.position = 'absolute';
			e.appendChild(easterEgg);
			$('#egg').hide().fadeIn(300).fadeOut(300);
			setTimeout(function(){
				$('#egg').remove();
				easterEgg = null;
			}, 350);	
		}
		endGame();
	}
}

function mediumButtonPress(buttonId, buttonValue){
	var buttonClicked = document.getElementById(buttonId);
	var mediumComparisonValuesArray = window.mediumComparisonValuesArray;
	window.buttonClicks = window.buttonClicks +1;
	
	if (buttonValue != mediumComparisonValuesArray[buttonValue]){
		clickScore();
		buttonClicked.disabled = true;
		buttonClicked.style.backgroundColor = '759999';
		buttonClicked.style.color = '#FFFFFF';
	}
	else {
		window.winStreak = 0;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		for(var i = 1; i < window.gridSize + 1; i++){
			buttonToDisable = document.getElementById("clickSelection" + i);
			if (buttonToDisable != buttonClicked){
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '759999';
				buttonToDisable.style.color = '#FFFFFF';
			}else{
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '#FF826F';
				buttonToDisable.style.color = '#FFFFFF';
			}
		}
		window.gamesPlayed = window.gamesPlayed + 1;
		endGame();
	}
	
	if(window.score == window.gridSize){
		window.wins = window.wins + 1;
		window.winStreak = window.winStreak + 1;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		window.gamesPlayed = window.gamesPlayed + 1;
		if(window.winStreak == window.easterEgg){
			e = document.body.childNodes[1].childNodes[1];
			easterEgg = document.createElement("img");
			easterEgg.id = 'egg';
			easterEgg.src = 'imagery/easterEgg.png';
			easterEgg.style.cssFloat = 'right';
			easterEgg.style.display = 'block';
			easterEgg.style.position = 'absolute';
			e.appendChild(easterEgg);
			$('#egg').hide().fadeIn(300).fadeOut(300);
			setTimeout(function(){
				$('#egg').remove();
				easterEgg = null;
			}, 350);
		}
		endGame();
	}
}

function hardButtonPress(buttonId, buttonValue){
	var buttonClicked = document.getElementById(buttonId);
	var hardComparisonValuesArray = window.hardComparisonValuesArray;
	window.buttonClicks = window.buttonClicks +1;
	
	if (buttonValue != hardComparisonValuesArray[buttonValue]){
		clickScore();
		buttonClicked.disabled = true;
		buttonClicked.style.backgroundColor = '759999';
		buttonClicked.style.color = '#FFFFFF';
	}
	else {
		window.winStreak = 0;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		for(var i = 1; i < window.gridSize + 1; i++){
			buttonToDisable = document.getElementById("clickSelection" + i);
			if (buttonToDisable != buttonClicked){
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '759999';
				buttonToDisable.style.color = '#FFFFFF';
			}else{
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '#FF826F';
				buttonToDisable.style.color = '#FFFFFF';
			}
		}
		window.gamesPlayed = window.gamesPlayed + 1;
		endGame();
	}
	
	if(window.score == window.gridSize){
		window.wins = window.wins + 1;
		window.winStreak = window.winStreak + 1;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		window.gamesPlayed = window.gamesPlayed + 1;
		if(window.winStreak == window.easterEgg){
			e = document.body.childNodes[1].childNodes[1];
			easterEgg = document.createElement("img");
			easterEgg.id = 'egg';
			easterEgg.src = 'imagery/easterEgg.png';
			easterEgg.style.cssFloat = 'right';
			easterEgg.style.display = 'block';
			easterEgg.style.position = 'absolute';
			e.appendChild(easterEgg);
			$('#egg').hide().fadeIn(300).fadeOut(300);
			setTimeout(function(){
				$('#egg').remove();
				easterEgg = null;
			}, 350);
		}
		endGame();
	}
}

function insaneButtonPress(buttonId, buttonValue){
	var buttonClicked = document.getElementById(buttonId);
	var insaneComparisonValuesArray = window.insaneComparisonValuesArray;
	window.buttonClicks = window.buttonClicks +1;
	
	if (buttonValue != insaneComparisonValuesArray[buttonValue]){
		clickScore();
		buttonClicked.disabled = true;
		buttonClicked.style.backgroundColor = '759999';
		buttonClicked.style.color = '#FFFFFF';
	}
	else {
		window.winStreak = 0;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		for(var i = 1; i < window.gridSize + 1; i++){
			buttonToDisable = document.getElementById("clickSelection" + i);
			if (buttonToDisable != buttonClicked){
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '759999';
				buttonToDisable.style.color = '#FFFFFF';
			}else{
				buttonToDisable.disabled = true;
				buttonToDisable.style.backgroundColor = '#FF826F';
				buttonToDisable.style.color = '#FFFFFF';
			}
			
		}
		window.gamesPlayed = window.gamesPlayed + 1;
		endGame();
	}
	if(window.score == window.gridSize){
		window.wins = window.wins + 1;
		window.winStreak = window.winStreak + 1;
		$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
		window.gamesPlayed = window.gamesPlayed + 1;
		if(window.winStreak == window.easterEgg){
			e = document.body.childNodes[1].childNodes[1];
			easterEgg = document.createElement("img");
			easterEgg.id = 'egg';
			easterEgg.src = 'imagery/easterEgg.png';
			easterEgg.style.cssFloat = 'right';
			easterEgg.style.display = 'block';
			easterEgg.style.position = 'absolute';
			e.appendChild(easterEgg);
			$('#egg').hide().fadeIn(300).fadeOut(300);
			setTimeout(function(){
				$('#egg').remove();
				easterEgg = null;
			}, 350);
		}
		endGame();
	}
}

function clickStats(){
	window.statsOpen = true;
	
	if($(".stats").is(':visible')){
		window.statsOpen = false;
		$(".stats").slideUp(350);
	}else{
		$(".stats").slideDown(350);
	}
	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
}

function clickReset(){
	var elementInputs = document.getElementsByTagName("input");
	var endMessage = document.getElementById("endMessage");
	var difficulty = window.difficulty;
	var gridSize = window.gridSize;

	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
	
	$("title").fadeOut(750);
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	if(elementInputs.length > 9 || window.endGameBool == true){
		setTimeout(function(){
			$(elementInputs).remove();
			elementInputs - null;
			$(endMessage).remove();
			endMessage = null;
			switch(difficulty){
				case 'easy': 
					window.score = 0;
					window.endGameBool = false;
					buildEasyButtonGrid(gridSize);
					break;
				case 'medium': 
					window.score = 0;
					window.endGameBool = false;
					buildMediumButtonGrid(gridSize);
					break;
				case 'hard': 
					window.score = 0;
					window.endGameBool = false;
					buildHardButtonGrid(gridSize);
					break;
				case 'insanity': 
					window.score = 0;
					window.endGameBool = false;
					buildInsaneButtonGrid(gridSize);
					break;
				default:
					alert('ERROR: No Compatiable Difficulty Selected');
			}
		}, 750);
	}else{
		this.clickNewGame();
	}
}//end function clickReset

function clickNewGame(){
	var elementInputs = document.getElementsByTagName("input");
	var endMessage = document.getElementById("endMessage");
	window.highScore = 0;
	window.score = 0;
	
	$(".title").fadeOut(750);
	if(window.statsOpen == true){
		$(".stats").fadeOut(750);
	}
	$(".contentWrap").fadeOut(750);
	$(elementInputs).fadeOut(750);
	
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(endMessage).remove();
		endMessage = null;
		
		$(".title").html("Set Difficulty").hide().fadeIn(750);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(750);
		}
		
		easyButton = document.createElement("input");
		easyButton.type = "button";
		easyButton.style.cssFloat = 'left';
		easyButton.style.width = '120px';
		easyButton.value = "Easy";
		easyButton.id = "easy";
		easyButton.onclick = function(){setDifficulty(this.id);};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(easyButton)).hide().fadeIn(750);
		
		mediumButton = document.createElement("input");
		mediumButton.type = "button";
		mediumButton.style.cssFloat = 'left';
		mediumButton.style.width = '120px';
		mediumButton.value = "Medium";
		mediumButton.id = "medium";
		mediumButton.onclick = function(){setDifficulty(this.id);};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(mediumButton)).hide().fadeIn(750);
		
		hardButton = document.createElement("input");
		hardButton.type = "button";
		hardButton.style.cssFloat = 'left';
		hardButton.style.width = '120px';
		hardButton.value = "Hard";
		hardButton.id = "hard";
		hardButton.onclick = function(){setDifficulty(this.id);};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(hardButton)).hide().fadeIn(750);
		
		insanityButton = document.createElement("input");
		insanityButton.type = "button";
		insanityButton.style.cssFloat = 'left';
		insanityButton.style.width = '120px';
		insanityButton.value = "Insanity";
		insanityButton.id = "insanity";
		insanityButton.onclick = function(){setDifficulty(this.id);};
		$(".contentWrap").hide().fadeIn(750);
		$(".content").append($(insanityButton)).hide().fadeIn(750);
	}, 750);
}//end function clickNewGame

function clickScore(){
	window.score = window.score + 1;
	tempScore = window.score;
	
	$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak);
	
	if(tempScore == 0){
		window.highScore = 0;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}else if(window.highScore < tempScore){
		window.highScore = tempScore;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}else{
		window.highScore = window.highScore;
		$(".title").html("Score: " + window.score + ", High Score: " + window.highScore );
	}
}

function endGame(){
	var elementInputs = document.getElementsByTagName("input");
	window.endGameBool = true;
	
	$(".title").fadeOut(1250);
	if(window.statsOpen == true){
		$(".stats").fadeOut(1250);
	}
	$(".contentWrap").fadeOut(1250);
	$(elementInputs).fadeOut(1250);
	
	setTimeout(function(){
		$(elementInputs).remove();
		elementInputs = null;
		$(".row").remove();
		
		$(".title").html("Final Score: " + window.score + ", High Score: " + window.highScore ).hide().fadeIn(1250);
		if(window.statsOpen == true){
			$(".stats").html("Buttons Clicked: " + window.buttonClicks + ", Games Played: " + window.gamesPlayed + ", Wins: " + window.wins + ", Win Streak: " + window.winStreak).hide().fadeIn(1250);
		}
		
		if(window.score == window.gridSize){
			endMessage = document.createElement("h2");
			endMessage.id = 'endMessage';
			endMessage.className = 'endMessage'; 
			endMessage.style.textAlign = 'center';
			endMessage.innerHTML = "You're the Winner!";
			$(".contentWrap").hide().fadeIn(1250);
			$(".content").append($(endMessage)).hide().fadeIn(1250);
		}else{
			endMessage = document.createElement("h2");
			endMessage.id = 'endMessage';
			endMessage.className = 'endMessage'; 
			endMessage.style.textAlign = 'center';
			endMessage.innerHTML = "You've Lost.";
			$(".contentWrap").hide().fadeIn(1250);
			$(".content").append($(endMessage)).hide().fadeIn(1250);
		}
		
		stats = document.createElement("input");
		stats.type = "button";
		stats.style.cssFloat = 'left';
		stats.style.width = '120px';
		stats.value = "View Stats";
		stats.id = "easy";
		stats.onclick = function(){clickStats();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(stats)).hide().fadeIn(1250);
		
		reset = document.createElement("input");
		reset.type = "button";
		reset.style.cssFloat = 'left';
		reset.style.width = '120px';
		reset.value = "Try Again";
		reset.id = "medium";
		reset.onclick = function(){clickReset();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(reset)).hide().fadeIn(1250);
		
		newGame = document.createElement("input");
		newGame.type = "button";
		newGame.style.cssFloat = 'left';
		newGame.style.width = '120px';
		newGame.value = "New Game";
		newGame.id = "hard";
		newGame.onclick = function(){clickNewGame();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(newGame)).hide().fadeIn(1250);
		
		quit = document.createElement("input");
		quit.type = "button";
		quit.style.cssFloat = 'left';
		quit.style.width = '120px';
		quit.value = "Quit";
		quit.id = "insanity";
		quit.onclick = function(){clickQuit();};
		$(".contentWrap").hide().fadeIn(1250);
		$(".content").append($(quit)).hide().fadeIn(1250);
	}, 1250);
}