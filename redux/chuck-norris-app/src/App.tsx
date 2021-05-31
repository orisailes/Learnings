import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { Store } from './interfaces'
import { addJoke, removeJoke } from './redux/actions'


const App: React.FC = () => {

  const joke = useSelector((state: Store) => state.joke)
  const dispatch = useDispatch()

  const getJoke = () => {
    const joke = 'test'
    //"https://api.chucknorris.io/jokes/random"
    dispatch(addJoke(joke))
  }

  const deleteJoke = () => {
    dispatch(removeJoke())
  }

  return (
    <div className="App">
      <button onClick={getJoke}>GET JOKE</button>
      <h2>{joke}</h2>
      {joke.length ? <button onClick={deleteJoke}>REMOVE JOKE</button> : ''}
    </div>
  );
}

export default App;
