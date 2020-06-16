import React from 'react';
import { Button } from './common/Button';
import { Text, View } from 'react-native'; 
import AlbumList from './AlbumList';
import LibraryList from './common/LibraryList';

class SubMenu extends React.Component{
    state = {
        render: ''
    }
    renderAlbums = () => {
        this.setState({
            render: 'albums'
        });
        console.log(this.state.render);
    }
    renderLibrary = () => {
        this.setState({
            render: 'libraries'
        });
        console.log(this.state.render);
    }
    renderData(){
        const dataToRender = this.state.render;
        console.log("Data"+dataToRender);
        if(dataToRender === "albums"){
            return(
            <AlbumList />
            )
        }
        else{
            return(
            <LibraryList />
            )
        }
    }
    render(){
        return(
            <View>
                <Button onPress={this.renderAlbums}>Albums</Button>
                <Button onPress={this.renderLibrary}>Libraries</Button>
                <View>
                    {this.renderData()}
                </View>
            </View>
        );
    }
}


export default SubMenu;
