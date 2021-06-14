import { css } from "@emotion/react";
import { max_xs_device, min_lg_device, min_md_device, min_xl_device, min_xxl_device } from "@variables/responsive-size";

export const heading = css`
    max-width: ${max_xs_device};
    margin: auto;
    padding: 1rem;
    position: relative;
    z-index: 1;

    h1,h3{
        margin: 10px 0 10px 0;
    }

    .main-img{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 250px;
    }

    &>img{
        position: absolute;
        z-index: -1;
        top: -30%;
        left: 45%;
        width: 20rem;
        opacity: 0.15;
    }

    @media (min-width: ${min_md_device}){
        &>img{
            top: -55%;
            left: 50%;
            width: 30rem;
        }
    }

    @media (min-width: ${min_lg_device}){
        &>img{
            top: -50%;
            left: 65%;
        }
    }
    @media (min-width: ${min_xl_device}){
        max-width: ${min_md_device};
        &>img{
            top: 0;
            left: 75%;
            width: 35rem;
        }
    }
    @media (min-width: ${min_xxl_device}){
        &>img{
            top: 0;
            left: 100%;
            width: 35rem;
        }
    }
`