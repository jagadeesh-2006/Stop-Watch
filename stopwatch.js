let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds  ;
         
}

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10); // Updates every 10 milliseconds (1/100th of a second)
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}


document.getElementById("startbtn").addEventListener("click", start);
document.getElementById("stopbtn").addEventListener("click", stop);
document.getElementById("resetbtn").addEventListener("click", reset);


updateDisplay();
