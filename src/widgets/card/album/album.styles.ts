import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAlbumCardStyle {
    album: ViewStyle;
    coverPlaceholder: ViewStyle;
    titleContainer: ViewStyle;
    title: TextStyle;
}

// tslint:disable:object-literal-sort-keys
export const AlbumCardStyle = StyleSheet.create<IAlbumCardStyle>({
    album: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',

        flexBasis: '40%',

        height: 100,
        backgroundColor: '#fff',
        elevation: 3,
        margin: 10,
    },
    coverPlaceholder: {
        flex: 1,
        alignSelf: 'stretch',

        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    titleContainer: {
        height: 40,
        padding: 5,
        paddingBottom: 10,
        backgroundColor: '#0000003a',
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        overflow: 'hidden',
        color: '#fff',
        lineHeight: 30,
        textAlignVertical: 'center',
    },
});
