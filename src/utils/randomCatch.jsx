// input percentage between 0-100
const randomCatch = (percentage) => {
    if(isNaN(percentage)) throw "Percentage is Not A Number";
    if(percentage<0 || percentage>100) throw "Percentage Must between 0-100"

    const random = Math.floor(Math.random() * 100);
    return random < percentage;
}
 
export default randomCatch;