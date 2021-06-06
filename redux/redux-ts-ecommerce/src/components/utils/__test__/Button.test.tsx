import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'

//fire event

describe('test button component', () => {

    let container:HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<Button text="my button" />, container)
    })

    afterEach(()=>{
        document.body.removeChild(container)
        container.remove()
    })

    it('render "Button" without crashing', () => {
        const btn = container.querySelectorAll('button')
        expect(btn).toHaveLength(1) // test if only one button render
        const myBtn = btn[0] // select the button component
        expect(myBtn.className).toBe('btn') // check class name
        expect(myBtn.innerHTML).toBe('my button') // check text
        
    })
})