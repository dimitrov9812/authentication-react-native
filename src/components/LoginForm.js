import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };
    onPress = () => {
        console.log(this.state);
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Text>Email</Text>
                    <TextInput 
                    value = {this.state.email}
                    style= {styles.inputStyle}
                    onChangeText = { email => this.setState({ email: email })} // we could also use just -> text
                    ></TextInput>
                </CardSection>
                <CardSection>
                    <Text>Password</Text>
                    <TextInput 
                    value = {this.state.password}
                    style= {styles.inputStyle}
                    onChangeText = { password => this.setState({ password: password })} // we could also use just -> text
                    />
                </CardSection>
                <CardSection>
                    <Button onPress = {this.onPress}>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    inputStyle: {
        borderWidth: 1,
        flex:1,
        width: null,
        borderColor: 'lightgrey'
    }
}

export default LoginForm;