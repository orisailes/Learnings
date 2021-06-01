import { ActionTypes, ADD_JOKE, REMOVE_JOKE } from '../../interfaces'
import axios from 'axios';
import { Dispatch } from 'redux';
import { Store } from '../../interfaces'

//* get joke as params or fetch joke here?

//! the action funtion cant be async! only the rerturened can be async , these will lead to error

export const addJoke = () => async (dispatch: Dispatch<ActionTypes>) => {
    let data
    let joke: Store['joke']
    try {
        data = await axios.get("https://api.chucknorris.io/jokes/random")
        joke = data.data.value
        data && dispatch({ type: ADD_JOKE, payload: joke })
    } catch (error) {
        console.log(error);
    }
}

export const removeJoke = (): ActionTypes => {

    return {
        type: REMOVE_JOKE,
        payload: ''
    }

}
