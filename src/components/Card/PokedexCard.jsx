import Card from "@components/Card/Card";
import { getPokemonOwned } from "@handler/pokemon-handler";
import { pokedex_card_height } from "@variables/others";

const PokedexCard = ({pokeItem}) => {

    return (
        <Card pokeItem={pokeItem} height={pokedex_card_height}>
            <div className="owned">{`${getPokemonOwned(pokeItem.name)} Owned`}</div>
        </Card>
    );
}
 
export default PokedexCard;