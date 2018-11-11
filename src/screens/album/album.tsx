import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationScreenOptions } from 'react-navigation';

import { AppStore } from '../../stores/app';
import { Card } from '../../widgets/card';
import { AlbumId } from '../../types';

interface IAlbumScreenProps {
    app?: AppStore;
    navigation?: any;
}

@inject('app') @observer
export class AlbumScreen extends React.Component<IAlbumScreenProps, any> {
    public static navigationOptions: NavigationScreenOptions = {
        title: 'Albums',
    };

    public render() {
        const { loading } = this.props.app;
        return (
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                {loading ? this.renderLoadingIndicator() : this.renderAlbum()}
            </View>
        );
    }

    private renderLoadingIndicator(): React.ReactElement<any> {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }

    private renderAlbum(): Array<React.ReactElement<any>> {
        const users = this.props.app.albums();

        return users.map((u) => (
            <Card.Album title={u.title}
                albumId={u.id}
                onSelect={this.onAlbumSelect}
                key={u.id} />
        ));
    }

    @action.bound
    private onAlbumSelect(albumId: AlbumId) {
        this.props.app.selectAlbum(albumId);
        this.props.navigation.navigate('Photo');
    }
}
