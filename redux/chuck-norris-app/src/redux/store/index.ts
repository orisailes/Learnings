import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

// is the function logic should be in the tsx files ,in the actions creators, action or in the reducer?
// is all data should be on redux store or some of it should be on react api such use state or use context
// is any change on redux store cause react render just as use state?