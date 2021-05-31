import { ActionTypes, ADD_JOKE, REMOVE_JOKE } from '../../interfaces'


export const addJoke = (joke:string): ActionTypes => {

    return {
        type: ADD_JOKE,
        payload: 'joke'
    }

}

export const removeJoke = (): ActionTypes => {

    return {
        type: REMOVE_JOKE,
        payload: ''
    }

}
