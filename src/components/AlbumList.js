import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import AlbumItem from '../components/AlbumItem';

class AlbumList extends React.Component {
    onPress() {
        console.log(props.data.title);
    }
    renderItem(data) {
        console.log(data.item.title);
        return <AlbumItem title = {data.item.title} artist = {data.item.artist} url={data.item.url} image={data.item.image} smallImage ={data.item.thumbnail_image} />
    }
    render(){
        return (
            <FlatList 
            data={this.props.data}
            renderItem ={this.renderItem}
            keyExtractor = {(album) => album.title}
            />
        );
    };
};
const mapStateToProps = state => {
    return { data: state.albums}
};

export default connect(mapStateToProps)(AlbumList);

