canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carWidth = 80;
carHeight = 180;
carX = 10;
carY = 400;

function add() {
	bgImgTag = new Image;
	bgImgTag.onload = uploadBg();
	bgImgTag.src = background_image;

	carTag = new Image;
	carTag.onload = uploadgreencar();
	carTag.src = greencar_image;
}

function uploadgreencar() {
	ctx.drawImage(carTag, carX, carY, carWidth, carHeight);
}

function uploadBg() {
	ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (carY >= 5) {
		carY = carY - 10;
		uploadBg();
		uploadgreencar();
		console.log(carX + " , " + carY);
		if((carX >= 400 && carX <= 460) || (carX >= 680 && carX <=700)){
			if(carY >= 110 && carY <130){
			window.alert("You won!");
			}
		}
	}
}

function down() {
	if (carY <= 505) {
		carY = carY + 10;
		uploadBg();
		uploadgreencar();
		console.log(carX + " , " + carY);
		if((carX >= 400 && carX <= 460) || (carX >= 680 && carX <=700)){
			if(carY >= 110 && carY <130){
			window.alert("You won!");
			}
		}
	}
}

function left() {
	if (carX >= 5) {
		carX = carX - 10;
		uploadBg();
		uploadgreencar();
		console.log(carX + " , " + carY);
		if((carX >= 400 && carX <= 460) || (carX >= 680 && carX <=700)){
			if(carY >= 110 && carY <130){
			window.alert("You won!");
			}
		}
	}
}

function right() {
	if (carX <= 695) {
		carX = carX + 10;
		uploadBg();
		uploadgreencar();
		console.log(carX + " , " + carY);
		if((carX >= 400 && carX <= 460) || (carX >= 680 && carX <=700)){
			if(carY >= 110 && carY <130){
			window.alert("You won!");
			}
		}
	}
}
