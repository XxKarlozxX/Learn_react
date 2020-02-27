import { CHARACTER_FETCH, CHARACTER_REMOVE } from '../constants/characters';
import getCharacters from "../apis/characters";

export function characters() {
    const request = getCharacters();
    return {
        type: CHARACTER_FETCH,
        payload: request
    };
}

export function removeCharacter( name ) {
    return {
        type: CHARACTER_REMOVE,
        meta: name
    };
}

export default characters;

