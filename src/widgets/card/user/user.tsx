import * as React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import { UserId } from '../../../types';
import { UserCardStyle as Styles } from './user.style';

interface IUserCardProps {
    name: string;
    username: string;
    email: string;
    userId: UserId;
    onSelect: (userId: UserId) => void;
}

export class UserCard extends React.PureComponent<IUserCardProps, any> {
    public render() {
        const { name, username, email, userId } = this.props;

        return (
            <TouchableOpacity style={Styles.card} onPress={this.onSelectHandlerFactory(userId)}>
                <Text style={Styles.header}>{name}</Text>
                <Text style={Styles.description}>{email}</Text>
            </TouchableOpacity>
        );
    }

    private onSelectHandlerFactory(userId: UserId): (ev: GestureResponderEvent) => any {
        return (ev) => this.props.onSelect(userId);
    }
}
