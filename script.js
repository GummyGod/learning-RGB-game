var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square 
		var clickedColor =this.style.backgroundColor;
		//compare color to winning color
		if(clickedColor === pickedColor){
		 	messageDisplay.textContent = "Correct!";
		 	changeColors(clickedColor);
		 	h1.style.backgroundColor = clickedColor;
		} else {
		 	this.style.backgroundColor = "#232323"
		 	messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i =0;i<squares.length;i++){
	//change color to match winning color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick random color
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];

}

function generateRandomColors(num){
	//make array 
	var arr = [];
	//add num random colors to array 
	for(var i =0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick  a red from 0 to 255
	var r = Math.floor(Math.random() * 256)
	//pick a green
	var g = Math.floor(Math.random() * 256)
	//pick blue
	var b = Math.floor(Math.random() * 256)
	return 	"rgb(" + r + ", " + g + ", " + b + ")";
}