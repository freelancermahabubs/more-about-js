const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let hours = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function(){
timer = true;
stopWatch();
});
stopBtn.addEventListener('click', function(){
timer = false;
});
resetBtn.addEventListener('click', function(){
timer = false;
hours = 0;
minute = 0;
second = 0;
count = 0;
document.getElementById('hours').innerHTML = "00";
document.getElementById('minute').innerHTML = "00";
document.getElementById('second').innerHTML = "00";
document.getElementById('count').innerHTML = "00";
});

function stopWatch(){
  if(timer){
    count++;
    if(count == 100){
      second++;
      count = 0;
    }
    if(second == 60){
      minute++;
      second = 0;
    }
    if(minute == 60){
      hours++;
      minute = 0;
      second = 0;
  }
  let hrString = hours;
  let minString = minute;
  let secString = second;
  let countString = count;

  if(hours < 10){
    hrString = "0" + hrString;
  }
  if(minute < 10){
    minString = "0" + minString;
  }
  if(second < 10){
    secString = "0" + secString;
  }
  if(count < 10){
    countString = "0" + countString;
  }
  document.getElementById('hours').innerHTML = hrString;
  document.getElementById('minute').innerHTML = minString;
  document.getElementById('second').innerHTML = secString;
  document.getElementById('count').innerHTML = countString;
  setTimeout(stopWatch, 10);
  }
};

