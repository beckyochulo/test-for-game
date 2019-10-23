let numSquares = 6;
let colors = [];
let pickedColor;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeBottons();
  setUpSquares();
  reassignColors();

 
function setUpModeBottons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      let clickedColor = this.style.backgroundColor;
      //compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#000000";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
  reset();
}

}

function reassignColors() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor(colors);
}

function reset() {
  reassignColors();
  colorDisplay.textContent = pickedColor;
  console.log(this);
  resetButton.textContent === "New Color";
  //change colors of square
  messageDisplay.textContent = " ";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColor(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(items) {
  let random = Math.floor(Math.random() * items.length);

  return items[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // ger random color push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red"  from 0 - 255
  let r = Math.floor(Math.random() * 256);
  //pick a "green"  from 0 - 255
  let g = Math.floor(Math.random() * 256);
  //pick a "blue"  from 0 - 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//
//how many squares to show
//pick new colors
//pick a new pickedColor
//update page to reflect changes

// easyBtn.addEventListener("click", function () {
//   hardBtn.classList.remove("selected")
//   easyBtn.classList.add("selected")
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++){
//     if (colors[i]){
//       squares[i].style.backgroundColor = colors[i]
//     } else {
//       squares[i].style.display = "none"
//     }
//     }
// })

// hardBtn.addEventListener("click", function () {
//   easyBtn.classList.remove("selected")
//   hardBtn.classList.add("selected")
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++){

//       squares[i].style.backgroundColor = colors[i]
//       squares[i].style.display = "block"
//     }

// })

//generate all new colors
//   colors = generateRandomColors(6);
//   //pick a new random color from array
//   pickedColor = pickColor();
//   //change colorDisplay to match picked color
//   colorDisplay.textContent = pickedColor;
//   //change colors of square
//   messageDisplay.textContent = " ";
//   this.textContent = "New Color";
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//   }
//   h1.style.backgroundColor = "steelblue";
//
