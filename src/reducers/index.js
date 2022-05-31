import { combineReducers } from "redux";

const songsReducer = () => {
    return(
        [
            { title : 'perfect', duration : '3:05'},
            {title : 'You belong with me', duration : '3:50'},
            {title : 'Black space', duration : '3:04'},
            {title: '24K', duration : '4:50'}
        ]
    )
}

const selectedSongReducer =(selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
});