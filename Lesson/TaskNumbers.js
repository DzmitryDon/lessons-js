function getEvenNumders(d_min, d_max) {
  for (let i = d_min; i <= d_max; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function getConsoleByInterval_1() {
  setTimeout(function runNumbers() {
    getEvenNumders(5, 9);
    setTimeout(runNumbers, 5000); //10000
  }, 5000);
}

console.log(3);
//getConsoleByInterval_1();
