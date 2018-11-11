import { AppStore } from './app';

export function stores() {
    return {
        [AppStore.storeName]: new AppStore(),
    };
}
