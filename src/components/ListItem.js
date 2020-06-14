import React, {Component} from 'react';
import {Text, View, TouchableOpacity, LayoutAnimation} from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card'; 
import  * as actions from '../actions/index';
import { connect } from 'react-redux';
import {UIManager} from 'react-native';

class ListItem extends Component {
    
constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
    componentWillUpdate() {
        LayoutAnimation.spring();
    };
    renderDescription () {
        if(this.props.id === this.props.selectedLibraryId){
            return (
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {this.props.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const {id, title, description} = this.props;
        const selectedId = this.props.selectedLibraryId;

        return(
            <Card>  
                <TouchableOpacity
                 onPress={() => this.props.selectLibrary(id)}
                >
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </TouchableOpacity>
                {this.renderDescription()}
            </Card>
        )
    }   
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = state => {
    return{
        selectedLibraryId: state.selectLibrary
    }
};

export default connect(mapStateToProps,actions)(ListItem);