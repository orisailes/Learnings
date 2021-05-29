// Ex 8 - Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// f ➞ 26
// indPerimeter(6, 7)
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22

export default function findPerimeter(n1: number, n2: number) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') return Error
    return (n1 * 2 + n2 * 2)
}
