let timer;
let stopwatch;
let timerRunning = false;
let stopwatchRunning = false;
let lapCount = 1;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!timerRunning) {
        timer = setInterval(function () {
            timerSeconds++;
            document.getElementById('timerDisplay').innerText = formatTime(timerSeconds);
        }, 1000);
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timerSeconds = 0;
    document.getElementById('timerDisplay').innerText = '00:00:00';
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatch = setInterval(function () {
            stopwatchSeconds++;
            document.getElementById('stopwatchDisplay').innerText = formatTime(stopwatchSeconds);
        }, 1000);
        stopwatchRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    document.getElementById('stopwatchDisplay').innerText = '00:00:00';
    lapCount = 1;
    document.getElementById('laps').innerHTML = '';
}

function lapStopwatch() {
    const lapTime = document.getElementById('stopwatchDisplay').innerText;
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    lapCount++;
}