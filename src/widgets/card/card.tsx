import { AlbumCard } from './album';
import { UserCard } from './user';

export abstract class Card {
    public static Album = AlbumCard;

    public static User = UserCard;
}
