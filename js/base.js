function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}

var dead = false;

function moveButton(button) {
	setTimeout(function() {
		if (dead) return;
		button.style.top = random(0, window.innerHeight - 100) + 'px';
		button.style.left = random(0, window.innerWidth - 100) + 'px';
	
		button.innerHTML = "😱";
		
		setTimeout(function() {
			if (dead) return;
			button.innerHTML = "😀";
		}, 450);
	}, 100);
}

function buttonClick(button) {
	dead = true;
	button.innerHTML = "😔";
	setTimeout(function() {
		dead = false;
		button.innerHTML = "😀";
		moveButton(button);
	}, 2500);
}