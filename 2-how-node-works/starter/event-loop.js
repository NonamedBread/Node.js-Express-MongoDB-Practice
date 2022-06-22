const fs = require(`fs`);

setTimeout(() => console.log("Timer 1 finishe"), 0);
setImmediate(() => console.log("Immdiate 1 finished"));
