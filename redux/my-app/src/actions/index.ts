import { Actions,IGlobal } from '../interfaces'


// Action creator
export const selectSong = (song:object):IGlobal['action'] => {
    // return an action
    return{
        type:Actions.songSelect,
        payload:song
    }
}
