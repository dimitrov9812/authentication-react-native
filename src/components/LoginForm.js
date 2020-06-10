import React, { Component } from 'react';
import { Input } from '../components/common/Input';
import { Button, Card, CardSection, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        message: '',
        loading: false
    };
    onPress = () => {
        const { email, password, error } = this.state;
        this.setState({
            error: '',
            message: '',
            loading: true
        })

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() =>{
            this.onLoginSuccess();
        })
        .catch(() => {
             firebase.auth().createUserWithEmailAndPassword(email,password)
             .then(() =>{
                this.onRegisterSuccess();
            })
             .catch(() => {
                this.onLoginFail();
             });
        });
        
        console.log("Logged in:");
    }
    onLoginSuccess() {
        console.log("Success");

        this.setState({
            email: '',
            password: '',
            error: '',
            message: 'Registered successfully',
            loading:false
        })
    }
    onLoginSuccess() {
        console.log("Success");

        this.setState({
            email: '',
            password: '',
            error: '',
            message: 'Logged in successfully',
            loading:false
        })
    }
    onLoginFail() {
        this.setState({
            loading:false,
            error: 'Authentication failed'
        })
    }
    renderButton() {
        if(this.state.loading){
            return (
            <Spinner
            size = {"small"}
            />
            );
        }
        else{
            return(
                <Button onPress = {this.onPress}>Log in</Button>
            );
        }
    };
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    placeholder = {"user122@gmail.com"}
                    label = {"Email"}
                    value = {this.state.email}
                    onChangeText = { email => this.setState({ email: email })} // we could also use just -> text
                    />
                </CardSection>
                <CardSection>
                    <Input
                    placeholder = {"minimum 8 characters"}
                    label = {"Password"}
                    secureTextEntry={true}
                    value = {this.state.password}
                    onChangeText = { password => this.setState({ password: password })} // we could also use just -> text
                    />
                </CardSection>
                <Text style = {styles.error}>
                    {
                        <Text style = {styles.error}>{this.state.error}</Text>
                         || 
                        <Text style = {styles.messageText}>{this.state.message}</Text>}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    error: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
    messageText: {
        fontSize: 20,
        color: 'green',
        alignSelf: 'center'
    }
}


export default LoginForm;