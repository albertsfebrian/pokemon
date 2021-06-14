import { css } from "@emotion/react";
import { min_md_device, min_lg_device } from "@variables/responsive-size";

export const mypokemon = css`
    width: 100%;
    min-height: 100vh;
    
    .pokemons{
        display: grid;
        grid-template-columns: auto;
        grid-gap: 1rem;
        flex : 0 0 100%;
    }
    
    @media (min-width: ${min_md_device}){
        .pokemons{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: ${min_lg_device}){
        .pokemons{
            grid-template-columns: repeat(3, 1fr);
        }
    }
` 