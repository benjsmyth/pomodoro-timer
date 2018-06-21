const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

window.onload = () => {timer.textContent = "25:00"};

function padded(a) {
	if (a < 10) {
		a = `0${a}`;
	}
	else {
		a = `${a}`;
	}
	return a;
}

let time = 1500;
let clockType = [];

let seconds = time % 60;
let minutes = Math.floor((time / 60) % 60);

function updateTime() {
	if (!clockType.includes(minutes)) clockType.push(minutes);

	seconds = time % 60;
	minutes = Math.floor((time / 60) % 60);
	timer.textContent = `${padded(minutes)}:${padded(seconds)}`;

	if (time == 0 && clockType.includes(1)) {
		clockType.splice(0);
		time = 301;
	}

	else if (time == 0 && !clockType.includes(1)) {
		clockType.splice(0);
		time = 1501;
	}

	time--;
}

var interval;

function startTimer() {
	updateTime();
	interval = setInterval(updateTime, 1000);
	start.removeEventListener("click", startTimer);
	pause.addEventListener("click", pauseTimer);
}

function pauseTimer() {
	clearInterval(interval);
	pause.removeEventListener("click", pauseTimer);
	start.addEventListener("click", startTimer);
}

function resetTimer() {
	clearInterval(interval);
	clockType.splice(0);
	time = 60;
	timer.textContent = "25:00";
	start.addEventListener("click", startTimer);
	pause.addEventListener("click", pauseTimer);
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);