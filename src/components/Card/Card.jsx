import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "@utils/useFetch";
import { card } from "@styles/card-style";
import toSlug from "@utils/toSlug";
import pokeBg from "@assets/pokeball.png";
import Tags from "@components/Tags";
import getCardColor from "@utils/getCardColor"
import generatePadId from "@utils/generatePadId";
import Skeleton from "@components/Skeleton";

const CardBase = ({pokeItem, height, children}) => {
    const [isLoading, setisLoading] = useState(true);

    const { data, loading, error } = useFetch(pokeItem.url);
    const types = data?.types;
    //if error, the tags will not showing

    useEffect(() => {
        setisLoading(loading);
    }, [loading])

    if(isLoading){
        return (
            <>
                <Skeleton key={pokeItem.id} height={height} radius={"1rem"}></Skeleton>
            </>
        );
    }

    return (  
        <Link to={"/pokemon/"+toSlug(pokeItem.name)}>
            <div css={card} style={{ backgroundColor: `${ getCardColor(types) }`, height:`${height}` }}>
                <img className="img-bg" src={pokeBg} alt="pokeball" height="130px" width="130px"/>
                <img src={pokeItem.image} alt={pokeItem.name} height="96px" width="96px"/>
                <div>
                    <h1 className="capitalize">{pokeItem.name}</h1>
                    <Tags pokeTypes={types}/>
                    {children}
                </div>
                <div className="poke-id">
                    <h1>{generatePadId(pokeItem.id)}</h1>
                </div>
            </div>
        </Link>
    );
}
 
export default CardBase;