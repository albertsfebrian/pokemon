import { Link } from "react-router-dom";
import { error } from "@styles/error-style";

const ErrorMessage = ({image,alt,height,width,redirect,h1Msg,h2Msg,buttonMsg}) => {
    
    return (  
        <>
            <div css={error}>
                <img src={image} alt={alt} height={height} width={width}/>
                <h1>{h1Msg}</h1>
                <h2>{h2Msg}</h2>
                <Link to={redirect}><button>{buttonMsg}</button></Link>
            </div>
        </>
    );
}
 
export default ErrorMessage;