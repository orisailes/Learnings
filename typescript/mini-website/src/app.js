import Car from './Car';
var counterBtn = document.querySelector('.btn-counter');
var counterParagraph = document.querySelector('.para');
var carParagraph = document.querySelector('.car-para');
var makeCarBtn = document.querySelector('.car-btn');
var carNameInput = document.querySelector('car-name-input');
var carOwnerInput = document.querySelector('car-owner-input');
var carYearInput = document.querySelector('car-year-input');
var counter = 0;
var handleClick = function () {
    counter += 1;
    counterParagraph.innerHTML = "<p> Counter: " + counter + "</p>";
};
var generateCar = function (name, owner, year, isOnRoad) {
    return new Car(name, owner, year, isOnRoad);
};
var displayCar = function () {
    var newCar = generateCar(carNameInput.value, carOwnerInput.value, +carYearInput.value, true);
    // carParagraph.innerHTML = `
    // <p> Name: </p>
    // <p> Owner: </p>
    // <p> Year: </p>
    // <p> is On Road : </p>
    // <p> car sound : ${newCar.makeNoise} </p>
    // `
    console.log(newCar);
};
counterBtn.addEventListener('click', handleClick);
makeCarBtn.addEventListener('click', displayCar);
