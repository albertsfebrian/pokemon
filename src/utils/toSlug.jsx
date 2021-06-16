const toSlug = (name) => {
    if(!name) return "";
    const regex = /\s/g;
    return name.replace(regex,'-').toLowerCase();
}
 
export default toSlug;