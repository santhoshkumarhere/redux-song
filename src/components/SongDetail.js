import React from 'react';
import { connect } from 'react-redux';

// const SongDetail = (props) => {
//     console.log(props);
//     return <div>Song Detail</div>;
// }

const SongDetail = ({ song }) => {
     if(!song) {
         return <div>Select a song</div>;
     }
    return (
    <div>
        <h3> Details for: </h3>
        <p>
            Title: {song.title}
            <br/>
            Duration: {song.duration}
         </p>
    </div>);
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }; // 'song 'will be available as props
}

export default connect(mapStateToProps)(SongDetail);