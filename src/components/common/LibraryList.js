import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import ListItem from '../ListItem'
import { CardSection } from './CardSection';

class LibraryList extends Component {
    renderItem(data) {
        return <ListItem id = {data.item.id} title = {data.item.title} description = {data.item.description} />
    }
    render() {
        return(
            // <View>
            //     {this.props.libraries.map((x) => (
            //         <View>
            //             <Text>{x.title}</Text>
            //             <Text>{x.description}</Text>
            //         </View>
            //     ))}
            // </View>
            <FlatList 
            data={this.props.libraries}
            renderItem ={this.renderItem}
            keyExtractor = {(library) => library.id}
            />
        )
    }
};

const mapStateToProps = state => {
    return { libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);