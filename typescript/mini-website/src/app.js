import Car from './Car.js';
const counterBtn = document.querySelector('.btn-counter');
const counterParagraph = document.querySelector('.para');
const carParagraph = document.querySelector('.car-para');
const makeCarBtn = document.querySelector('.car-btn');
const carNameInput = document.querySelector('.car-name-input');
const carOwnerInput = document.querySelector('.car-owner-input');
const carYearInput = document.querySelector('.car-year-input');
let counter = 0;
const handleClick = () => {
    counter += 1;
    counterParagraph.innerHTML = `<p> Counter: ${counter}</p>`;
};
const generateCar = (name, owner, year, isOnRoad) => {
    return new Car(name, owner, year, isOnRoad);
};
const displayCar = () => {
    const newCar = generateCar(carNameInput.value, carOwnerInput.value, +carYearInput.value, true);
    carParagraph.innerHTML = `
    <p> Name: ${newCar.name} </p>
    <p> Owner: ${newCar.owner}</p>
    <p> Year: ${newCar.year}</p>
    <p> is On Road : ${newCar.isOnRoad}</p>
    <p> car sound : ${newCar.makeNoise()} </p>
    `;
    console.log(newCar);
};
counterBtn.addEventListener('click', handleClick);
makeCarBtn.addEventListener('click', displayCar);
