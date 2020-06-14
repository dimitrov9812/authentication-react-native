import React from 'react';
import AlbumList from './AlbumList';
import LibraryList from '../components/common/LibraryList';
import Home from '../components/Home';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native'; 
const SubMenu = () => {
        return(
            // <Router>
            //     <Scene key = "root">
            //         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            //         <Scene key = "albums" component = {AlbumList} title = "Albums" initial = {true} />
            //         <Scene key = "libraries" component = {LibraryList} title = "Libraries" />
            //     </Scene>
            // </Router>
            <Text>Hello</Text>
        );
}


export default SubMenu;
