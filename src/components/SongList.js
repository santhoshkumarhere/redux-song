import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    //semantic UI classes are used in the jsx
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}> 
                    <div className = "right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () =>this.props.selectSong(song) }>Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render () {
        return <div className="ui divided list">{this.renderList()}</div>
    }    
}

const mapStateToProps = (state) => {
    return {songs: state.songs}; // it will be available as a 'songs' props inside SongList component
}

export default connect(
    mapStateToProps, 
    { selectSong } //action creator function
    )(SongList); // it will get latest state changs to this component also wire with actions