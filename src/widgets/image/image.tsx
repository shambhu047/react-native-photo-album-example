import * as React from 'react';
import { ActivityIndicator, Image as RNImage, View } from 'react-native';

import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import { Url } from '../../types';

interface ImageProps {
    uri: Url;
    size: { height: number; width: number };
}

@observer
export class Image extends React.Component<ImageProps, any> {

    @observable private loading: boolean;

    public constructor(props) {
        super(props);

        this.loading = false;
    }

    public render() {
        const { size, uri } = this.props;

        return (
            <View style={{
                ...size,
                alignItems: 'center',
                backgroundColor: '#fff',
                elevation: 3,
                justifyContent: 'center',
                marginBottom: 40,
            }}>
                <RNImage source={{ uri }}
                    style={{ ...size, position: 'absolute', top: 0, left: 0 }}
                    onLoadStart={action(() => this.loading = true)}
                    onLoadEnd={action(() => { this.loading = false; })} />
                {this.loading && <ActivityIndicator />}
            </View>
        );
    }
}
