import IGlobal from '../interfaces'
// Action creator
export const selectSong = (song:object):IGlobal['action'] => {
    // return an action
    return{
        type:'SONG_SELECTED',
        payload:song
    }
}
