function add(n1, n2, toPrint, pharse) {
    var result = n1 + n2;
    if (toPrint) {
        console.log("here");
        console.log(pharse + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var defienPrint = true;
var hitLine = "My super answer is: ";
add(number1, number2, defienPrint, hitLine);
