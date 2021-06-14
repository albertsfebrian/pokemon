const generatePadId = (target) => {
    if(!target) return "";
    return `#${target.toString().padStart("3","0")}`;
}
 
export default generatePadId;