// actions types
export const ADD_JOKE = 'ADD_JOKE'
export const REMOVE_JOKE = 'REMOVE_JOKE'

export type ActionTypes = { type: typeof ADD_JOKE, payload: string } | { type: typeof REMOVE_JOKE, payload: string }


export interface Store {
    joke: string
}

