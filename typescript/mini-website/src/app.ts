import Car from './Car.js'

const counterBtn = document.querySelector('.btn-counter')! as HTMLButtonElement
const counterParagraph = document.querySelector('.para')! as HTMLParagraphElement
const carParagraph = document.querySelector('.car-para')! as HTMLParagraphElement
const makeCarBtn = document.querySelector('.car-btn')! as HTMLButtonElement
const carNameInput = document.querySelector('.car-name-input')! as HTMLInputElement
const carOwnerInput = document.querySelector('.car-owner-input')! as HTMLInputElement
const carYearInput = document.querySelector('.car-year-input')! as HTMLInputElement

let counter: number = 0

const handleClick = (): void => {
    counter += 1
    counterParagraph.innerHTML = `<p> Counter: ${counter}</p>`
}

const generateCar = (name: string, owner: string, year: number, isOnRoad: boolean): object => {
    return new Car(name, owner, year, isOnRoad)
}

const displayCar = (): void => {
    const newCar = generateCar(carNameInput.value, carOwnerInput.value, +carYearInput.value, true)
    carParagraph.innerHTML = `
    <p> Name: ${newCar.name} </p>
    <p> Owner: ${newCar.owner}</p>
    <p> Year: ${newCar.year}</p>
    <p> is On Road : ${newCar.isOnRoad}</p>
    <p> car sound : ${newCar.makeNoise()} </p>
    `
    console.log(newCar);

}


counterBtn.addEventListener('click', handleClick)
makeCarBtn.addEventListener('click', displayCar)