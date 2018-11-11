import * as React from 'react';
import { View, ActivityIndicator, Text, Alert, ScrollView } from 'react-native';

import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationScreenOptions } from 'react-navigation';

import { AppStore } from '../../stores/app';
import { Card } from '../../widgets/card';
import { UserId } from '../../types';

interface IUserScreenProps {
    app?: AppStore;
    navigation?: any;
}

@inject('app') @observer
export class UserScreen extends React.Component<IUserScreenProps, any> {
    public static navigationOptions: NavigationScreenOptions = {
        title: 'Users',
        headerStyle: {
            display: 'none',
        },
    };

    public componentWillMount() {
        this.props.app.load();
    }

    public render() {
        const { loading } = this.props.app;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <Text style={{
                        height: 60,
                        textAlign: 'center',
                        lineHeight: 60,
                        textAlignVertical: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>{'Users'}</Text>
                    {loading ? this.renderLoadingIndicator() : this.renderUsers()}
                </ScrollView>
            </View>
        );
    }

    private renderLoadingIndicator(): React.ReactElement<any> {
        return (
            <View style={{ paddingVertical: 100 }}>
                <ActivityIndicator size={40} />
            </View>
        );
    }

    private renderUsers(): Array<React.ReactElement<any>> {
        const users = this.props.app.users();

        return users.map((u) => (
            <Card.User name={u.name}
                username={u.username}
                email={u.email}
                userId={u.id}
                onSelect={this.createOnSelectHandler}
                key={u.id} />
        ));
    }

    @action.bound
    private createOnSelectHandler(userId: UserId) {
        this.props.app.selectUser(userId);
        this.props.navigation.navigate('Album');
    }
}
