import Pokedex from '@assets/pokedex-nav.png';
import Storage from '@assets/storage-nav.png';
import { lazy } from 'react';

const Home = lazy( ()=> import("@pages/Home"));
const Detail = lazy( ()=> import("@pages/Detail"));
const MyPokemon = lazy( ()=> import("@pages/MyPokemon"));

const routingList = [
    {
        path: "/",
        component: Home,
        isExact: true,
        key: "Pokédex",
        isNavShown: true,
        image: Pokedex
    },
    {
        path: "/my-pokemon",
        component: MyPokemon,
        isExact: true,
        key: "My Pokémon",
        isNavShown: true,
        image: Storage
    },
    {
        path: "/pokemon/:name",
        component: Detail,
        isExact: false,
        key: "Details",
        isNavShown: false
    }
];

export default routingList;