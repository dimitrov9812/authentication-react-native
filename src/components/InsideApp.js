import React, { Component } from 'react';
import { Input } from '../components/common/Input';
import { Button, Card, CardSection, Spinner } from './common';
import { Text,View } from 'react-native';
import firebase from 'firebase';

class InsideApp extends Component  {
    onPress = () => {
        firebase.auth()
        .signOut();
    }
    render(){
        return(
            <View>
                <Button onPress = {this.onPress}>Log Out</Button>
            </View>
        )
    }
}

export default InsideApp;