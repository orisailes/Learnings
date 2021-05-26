function sum(n1, n2) {
    return n1 + n2;
}
function printer(num) {
    console.log("Answer: " + num);
}
var sumHandler;
sumHandler = sum;
var printerHandler;
printerHandler = printer;
printerHandler(sumHandler(43242, 156123));
