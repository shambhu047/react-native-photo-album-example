import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IUserCardStyle {
    card: ViewStyle;
    header: TextStyle;
    description: TextStyle;
}

// tslint:disable:object-literal-sort-keys
export const UserCardStyle = StyleSheet.create<IUserCardStyle>({
    card: {
        display: 'flex',
        flexDirection: 'column',

        paddingHorizontal: 32,
        paddingVertical: 16,
        marginBottom: 16,
        marginHorizontal: 16,

        borderRadius: 12,
        backgroundColor: '#fff',

        elevation: 3,
    },
    description: {
        fontSize: 12,
        lineHeight: 20,
    },
    header: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
    },
});
