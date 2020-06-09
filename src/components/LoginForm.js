import React, { Component } from 'react';
import { Input } from '../components/common/Input';
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
                <CardSection>
                    <Button onPress = {this.onPress}>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}


export default LoginForm;