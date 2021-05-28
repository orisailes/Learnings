import add from '../functions/add'

test('first test - add 2 numbers ', () => {
    const funcResult = add(1,12)
    const result = 13
    expect(funcResult)
    .toBe(result)
})
