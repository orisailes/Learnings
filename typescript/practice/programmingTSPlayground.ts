let a: object = {
    b: 'wrong'
}

// console.log(a.b); // error! b does not exist in object 'a'

let c = {
    d: 'hello'
}

console.log(c.d);


let e = {
    f: 10,
}

// e.g = 12 // wrong

// if you want to add future key to object you have to use this syntax: 

let g: {
    [key: string]: string
} = {
    'h': 'cool'
}

console.log(g.h);


let tuple: [number, string] = [12, 'sd'] // explicitly declare length

let tupleMinimum: [number, ...number[]] = [1, 2, 3] // minimum 1 number MUST 

let readOnly: readonly (boolean | string)[] = [true, false, 'hello'] // cant modifiy it
// readOnly.push(4) // cant do
readOnly.slice(2) // can do


// 1. For each of these values, what type will TypeScript infer?
// a. let a = 1042 // number
// b. let b = 'apples and oranges' // string
// c. const c = 'pineapples' // pineapples
// d. let d = [true, true, false] // boolean[]
// e. let e = {type: 'ficus'} // {type:'ficus'} !! -> {type:string}
// f. let f = [1, false] // (boolean | string)[]
// g. const g = [3] // number[]
// h. let h = null // null !! -> any


// 2. Why does each of these throw the error it does?
// a.
// let i: 3 = 3
// i = 4 // Error TS2322: Type '4' is not assignable to type '3'.
//* explicitly type 3 and try to assign 4
// b.
// let j = [1, 2, 3]
// j.push(4)
// j.push('5') // Error TS2345: Argument of type '"5"' is not
// assignable to parameter of type 'number'.
//* cant push string to number array
// c.
// let k: never = 4 // Error TSTS2322: Type '4' is not assignable
// to type 'never'.
//* never is return funtion type
// d.
// let l: unknown = 4
// let m = l * 2 // Error TS2571: Object is of type 'unknown'.
//* unknown is not a number

//page 60