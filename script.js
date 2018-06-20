const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");

window.onload = () => {timer.textContent = "25:00"};

let workTime = 10;
let breakTime = 10;

function padded(a) {
	if (a < 10) {
		a = `0${a}`;
	}
	else {
		a = `${a}`;
	}
	return a;
}


// Need to work on timer functions.

// function startWorkTimer(time) {
// 	workTime--;
// 	let seconds = workTime % 60;
// 	let minutes = Math.floor((workTime / 60) % 60);
// 	timer.textContent = `${padded(minutes)}:${padded(seconds)}`;

//  	if (workTime == 0) {
//  		clearInterval(startWorkTimer);
//  		setInterval(startBreakTimer, 1000);
//  	}
// }

// function startBreakTimer(time) {
// 	breakTime--;
// 	let seconds = breakTime % 60;
// 	let minutes = Math.floor((breakTime / 60) % 60);
// 	timer.textContent = `${padded(minutes)}:${padded(seconds)}`;

//  	if (breakTime == 0) {
//  		clearInterval(startBreakTimer);
//  		setInterval(startWorkTimer, 1000);
//  	}
// }

function startTimer() {

}

function pauseTimer() {

}

function stopTimer() {

}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);