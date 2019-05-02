var countdownGenerator = function (x) {
  /* your code here */
  var minus = -1;

  return function() {

    minus += 1;

    var secs = x - minus;
    var str = "T-minus " + secs;

    if (secs === 0) {
      str = "Blast Off!"
    } else if (secs < 0) {
      str = "Rockets already gone, bub!"
    }

    return console.log(str);

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
