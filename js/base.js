function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}

var clicked = false;
var isMoving = false;

function moveButton(button) {
	setTimeout(function() {
		if (clicked || isMoving) return;

		isMoving = true;
		button.style.top = random(0, window.innerHeight - 50) + 'px';
		button.style.left = random(0, window.innerWidth - 50) + 'px';
	
		button.innerHTML = "😱";
		
		setTimeout(function() {
			isMoving = false;
			if (clicked) return;
			button.innerHTML = "😀";
		}, 450);
	}, 100);
}

function buttonClick(button) {
	clicked = true;
	button.innerHTML = "😔";
	setTimeout(function() {
		clicked = false;
		button.innerHTML = "😀";
		moveButton(button);
	}, 2500);
}
