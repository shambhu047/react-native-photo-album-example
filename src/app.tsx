import React, { Component } from 'react';

import { Provider } from 'mobx-react';

import { Navigator } from './navigator';
import { stores } from './stores';

export class App extends Component<any> {
    public render() {
        return (
            <Provider {...stores()}>
                <Navigator />
            </Provider>
        );
    }
}
