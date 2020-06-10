import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

class LibraryList extends Component {
    render() {
        return(
            <View>
                {this.props.data.map((x) => (
                    <View>
                        <Text>{x.title}</Text>
                        <Text>{x.description}</Text>
                    </View>
                ))}
            </View>
        )
    }
};

const mapStateToProps = state => {
    return { data: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);