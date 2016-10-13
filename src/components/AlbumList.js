/**
 * Created by Parthchokshi on 10/8/2016.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    state = {albums: []};

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums
            .map(album =>
                <AlbumDetail album={album}/>
            );
    }

    render(){
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;