const axios = require('axios').default;

/**
 * Simple Request to get characters
*/
export function getCharacters(){
    return axios.get('https://rickandmortyapi.com/api/character/');
}

export default getCharacters;