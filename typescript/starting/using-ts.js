var input1 = document.querySelector('#num1');
var input2 = document.querySelector('#num2');
var myBtn = document.querySelector('.btn');
myBtn.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});

function add(num1, num2) {
    return num1 + num2;
}
