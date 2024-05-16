const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let intervalId;
let time = 0;
let isRunning = false;

startButton.addEventListener("click", () => {
  if (!isRunning) {
    intervalId = setInterval(() => {
      time++;
      updateTime();
    }, 10);
    isRunning = true;
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  time = 0;
  updateTime();
  isRunning = false;
});

const updateTime = () => {
  hours.textContent = Math.floor(time / 3600000).toString().padStart(2, "0");
  minutes.textContent = Math.floor((time % 3600000) / 60000).toString().padStart(2, "0");
  seconds.textContent = Math.floor((time % 60000) / 1000).toString().padStart(2, "0");
  milliseconds.textContent = (time % 1000).toString().padStart(3, "0");
};