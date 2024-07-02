let milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

const start = () => {
  timer = true;
  display();
};


const stop = () => {
  timer = false;
  display();
};


const reset = () => {
  location.reload();
};


const display = () => {
  if (timer == true) {
    milisec += 1;
    if (milisec == 100) {
      sec += 1;
      milisec = 0;
    }

    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (min == 60) {
      hr += 1;
      min = 0;
    }
    let getSec = sec;

    let getMin = min;
    let getHr = hr;
    if (sec < 10) {
      getSec = "0" + sec;
    }
    if (min < 10) {
      getMin = "0" + min;
    }
    if (hr < 10) {
      getHr = "0" + hr;
    }
    setTimeout(display, 10);
    document.querySelector(".milisec").innerHTML = milisec;
    document.querySelector(".sec").innerHTML = getSec;
    document.querySelector(".min").innerHTML = getMin;
    document.querySelector(".hr").innerHTML = getHr;
  }
};
