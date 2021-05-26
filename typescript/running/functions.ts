function sum(n1:number,n2:number):number{
    return n1+n2
}

function printer(num:number): void {
    console.log("Answer: " + num);
}

let sumHandler:(a:number,b:number)=>number
sumHandler = sum

let printerHandler: (a:number) => void 
printerHandler = printer

printerHandler(sumHandler(43242,156123))