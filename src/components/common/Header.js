import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style = {viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>      
    </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color:'blue'
    },
    viewStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        shadowColor: 'green',
        shadowOffset: {width:0,height:80},
        shadowOpacity: 1,
        elevation: 2,
        possition: 'relative'
    }
};

export { Header };
