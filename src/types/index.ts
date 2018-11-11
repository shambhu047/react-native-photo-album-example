export interface IPhoto {
    albumId: 1;
    id: 1;
    title: string;
    url: Url;
    thumbnailUrl: Url;
}

export interface IAlbum {
    userId: UserId;
    id: AlbumId;
    title: string;
}

export interface IUser {
    id: UserId;
    name: string;
    username: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        },
    };
    phone: string;
    website: string;
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    };
}

export type UserId = number;
export type AlbumId = number;
export type Url = string;
export type Email = string;
