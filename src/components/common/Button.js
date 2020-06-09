import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity
        style={styles.button}
        onPress = {props.onPress}
        >
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize:16,
        fontWeight: 'bold'
    },
    button: {
      alignItems: "center",
      backgroundColor: "white",
      padding: 10,
      flex: 1,
      wdith: null,
      borderRadius:5,
      borderWidth:1.5,
      borderColor: '#007aff',
      marginLeft:5,
      marginRight:5
    }
}
export { Button };