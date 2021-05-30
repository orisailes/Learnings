import { Actions, IGlobal } from '../interfaces'
import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'All Star', duration: '2:55' },
        { title: 'I Want It That Way', duration: '3:25' },
        { title: 'Macarena', duration: '1:10' },
    ]
}

const selectedSongReducer = (selectedSong = null, action: IGlobal['action']) => {
    if (action.type === Actions.songSelect) {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})

