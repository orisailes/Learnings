const input1 = document.querySelector('#num1')! as HTMLInputElement
const input2 = document.querySelector('#num2')! as HTMLInputElement
const myBtn = document.querySelector('.btn')

myBtn.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
})

function add(num1: number, num2:number) {
    return num1 + num2
}

