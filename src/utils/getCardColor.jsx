import { cardColor } from "@variables/card-colors";

const getCardColor = (types) => {
    if(!types) return cardColor.default;

    //get main type from the list
    const mainType = types[0]?.type?.name;
    return cardColor[mainType] || cardColor.default;
}
 
export default getCardColor;