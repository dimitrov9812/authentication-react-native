import React from 'react';
import { TextInput, Text, View} from 'react-native';

const Input = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput
            placeholder= {props.placeholder}
            autoCorrect={false}
            secureTextEntry = {props.secureTextEntry}
            value = {props.value}
            onChangeText = {props.onChangeText}
            style={styles.inputStyle}
            />
        </View>
    )
}

const styles = {
    inputStyle: {
        height: 40,
        color : "black",
    },
    text:{
        paddingRight:5,
        paddingTop:10,
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
        allignItems: 'center',
        flex: 1,
        paddingLeft: 5,
    }
}

export { Input }