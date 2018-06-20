const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
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

function updateTime() {
	this.time--;
	var seconds = this.time % 60;
	var minutes = Math.floor((this.time / 60) % 60);
	timer.textContent = `${padded(minutes)}:${padded(seconds)}`;
	if (this.time === 0) clearInterval(interval);
}

let workClock = {
	"time": 1500,
	"updateTime": updateTime
}

let breakClock = {
	"time": 300,
	"updateTime": updateTime
}

function startTimer() {
	var interval = setInterval(workClock.updateTime(), 1000);
}

function pauseTimer() {
	clearInterval(interval);
}

function stopTimer() {

}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);