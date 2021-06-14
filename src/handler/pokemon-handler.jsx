export const KEY_POKEMON_LIST = "pokemon-list";
export const getAllPokemon = () => {
    if(!localStorage){
        alert("Your Browser Doesn't Support LocalStorage");
        return {};
    }
    else if(localStorage && localStorage.getItem(KEY_POKEMON_LIST) ){
        return JSON.parse(localStorage.getItem(KEY_POKEMON_LIST));
    }
    return {};
}
export const getAllPokemonSortedId=()=>{
    if(Object.keys(getAllPokemon()).length == 0 ) return [];

    const pokemonList = Object.entries(getAllPokemon());
    return pokemonList.sort( (a,b) => {
        return a[1].id-b[1].id;
    })
}
export const setPokemon = (objectToSave) => {
    if(!localStorage){
        alert("Your Browser Doesn't Support LocalStorage");
        return false;
    }
    localStorage.setItem(KEY_POKEMON_LIST, JSON.stringify(objectToSave));
    return true;
}
export const getPokemonOwned = (name) => {
    const pokemonList =  getAllPokemon();
    return pokemonList?.[name]?.names?.length ?? 0 ;
}
export const removePokemon=({name,pokeName})=>{
    const pokemonList =  getAllPokemon();
    if(pokemonList && pokemonList[name]){
        const idx = pokemonList[name].names.indexOf(pokeName);
        pokemonList[name].names.splice(idx,1);

        if(pokemonList[name].names.length == 0 ){
            delete pokemonList[name];
        }
        setPokemon(pokemonList);
        return true;
    }
    return false;
}
export const isPokeNameExist=(pokeName)=>{
    const pokemonList = getAllPokemon();
    if(pokemonList){
        for(let name in pokemonList){
            if(pokemonList[name].names.includes(pokeName))
                return true;
        }
    }
    return false;
}
export const addPokemon=(pokeName,name,id)=>{
    const pokemonList = getAllPokemon();

    if(pokemonList[name] === undefined) pokemonList[name] = {};
    pokemonList[name].id = id;
    if(pokemonList[name].names === undefined) pokemonList[name].names =[];
    pokemonList[name].names.push(pokeName);
    setPokemon(pokemonList);
}