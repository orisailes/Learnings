import React, { Dispatch } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { ActionTypes, Store } from './interfaces'
import { addJoke, removeJoke } from './redux/actions'
// import axios from 'axios';

const App: React.FC = () => {

  const joke = useSelector((state: Store) => state.joke)
  const dispatch = useDispatch() // type?

  const getJoke = ():void => {
  //   let data
  //   let joke
  //   try {
  //     data = await axios.get("https://api.chucknorris.io/jokes/random")
  //     joke = data.data.value
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   dispatch(addJoke(joke))
  // }
    dispatch(addJoke()) //! using dispatch to make api call with thunk middleware
  }
  const deleteJoke = ():void => {
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
