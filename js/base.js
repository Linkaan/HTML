function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}

var clicked = false;
var isMoving = false;

function moveButton(boll) {
	setTimeout(function() {
		if (clicked || isMoving) return;

		isMoving = true;
		boll.style.top = random(0, window.innerHeight - 50) + 'px';
		boll.style.left = random(0, window.innerWidth - 50) + 'px';
	
		boll.innerHTML = "😱";
		
		setTimeout(function() {
			isMoving = false;
			if (clicked) return;
			boll.innerHTML = "😀";
		}, 450);
	}, 150);
}

function buttonClick(boll) {
	clicked = true;
	boll.innerHTML = "😔";
	setTimeout(function() {
		clicked = false;
		boll.innerHTML = "😀";
		moveButton(boll);
	}, 2500);
}
