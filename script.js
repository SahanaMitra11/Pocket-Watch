setInterval(clock, 1000);

const hour = document.querySelector("[hour-hand]");
const minutes = document.querySelector("[minutes-hand]");
const seconds = document.querySelector("[seconds-hand]");

function clock() {
	const curentDate = new Date();
	const curentSeconds = curentDate.getSeconds() / 60;
	const curentMinutes = (curentSeconds + curentDate.getMinutes()) / 60;
	const curentHour = (curentMinutes + curentDate.getHours()) / 12;
	rotation(seconds, curentSeconds);
	rotation(minutes, curentMinutes);
	rotation(hour, curentHour);
}

function rotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

clock();