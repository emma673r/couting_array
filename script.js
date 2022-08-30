`use strict`;

// all const
const maxLength = 9;

// all variables
let number = 0;
let result = [];

window.addEventListener("DOMContentLoaded", start);

// start
function start() {
  console.log("start");
  //   call loop function
  loop();
}

// loop funtion
function loop() {
  console.log("loop");
  number++;
  //   if number is under or equal maxLength (9)
  if (number <= maxLength) {
    // result add let number at start of array and returns new array (use unshift())
    result.unshift(number);

    console.log(result);
    console.log("number is :", number);

    // set timeout for 1 sec (=1000 ms) to call loop again
    setTimeout(loop, 1000);
  } else {
    // else = number is higher to 9 -> pop last number of array
    result.pop(number);
    // then add new number in start of array (unshift())
    result.unshift(number);

    console.log(result);
    console.log("number is :", number);

    // set timeout 1s to call loop again
    setTimeout(loop, 1000);
  }
}
