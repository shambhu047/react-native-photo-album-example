import * as React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { AlbumId } from '../../../types';
import { AlbumCardStyle as Styles } from './album.styles';

interface IAlbumCardProps {
    title: string;
    albumId: AlbumId;
    description?: string;
    onSelect: (albumId: AlbumId) => void;
}

export class AlbumCard extends React.PureComponent<IAlbumCardProps, any> {
    public render() {
        const { title, albumId, description } = this.props;

        const coverPlaceholderStyle: ViewStyle = {
            backgroundColor: Colors[albumId % Colors.length],
        };

        return (
            <TouchableOpacity style={Styles.album} onPress={this.onSelectHandlerFactory(albumId)}>
                <View style={[Styles.coverPlaceholder, coverPlaceholderStyle]}></View>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    private onSelectHandlerFactory(albumId: AlbumId): (ev: GestureResponderEvent) => void {
        return (ev) => this.props.onSelect(albumId);
    }
}

const Colors = [
    'red',
    'green',
    'yellow',
    'purple',
    'pink',
    'orange',
    'blue',
    'brown',
    'teal',
    'cyan',
];
