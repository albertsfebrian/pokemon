import { tagColor } from "@variables/tag-colors";

const getTagColor = (typeName) => {
    if(!typeName) return tagColor.default;
    return tagColor[typeName] || tagColor.default;
}
 
export default getTagColor;