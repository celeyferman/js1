function limitFunc(Fn, lim) {
    let count = 0;
    return function(arg) {
      if (count < lim) {
        Fn();
        count += 1;
      }
    }
}

function sayHelloXTimes() {
    console.log("Hello!");
}

let limited = limitFunc(sayHelloXTimes, 3);
limited();
limited();
limited();
limited();  