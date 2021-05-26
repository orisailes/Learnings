let userName: string
let userInput: unknown
userInput=false
// userInput = 123
if (typeof userInput === 'string') {
    userName = userInput
}else{
    generateError('error occurs',400)
}

function generateError(message:string,code:number):never {
    throw {message,code}
}

