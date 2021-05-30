import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={createStore(reducers,composeWithDevTools())}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

