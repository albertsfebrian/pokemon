import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import {GET_POKEMONS, GET_POKEMONS_VAR} from '@queries/getPokemonList-query'
import PokedexCard from '@components/Card/PokedexCard';
import { home } from '@styles/home-style';
import Skeleton from '@components/Skeleton';
import { pokedex_card_height, scrollToOptions } from '@variables/others';
import ErrorMessage from "@components/ErrorMessage";
import errorImg from "@assets/sad-poke.png";
import pokeballIcon from "@assets/pokeball-icon.png"

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const loaderRef = useRef(null);
    const loadingBallRef = useRef(null);
    const [offset, setOffset] = useState(0);
    GET_POKEMONS_VAR.offset = 0;
    const { loading, error, data, refetch } = useQuery(GET_POKEMONS, {variables: GET_POKEMONS_VAR})

    useEffect(() => {
        window.scrollTo(scrollToOptions)
    }, [])
    
    useEffect(() => {
        // setIsLoading(true);
        // console.log(`useEffect Kepanggil jadi ${loading}`)
        setIsLoading(loading);
        if(isFirstLoad && !loading) setIsFirstLoad(false);
    }, [loading])

    useEffect(() => {
        let newPokeList = [...pokemonList];
        if(data?.pokemons) {
            let dataArr = data?.pokemons?.results;
            newPokeList = [...newPokeList,...dataArr]
        }
        setPokemonList(newPokeList);
    }, [data])

    const [counter, setCounter] = useState(0);

    // const handleObserver =async(entries)=>{
    //     const target = entries[0];
    //     console.log(entries);
    //     console.log(`${target.isIntersecting} ${isLoading} ${counter}`);
    //     if(target.isIntersecting && !isLoading && counter==0){
    //         console.log("masuk")
    //         setOffset(offset + GET_POKEMONS_VAR.limit)
    //         GET_POKEMONS_VAR.offset = offset + GET_POKEMONS_VAR.limit;
    //         setIsLoading(true);
    //         setCounter(1);
    //         console.log(offset + GET_POKEMONS_VAR.limit);
    //         await refetch(GET_POKEMONS_VAR);
    //         setIsLoading(false);
    //         console.log(`Done fetch ${offset + GET_POKEMONS_VAR.limit}`)
    //     }
    // }

    // useEffect(() => {
    //     if(isLoading) return;
    //     const option = {
    //         root: null,
    //         rootMargin: "200px",
    //         threshold: 1.0
    //     }
    //     const observer = new IntersectionObserver(handleObserver);
    //     if(loaderRef.current) observer.observe(loaderRef.current);
    // }, [offset, isLoading, counter])

    const handleScroll =async()=>{
        const scrollPos = window.innerHeight + window.scrollY;
        const scrollTreshold = document.body.offsetHeight - 200;
        if(scrollPos >= scrollTreshold){
            // console.log(`isload ${isLoading}`);
            if(!isLoading){
                const newVar = {...GET_POKEMONS_VAR, offset: offset + GET_POKEMONS_VAR.limit}
                setIsLoading(true);
                await refetch(newVar);
                setIsLoading(false);
                setOffset(offset + GET_POKEMONS_VAR.limit)
            }
        }
    }
    
    useEffect(() => {
        if(isLoading) return;
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isLoading, pokemonList ,offset])

    
    if(isLoading && isFirstLoad){
        return (
            <>
                <div css={home} className="container">
                    <div className="pokemons">
                        {
                            [...Array(GET_POKEMONS_VAR.limit)].map( (data,i) =>{
                                return <Skeleton key={i} height={pokedex_card_height} radius={"1rem"}></Skeleton>
                            })
                        }
                    </div>
                </div>
            </>
        ); 
    }

    if(error){
        return(
            <ErrorMessage 
                image={errorImg} 
                alt={"Picture"}
                height={"auto"}
                width={"225"}
                redirect={"/"} 
                h1Msg={"Error"} 
                h2Msg={error.message}
                buttonMsg={"Refresh Page"}
            />
        );
    }

    return (
        <>
            <div css={home} className="container">
                <div className="pokemons">
                    {pokemonList?.map( pokeItem => {
                        return <PokedexCard pokeItem={pokeItem} key={pokeItem.id}/>
                    }) }
                </div>
                {isLoading ? 
                    <div className="loading">
                        <img src={pokeballIcon} alt="Loading..." height={"50"} width={"auto"}/>
                    </div>
                    :
                    null
                }
            </div>
        </>
    );
}
 
export default Home;