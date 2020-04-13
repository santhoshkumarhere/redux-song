
//Action creator
export const selectSong = song => { //named export
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};