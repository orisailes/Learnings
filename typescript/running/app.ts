
function add(n1:number,n2:number,toPrint:boolean,pharse:string){
    const result = n1+n2
    if(toPrint){
        console.log(pharse + result);
    }else{
        return result
    }
}

const number1= 5
const number2 = 2.8
const defienPrint = true
const hitLine = "My super answer is: "
add(number1,number2,defienPrint,hitLine)

