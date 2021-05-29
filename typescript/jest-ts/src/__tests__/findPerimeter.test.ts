import findPerimeter from '../functions/findPerimeter'

test('Find tracangle peremiter', () => {
    const funcResult = findPerimeter(5,2)
    const result = 14
    expect(funcResult)
    .toBe(result)    
})

test('Find tracangle peremiter', () => {
    const funcResult = findPerimeter(null,2)
    const result = Error
    expect(funcResult)
    .toBe(result)    
})
