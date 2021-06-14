import { css } from "@emotion/react";
import { min_lg_device, min_md_device, min_xl_device, min_xxl_device } from "@variables/responsive-size";

export const moves = css`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-gap: 1rem;

    div{
        min-height: 40px;
        padding: 10px;
        border-radius: 1rem;
        color: white;
        text-align : center;
        text-transform: capitalize;
    }

    @media (min-width: ${min_md_device}){
        grid-template-columns: repeat(3,auto);
    }
    @media (min-width: ${min_lg_device}){
        grid-template-columns: repeat(4,auto);
    }
    @media (min-width: ${min_xl_device}){
        grid-template-columns: repeat(5,auto);
    }
    @media (min-width: ${min_xxl_device}){
        grid-template-columns: repeat(6,auto);
    }
    
`