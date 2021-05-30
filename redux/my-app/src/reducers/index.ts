import IGlobal from '../interfaces'
import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'All Star', duration: '2:55' },
        { title: 'I Want It That Way', duration: '3:25' },
        { title: 'Macarena', duration: '1:10' },
    ]
}

const selectedfSongReducer = (selectedSong = null, action: IGlobal['action']) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songReducer,
    selectedfSongReducer
})