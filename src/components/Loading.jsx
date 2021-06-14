import pokeball from "@assets/pokeball-icon.png";
import { loading } from "@styles/loading-style";
import { useState } from "react";

const Loading = () => {
    const [imageError, setImageError] = useState(false);

    const handleError=()=>{
        setImageError(true);
    }

    return (  
        <>
            <div css={loading}>
                {imageError ? 
                    <h1>Loading . . .</h1>
                :
                    <img src={pokeball} alt="Loading..." height={"100"} width={"auto"} onError={(e)=>handleError(e)}/>
                }
            </div>
        </>
    );
}
 
export default Loading;