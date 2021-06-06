import '@testing-library/jest-dom/extend-expect'
import Button from '../Button'
import { fireEvent } from '@testing-library/dom';
import { cleanup, render } from '@testing-library/react'


describe('test button component', () => {

    afterEach(cleanup)
    let counter = 0
    const functionToTest = () => {
        counter += 1
    }


    it('render "Button" without crashing', () => {
        const { getByTestId } = render(<Button text="my button"></Button>) // using "render"
        const btn = getByTestId('button')
        expect(btn).toBeInTheDocument() // test if only one button render
    })

    it('test class name and inner html using queryselector', () => {
        const { getByTestId } = render(<Button text="my button"></Button>) // using "render"
        const btn = getByTestId('button')
        expect(btn).toHaveClass('btn') // check class name
        expect(btn).toHaveTextContent('my button') // check text

    })

    it('test "Button" component with use data-testid attribute', () => {
        const { getByTestId } = render(<Button text="my button"></Button>) // using "render"
        const btn = getByTestId('button')
        expect(btn).toBeInTheDocument()
    })

    it('test button clicked', () => {
        const { getByTestId } = render(<Button text="my 2nd button" onClick={functionToTest}></Button>) // using "render"
        const btn = getByTestId('button');
        fireEvent.click(btn)
        expect(counter).toBe(1)
        fireEvent.click(btn)
        expect(counter).toBe(2)
    })
})