import { css } from "@emotion/react";
import { baseColor, fontColor } from "@variables/colors";
import { min_sm_device ,min_md_device,min_lg_device,min_xl_device, min_xxl_device } from "@variables/responsive-size";
import { min_sm_container ,min_md_container,min_lg_container,min_xl_container, min_xxl_container } from "@variables/responsive-size";

export const global = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
    ${'' /* @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@700&display=swap'); */}

    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    a,button{
        text-decoration: none;
        color: inherit;
        -webkit-tap-highlight-color: transparent;
    }

    body{
        margin: 0;
        background-color: ${baseColor};
        color: ${fontColor}
    }

    main{
        width: 100%;
        min-height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }

    .container{
        margin-right : auto;
        margin-left: auto;
        padding: 1rem;
        padding-bottom: 6rem;
    }
    
    .tags{
        cursor: default;
        text-align: center;
        width: 5.5rem;
        font-size: 0.75rem;
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 1000px;
        margin: 0.25rem;
        color: white;
        border: 2px solid white;
        background-image: linear-gradient(180deg,transparent 0% 10%,rgba(0,0,0,0.2) 45% 55% ,transparent 90% 100%);
        font-weight: 800;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
    }

    .owned{
        text-align: center;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 1000px;
        margin: 0.25rem .5rem;
        color: white;
        font-weight: 800;
        display: inline-block;
        background-color: rgba(0,0,0,0.3);
    }

    .capitalize{
        text-transform: capitalize;
    }

    @media (min-width: ${min_sm_device}){
        .container{
            max-width: ${min_sm_container}
        }
    }
    @media (min-width: ${min_md_device}){
        .container{
            max-width: ${min_md_container};
            padding: 0;
            padding-bottom: 3rem;
            padding-top: 7rem;
        }
    }
    @media (min-width: ${min_lg_device}){
        .container{
            max-width: ${min_lg_container}
        }
    }
    @media (min-width: ${min_xl_device}){
        .container{
            max-width: ${min_xl_container}
        }
    }
    @media (min-width: ${min_xxl_device}){
        .container{
            max-width: ${min_xxl_container}
        }
    }
`