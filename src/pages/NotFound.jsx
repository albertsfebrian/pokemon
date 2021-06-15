import notFoundImg from "@assets/404.png";
import ErrorMessage from "@components/ErrorMessage";
import { scrollToOptions } from "@variables/others";
import { useEffect } from "react";

const NotFound = () => {
    
    useEffect(() => {
        window.scrollTo(scrollToOptions)
    }, [])

    return ( 
        <>
            <ErrorMessage 
                image={notFoundImg} 
                alt={"Picture"}
                height={"240px"}
                width={"227px"}
                redirect={"/"} 
                h1Msg={"Sorry..."} 
                h2Msg={"The Page You're Searching is Not Found"}
                buttonMsg={"Back to Home"}
            />
        </>
    );
}
 
export default NotFound;