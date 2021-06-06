import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Products from '../Products'
import { render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('testing products page', () => {

    afterEach(cleanup)

    test('should show loading on mount', async () => {
        const { getByTestId } = render( // render the products component with provider - MUST
            <Provider store={store}>
                <Products />
            </Provider>
        )
        const loadingElement = getByTestId('loading') 
        expect(loadingElement).toHaveTextContent('Loading...')

    })

})
