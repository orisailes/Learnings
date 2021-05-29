import fibbonachi from '../functions/fibonachi'

test('fibo test', () => {
    const funcResult = fibbonachi(4)
    const result = 2
    expect(funcResult)
        .toBe(result)
})
test('fibo test', () => {
    const funcResult = fibbonachi(1)
    const result = 1
    expect(funcResult)
        .toBe(result)
})
