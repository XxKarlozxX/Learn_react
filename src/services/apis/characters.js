const axios = require('axios').default;

/**
 * Simple Request to get characters
 * https://cors-anywhere.herokuapp.com/
 * ,{
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'mode': 'no-cors' } 
    }
*/
export function getCharacters(){
    return axios.get('https://rickandmortyapi.com/api/character/');
}

export default getCharacters;