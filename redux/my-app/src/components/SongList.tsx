import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSong } from '../actions'
import { State } from '../interfaces'


const SongList: React.FC = () => {

    const songs = useSelector((state: State) => state.songs)
    const selectedSong = useSelector((state: State) => state.selectedSong)
    const dispatch = useDispatch()

    const chooseSong = (song: object) => {
        console.log(songs);
        dispatch(selectSong(song))
    }

    return (
        <>
            <div className="song-container">
                {songs.map((song) => {
                    return (
                        <div className="song-item">
                            <div className="song-content">
                                <span>{song.title}</span>
                            </div>
                            <div className="song-btn" key={song.title}>
                                <button onClick={() => chooseSong(song)}>Select</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>{selectedSong ?  JSON.stringify(selectedSong)  : "No selected song yet"}</p>
            </div>
        </>
    )
}

export default SongList



//! use connect method
// const mapStateToProps = (state:object) => {
//     console.log(state);
//     return state
// }

// export default connect(mapStateToProps)(SongList)
