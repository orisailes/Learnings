import combineReducers from '../reducers'

export enum Actions {
    songSelect = 'SONG_SELECTED'
}

export interface IGlobal {
    action: {
        type: Actions,
        payload?: object
    },
}

//* exporting the state type so children components can read our store
export type State = ReturnType<typeof combineReducers>
