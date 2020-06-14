import React, {Component} from 'react';
import {Text, View, TouchableOpacity, LayoutAnimation, Image} from 'react-native';
import { Button } from './common/Button';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card'; 
import  * as actions from '../actions/index';
import { connect } from 'react-redux';
import {UIManager} from 'react-native';

class AlbumItem extends Component { 
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
        if(this.props.title === this.props.selectedLibraryId){
            return (
                <View>
                    <CardSection>
                        <Image 
                            source={{uri:this.props.smallImage}}
                            style={{ marginLeft: 5, width: 40, height: 40 }}
                        />
                        <Text style={styles.titleStyle}>
                            {this.props.artist}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Image 
                            source={{uri:this.props.image}}
                            style={styles.coverImageStyle}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Linking.openURL(this.props.url)}>
                            Buy Now
                        </Button>
                    </CardSection>
                </View>
            );
        }
    }
    render() {
        const selectedId = this.props.selectedLibraryId;
        return(
            <Card>  
                <TouchableOpacity
                 onPress={() => this.props.selectLibrary(this.props.title)}
                >
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.title}
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
    },
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

const mapStateToProps = state => {
    return{
        selectedLibraryId: state.selectLibrary
    }
};

export default connect(mapStateToProps,actions)(AlbumItem);