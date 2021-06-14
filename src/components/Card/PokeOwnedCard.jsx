import { pokeInfoUrl, spriteUrl } from "@variables/url";
import Card from "@components/Card/Card";

const PokeOwnedCard = ({name,id, pokeName,height, showConfimationBox ,releasePokemon}) => {
    const pokeItem = {
        id,
        url: `${pokeInfoUrl}${id}/`,
        name,
        image: `${spriteUrl}${id}.png`,
        pokeName
    }

    const handleRemove = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        // releasePokemon(pokeItem);
        showConfimationBox(pokeItem);
    }

    return (  
        <>
            <Card pokeItem={pokeItem} key={pokeItem.id} height={height}>
                <div className="pokename">{`${pokeName}`}</div>
                <button onClick={(e)=>handleRemove(e)}>Release</button>
            </Card>
        </>
    );
}
 
export default PokeOwnedCard;