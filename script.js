const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const displayTimerDiv = document.querySelector(".display");

let hasPause = false;
let stopWatchInterval = "";
count = 0;
second = 0;
minute = 0;
stopBtn.disabled = true;

startBtn.onclick = () => {
  handleStartAction();
};

stopBtn.onclick = () => {
  clearInterval(stopWatchInterval);
  startBtn.disabled = true;
};

resetBtn.onclick = () => {
  clearInterval(stopWatchInterval);
  displayTimerDiv.innerText = "0:0:0";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  hasPause = false;
  startBtn.innerText = "Start";
  count = 0;
  second = 0;
  minute = 0;
};

const handleStartAction = () => {
  stopBtn.disabled = false;
  if (!hasPause) {
    // when not paused state
    startBtn.innerText = "Pause";
    hasPause = true;

    stopWatchInterval = setInterval(() => {
      count++;
      //   check for milliseconds
      if (count === 100) {
        second++;
        count = 0;
      }
      // check for second
      if (second === 60) {
        minute++;
        second = 0;
      }
      displayTimerDiv.innerText = `${minute}:${second}:${count}`;
    }, 10);
    stopWatchInterval = stopWatchInterval;
  } else {
    // when paused state
    clearInterval(stopWatchInterval);
    startBtn.innerText = "Start";
    hasPause = false;
  }
};
