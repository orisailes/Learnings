import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../interfaces'


const SongList: React.FC = () => {

    const songsArray = useSelector((state:State) => state.songs)
    return (
        <div>
            Song list
        </div>
    )
}

export default SongList






//! use connect method
// const mapStateToProps = (state:object) => {
//     console.log(state);
//     return state
// }

// export default connect(mapStateToProps)(SongList)
