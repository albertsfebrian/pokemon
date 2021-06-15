import { useState, useEffect } from "react";
import { getAllPokemonSortedId, removePokemon } from "@handler/pokemon-handler";
import PokeOwnedCard from "@components/Card/PokeOwnedCard";
import { mypokemon } from '@styles/mypokemon-style';
import catchImg from "@assets/catch.png";
import Skeleton from '@components/Skeleton';
import { scrollToOptions, storage_card_height } from '@variables/others';
import ErrorMessage from "@components/ErrorMessage";
import ConfirmationModal from "@components/Modal/ConfirmationModal";

const MyPokemon = () => {
    const [pokemonList, setPokemonList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isConfirmationShow, setIsConfirmationShow] = useState(false);
    const [pokeToDelete, setPokeToDelete] = useState(null);

    useEffect(() => {
        fetchPokemon();
    }, [])

    useEffect(() => {
        window.scrollTo(scrollToOptions)
    }, [])

    const fetchPokemon = () => {
        setIsLoading(true);
        setPokemonList(getAllPokemonSortedId());
        setIsLoading(false);
    }

    const showConfimationBox =(pokeToDelete)=>{
        setIsConfirmationShow(true);
        setPokeToDelete(pokeToDelete);
    }

    const releasePokemon = (pokeItem) => {
        setIsConfirmationShow(false);
        removePokemon(pokeItem);
        fetchPokemon();
    }

    const renderSkeleton=()=>{
        return(
            <>
                {
                    [...Array(12)].map( (data,i) =>{
                        return <Skeleton key={i} height={storage_card_height} radius={"1rem"}></Skeleton>
                    })
                }
            </>
        )
    }

    const renderError=()=>{
        return(
            <ErrorMessage 
                image={catchImg} 
                alt={"Picture"}
                height={"237px"}
                width={"175px"}
                redirect={"/"} 
                h1Msg={"No Pokemon Found..."} 
                h2Msg={"Gotta Catch 'em all!"}
                buttonMsg={"Let's Go Hunt!"}
            />
        );
    }

    const renderMyPokemon=()=>{
        return (
            <div css={mypokemon} className="container">
                <div className="pokemons">
                    {pokemonList?.map( ([name,pokeData]) => {
                        return pokeData.names.map( pokeName => {
                            return <PokeOwnedCard name={name} id={pokeData.id} pokeName={pokeName} height={storage_card_height} showConfimationBox={showConfimationBox} key={`${name}${pokeName}`}/>
                        })
                    }) }
                </div>
                {isLoading ? renderSkeleton() : null}
            </div>
        )
    }

    return (  
        <>
            {!isLoading && (!pokemonList || Object.keys(pokemonList).length==0) ?
                renderError()
                :
                renderMyPokemon()
            }
            <ConfirmationModal setIsShowing={setIsConfirmationShow} isShowing={isConfirmationShow} pokeToDelete={pokeToDelete} releasePokemon={releasePokemon}/>
        </>
    );
}
 
export default MyPokemon;