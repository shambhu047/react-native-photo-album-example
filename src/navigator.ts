import { createStackNavigator } from 'react-navigation';

import { AlbumScreen, PhotoScreen, UserScreen } from './screens';

export const Navigator = createStackNavigator(
    {
        Album: AlbumScreen,
        Photo: PhotoScreen,
        User: UserScreen,
    },
    {
        initialRouteName: 'User',
    },
);
