import * as React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { inject, observer } from 'mobx-react';
import { NavigationScreenOptions } from 'react-navigation';

import { AppStore } from '../../stores/app';
import { Image } from '../../widgets/image';

interface IPhotoScreenProps {
    app?: AppStore;
}

@inject('app') @observer
export class PhotoScreen extends React.Component<IPhotoScreenProps, any> {
    public static navigationOptions: NavigationScreenOptions = {
        title: 'Photos',
    };

    public render() {
        const { loading } = this.props.app;

        return (
            <View style={{
                backgroundColor: '#fff',
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'column' }}>
                    {loading ? this.renderLoadingIndicator() : this.renderPhotos()}
                </ScrollView>
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

    private renderPhotos(): Array<React.ReactElement<any>> {
        const photos = this.props.app.photos();

        return photos.map((p) => (
            <Image uri={p.url}
                size={{ height: 300, width: 300 }}
                key={p.id} />
        ));
    }
}
