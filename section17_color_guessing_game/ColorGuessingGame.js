var main = {};
main.correctColor = null;
main.colorDisplay = document.getElementById("colorDisplay");
main.actionFeedback = document.getElementById("actionFeedback");
main.numSquaresEasy = 3;
main.numSquaresHard = 6;
main.numSquaresUsed = main.numSquaresHard;
main.backgroundColor = window.getComputedStyle(document.body).backgroundColor;

main.newGameBtn = document.getElementById("newGame");
main.newGameBtn.addEventListener("click",
  () => { startGame() });

main.easyBtn = document.getElementById("easy");
main.easyBtn.addEventListener("click", event => {
  changeDifficulty(main.numSquaresEasy);
});

main.hardBtn = document.getElementById("hard");
main.hardBtn.addEventListener("click", event => {
  changeDifficulty(main.numSquaresHard);
});

main.squares = Array.from(document.getElementsByClassName("square"));
main.squares.forEach((square, idx) => {
  square.addEventListener("click", event => {
    if(square.style.backgroundColor === main.correctColor) {
      endGame();
      main.actionFeedback.textContent = "Correct!";
    }
    else {
      square.style.backgroundColor = main.backgroundColor;
      main.actionFeedback.textContent = "Try Again.";
    }
  });
});

changeDifficulty(main.numSquaresHard);


////////////////////////////////////////////////////////////////////////////////

function changeDifficulty(numSquaresUsed) {
  main.numSquaresUsed = numSquaresUsed;

  if(numSquaresUsed === main.numSquaresEasy) {
    main.easyBtn.classList.add("selected");
    main.hardBtn.classList.remove("selected");
  }
  else {
    main.easyBtn.classList.remove("selected");
    main.hardBtn.classList.add("selected");
  }

  startGame();
}

function startGame() {
  main.newGameBtn.textContent = "New Colors";
  main.actionFeedback.textContent = "";
  setSquareColors();
  const chosenIdx = getRandomInt(main.numSquaresUsed);
  setCorrectColor(main.squares[chosenIdx].style.backgroundColor);
}

function endGame() {
  main.newGameBtn.textContent = "Play Again?";
  setSquareColors(main.correctColor);
}

function setCorrectColor(color) {
  main.correctColor = color;
  main.colorDisplay.textContent = color;
}

function setSquareColors(desiredColor) {
  for(var i = 0; i < main.squares.length; i++) {
    var squareColor = desiredColor;
    var squareDisplay = "block";

    if(i >= main.numSquaresUsed) {
      squareColor = main.backgroundColor;
      squareDisplay = "none";
    }
    else if(typeof(desiredColor) === typeof(undefined)) {
      squareColor = getRandomColor();
    }

    main.squares[i].style.backgroundColor = squareColor;
    main.squares[i].style.display = squareDisplay;
  }
}

function getRandomColor() {
  const max = 255;
  return "rgb(" + Array(3).fill().map(x => getRandomInt(max)).join(', ') + ")";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


