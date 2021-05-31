import { ActionTypes, ADD_JOKE, REMOVE_JOKE, Store } from '../../interfaces'
import { combineReducers } from 'redux'

//* Reducers rules:
// this joke reducer take a state and an action
// the returned value cant be 'undefiend'
// CAN'T make async calls. return is 'pure' value
// must not mutate the state argument --> this rule is reference mainly to begginers. why? because if you return the same value, or the same pointer, the state cant see the different between the 'new' state and the old state, therefore render wont be run

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

