/**
 * Created by Parthchokshi on 10/8/2016.
 */
import React from 'react';
import {Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ddd',
        height:60,
        shadowColor:'#000',
        shadowOffset:{width: 0 , height:2},
        shadowOpacity:0.8
    },
    textStyle: {
        fontSize: 25,
    }
};

export default Header;