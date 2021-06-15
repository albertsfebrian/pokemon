import Tags from "@components/Tags";
import generatePadId from "@utils/generatePadId";
import { getPokemonOwned } from "@handler/pokemon-handler";
import { heading } from "@styles/pokemon-heading-style";
import MainImage from "@components/MainImage";
import Pokeball from "@assets/pokeball.png";
import Skeleton from "@components/Skeleton";

const PokemonHeading = ({name, pokemonData,loading}) => {
    const pokemon = pokemonData?.pokemon;

    if(loading){
        return(
            <>
                <div css={heading}>
                    <img src={Pokeball} alt="Pokeball" width="20" height="20"/>
                    <div className="info">
                        <Skeleton margin={"10px 0 10px 0"} width={"5rem"} height={"23px"} baseColor={"transparent"}/>
                        <Skeleton margin={"10px 0 10px 0"} width={"15rem"} height={"38px"} baseColor={"transparent"}/>
                        <Tags pokeTypes={null} loading={loading}/>
                        <Skeleton margin={"0.25rem 0.5rem"} width={"63px"} height={"22px"} baseColor={"transparent"} radius={"1000px"}/>
                    </div>
                    <div className="main-img">
                        <Skeleton width={"15rem"} height={"220px"} baseColor={"transparent"}/>
                    </div>
                </div>
            </>
        )
    }
    
    return (  
        <>
            <div css={heading}>
                <img src={Pokeball} alt="Pokeball" width="20" height="20"/>
                <div className="info">
                    <h3>{pokemonData && generatePadId(pokemonData.pokemon.id)}</h3>
                    <h1 className="capitalize">{pokemonData && pokemonData.pokemon.name}</h1>
                    <Tags pokeTypes={pokemon?.types} loading={loading}/>
                    <div className="owned">{`${getPokemonOwned(name)} Owned`}</div>
                </div>
                <div className="main-img">
                    <MainImage id={pokemon?.id}/>
                </div>
            </div>
        </>
    );
}
 
export default PokemonHeading;