const toSlug = (name) => {
    if(!name) return "";
    return name.replaceAll(" ","-").toLowerCase();;
}
 
export default toSlug;