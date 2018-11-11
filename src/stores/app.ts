import { action, computed, observable, runInAction } from 'mobx';

import { AlbumId, IAlbum, IPhoto, IUser, UserId } from '../types';

const BaseUrl = 'https://jsonplaceholder.typicode.com';

// Main Store
export class AppStore {

    public static storeName: string = 'app';

    // user id of selected user
    @observable private currentUser: number;

    // album id of selected album
    @observable private currentAlbum: number;

    @observable private isLoading: boolean;

    // this object can be splitted into multiple objects
    private cache: {
        users: IUser[];
        photos: IPhoto[];
        albums: IAlbum[];
    };

    public constructor() {
        this.cache = {
            albums: [],
            photos: [],
            users: [],
        };

        this.isLoading = false;
    }

    public users(): IUser[] {
        let users: IUser[] = [];

        if (!this.isLoading) {
            users = this.cache.users;
        }

        return users;
    }

    public albums(): IAlbum[] {
        let albums: IAlbum[] = [];

        if (this.currentUser && !this.isLoading) {
            albums = this.cache.albums.filter((a) => a.userId === this.selectedUser);
        }

        return albums;
    }

    public photos(): IPhoto[] {
        let photos: IPhoto[] = [];

        if (this.currentAlbum && !this.isLoading) {
            photos = this.cache.photos.filter((p) => p.albumId === this.currentAlbum);
        }

        return photos;
    }

    @computed public get selectedUser(): UserId {
        return this.currentUser;
    }

    @computed public get selectedAlbum(): AlbumId {
        return this.currentAlbum;
    }

    @computed public get loading() {
        return this.isLoading;
    }

    @action.bound
    public selectUser(userId: UserId) {
        this.currentUser = userId;
    }

    @action.bound
    public selectAlbum(albumId: AlbumId) {
        this.currentAlbum = albumId;
    }

    public async load() {
        runInAction(() => {
            this.isLoading = true;
        });

        try {
            const res = await Promise.all([
                this.fetchUsers(),
                this.fetchAlbums(),
                this.fetchPhotos(),
            ]);

            runInAction(() => {
                this.isLoading = false;
            });
        } catch (e) {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    @action.bound
    private async fetchUsers() {
        try {
            const res = await fetch(`${BaseUrl}/users`);

            const data = await res.json();

            runInAction(() => {
                this.cache.users = data as IUser[];
            });
        } catch (e) {
            // This is a error case.
            // TODO: Retry to load the users list
        }
    }

    @action.bound
    private async fetchAlbums() {
        try {
            const res = await fetch(`${BaseUrl}/albums`);

            const data = await res.json();

            runInAction(() => {
                this.cache.albums = data as IAlbum[];
            });
        } catch (e) {
            // This is a error case.
            // TODO: Retry to load the users list
        }
    }

    @action.bound
    private async fetchPhotos() {
        try {
            const res = await fetch(`${BaseUrl}/photos`);

            const data = await res.json();

            runInAction(() => {
                this.cache.photos = data as IPhoto[];
            });
        } catch (e) {
            // This is a error case.
            // TODO: Retry to load the photos list
        }
    }
}
