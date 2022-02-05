const timer = document.getElementById('stopwatch');
const laps = document.getElementById("laps")

//Current system for updating the time on borad
let sec = 0;
let hr = 0;
let min = 0;

let currentTime = 0; //total running time in seconds
let lastLapTime = 0; //previous time lap was called.

//Displaying time on the board
let hrString = 0;
let minString = 0;
let secString = 0;


let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function lapTimer(){
    let newLap = document.createElement('li');
    let lapSecs = currentTime - lastLapTime;
    lastLapTime = currentTime;
    
    let lapMins = Math.floor(lapSecs / 60);
    let lapHrs = Math.floor(lapMins / 60);
    if (lapSecs > 60){
      lapSecs = lapSecs % 60; 
    }
    if(lapMins > 60){
      lapMins = lapMins % 60; 
    }

    if(lapSecs < 10){
      lapSecs = '0' + lapSecs;  
    }
    if(lapMins < 10){
      lapMins = '0' + lapMins;
    }
    if(lapHrs < 10){
      lapHrs = '0' + lapHrs; 
    }



    newLap.innerHTML=`     
      <li class="lap">
        <div contenteditable="true">Lap1</div>
        <div>${lapHrs + ":" + lapMins + ":" + lapSecs}</div>
      </li>
    `;
    laps.appendChild(newLap);
}

function timerCycle() {
    if (stoptime == false) {

    currentTime += 1;
    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      secString = '0' + sec;
    } else{
      secString = sec; 
    }
    if (min < 10 || min == 0) {
      minString = '0' + min;
    } else {
      minString = min; 
    }

    if (hr < 10 || hr == 0) {
      hrString = '0' + hr;
    } else {
      hrString = hr;
    }

    timer.innerHTML = hrString + ':' + minString + ':' + secString;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    sec = 0;
    min = 0;
    hr = 0;
    currentTime = 0;
    lastLapTime = 0;
}