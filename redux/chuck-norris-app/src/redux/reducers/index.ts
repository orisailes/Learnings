import { ActionTypes, ADD_JOKE, REMOVE_JOKE, Store } from '../../interfaces'
import { combineReducers } from 'redux'


// this joke reducer take a state and an action

const jokeReducer = (state: Store['joke'] = '', action: ActionTypes) => {


    switch (action.type) {
        case ADD_JOKE:
            return action.payload
        case REMOVE_JOKE:
            return action.payload
        default:
            return state
    }

}

export default combineReducers({ joke: jokeReducer })

