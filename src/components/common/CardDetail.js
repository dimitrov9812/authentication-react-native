import React from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CardDetail = (props) => {
    const { headingText, subHeadingText, flexColumn, coverImageStyle } = styles;
    return(
    <Card> 
       <View>
        <Text>{props.title}</Text>
        <Text>{props.artist}</Text>
       </View>
    </Card>
    );
};

const styles = {
    flexColumn: {
        flexDirection: 'column',
        marginLeft: 5,
        justifyContent: 'space-around'
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subHeadingText: {
        fontSize: 15,
        color: 'darkgrey'
    },
    coverImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}; 

export default CardDetail;