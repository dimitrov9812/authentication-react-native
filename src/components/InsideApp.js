import React, { Component } from 'react';
import { Button, Header } from './common';
import { Text, View } from 'react-native';
import firebase from 'firebase';

class InsideApp extends Component  {
    onPress = () => {
        firebase.auth()
        .signOut();
    }
    render(){
        return(
            <View>
                <Header headerText={'Applications'} />
                <Button onPress = {this.onPress}>Log Out</Button>
            </View>
        )
    }
}

export default InsideApp;