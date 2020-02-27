export const getCharactersState = store => store.characters


export const getCharactersData = store =>  
    getCharactersState(store) ? getCharactersState(store).data : {};