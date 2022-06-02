let ms = 0,
  s = 0,
  m = 0;
let timer;

//selects elements from the dom
const stopwatchEl = document.querySelector('h1');
const lapsContainer = document.querySelector('.laps');

function start() {
  //when there is no timer, call every milisecond the run function.
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

function run() {
  //displays the right time in the dom
  getTimer();
  //increases the amount of miliseconds
  ms++;
  //subtracts the amount of seconds
  if (ms == 100) {
    ms = 0;
    s++;
  }
  //subtracts the amount of minutes
  if (s == 60) {
    s = 0;
    m++;
  }
}

//will stop the timer using the stopTimer function
function pause() {
  stopTimer();
}

function stop() {
  //will stop the timer using the stopTimer function
  stopTimer();
  //clears the ms,s and m variables
  ms = 0;
  s = 0;
  m = 0;
  //displays the emty time
  getTimer();
}

//will stop the timer, clear the time and stars directly after.
function restart() {
  stop();
  start();
}

//stops the interval and sets the timer to false
function stopTimer() {
  clearInterval(timer);
  timer = false;
}

function getTimer() {
  //displays the right time to the dom
  return (stopwatchEl.textContent =
    (m < 10 ? '0' + m : m) +
    ':' +
    (s < 10 ? '0' + s : s) +
    ':' +
    (ms < 10 ? '0' + ms : ms));
}

//writes the time lap under the timer
function lap() {
  if (timer) {
    var li = document.createElement('li');
    li.innerText = getTimer();
    lapsContainer.appendChild(li);
  }
}

//clears all the saved time laps
function resetLaps() {
  lapsContainer.innerHTML = ' ';
}
