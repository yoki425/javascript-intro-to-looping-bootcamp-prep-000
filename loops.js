function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--); //" count down (using console.log) from the passed in number": this part says that we need to log in the starting number meaning we should decrement after logging in the initial values before each time the while block is initiated!//
  }
 return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (maybeTrue() || array.length === 0);
  return array;
}
