// Fibbonachi ex-
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

export default function fibbonachi(n:number):number {
    let arr = [0, 1, 1];
    let num = 2;
    if (n <= 2) return arr[n]
    while (arr.length !== n) {
        num = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(num);
    }
    return arr[arr.length-1];
}