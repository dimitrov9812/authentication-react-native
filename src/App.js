import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common/index';
import LoginForm from './components/LoginForm';
import InsideApp from './components/InsideApp';

class App extends Component {
    state = {
        loggedIn: null
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDrQVbQN3CQwi4nI7Ysxqd2fEGCDNmz3C0',
            authDomain: 'authentication-react-nat-1570d.firebaseapp.com',
            databaseURL: 'https://authentication-react-nat-1570d.firebaseio.com',
            projectId: 'authentication-react-nat-1570d',
            storageBucket: 'authentication-react-nat-1570d.appspot.com',
            messagingSenderId: '523347707979',
            appId: '1:523347707979:web:1ec80897fa389e3b03e5ce',
            measurementId: 'G-1ZNE6DRLQ9'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    loggedIn: true
                });
            }
            else{
                this.setState({
                    loggedIn: false
                })
            }
        });
    }
    renderContent() {
        if(this.state.loggedIn){
            return (
                <InsideApp 
                />
            )
        }
        else if(this.state.loggedIn === null){
            return (
                <Spinner size={"large"}/>
            )
        }
        else{
            return(
                <LoginForm />
            )
        }
    }
    render(){
        return(
            <View>
                <Header headerText={'Log in'}/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;