/**
 * Created by Parthchokshi on 10/8/2016.
 */

import React from 'react';
import {View, Text} from 'react-native';


const AlbumDetail = (props) => {
    let album = props.album;
    return (
        <View>
            <Text key={album.title}>{album.title}</Text>
        </View>
    );

};


export default AlbumDetail;