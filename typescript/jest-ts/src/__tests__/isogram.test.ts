import isogram from '../functions/isogram'

test('isogram test', () => {
    const funcResult = isogram("Dermatoglyphics")
    const result = true
    expect(funcResult)
        .toBe(result)
})

test('isogram test', () => {
    const funcResult = isogram(4231)
    const result = false
    expect(funcResult)
        .toBe(result)
})

test('isogram test', () => {
    const funcResult = isogram(true)
    const result = false
    expect(funcResult)
        .toBe(result)
})

test('isogram test', () => {
    const funcResult = isogram('moOse')
    const result = false // -- ignore letter case
    expect(funcResult)
        .toBe(result)
})
