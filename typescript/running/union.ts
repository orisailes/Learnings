type StringNumber = string | number
type Executer = 'math' | 'string'

function combine(n1: StringNumber, n2: StringNumber,runner:Executer) {
    let result
    if (runner === 'math') {
        result = +n1 + +n2
    }
    else {
        result = `${n1} ; ${n2}`
    }
    return result
}

const adding = combine(10, 15,'math')
const stringous = combine('Adam', 'Levinne','string')
const buggous = combine('Hello', 2,'string')

console.log(adding);
console.log(stringous);
console.log(buggous);


