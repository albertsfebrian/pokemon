import { spriteUrl, dreamWorldImgUrl, artWorkImgUrl } from "@variables/url";
import noImage from "@assets/no-image.png";


const MainImage = ({id}) => {
    const urlImg = [
        `${artWorkImgUrl}${id}.png`,
        `${dreamWorldImgUrl}${id}.svg`,
        `${spriteUrl}${id}.png`
    ]
    let idx = 0;
    
    const handleError =(e)=>{
        idx++;
        if(idx > urlImg.length) e.target.src = noImage;
        else e.target.src = urlImg[idx];
    }

    return (
        <>
            {id ? 
                <img src={urlImg[idx]} alt="Pokemon Image" height="auto" width="250" onError={(e)=>handleError(e)}/>
            : null}
        </>
    );
}
 
export default MainImage;