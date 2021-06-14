import { css } from "@emotion/react";
import {btnPrimaryColor, btnPrimaryColorHover} from "@variables/colors"


export const card = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1rem;
    overflow:hidden;
    box-shadow: 4px 4px 0 0 rgb(220,220,220);
    position: relative;
    padding: .75rem 0;
    transition: 100ms all ease-in-out;

    &:hover{
        transform : scale(1.015625);
    }
    
    h1{
        margin-bottom:0.125rem;
        color: white;
        word-wrap: break-word;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        margin-bottom: 0.125rem;
        color: white;
        font-size: 2rem;
    }

    img{
        margin: .5rem .25rem .5rem .5rem;
        z-index:2;
    }

    .img-bg{
        margin: 0;
        position: absolute;
        left: -25px;
        bottom: -15px;
        z-index: 1;
        opacity: 0.3;
    }

    .poke-id{
        position:absolute;
        bottom: -10px;
        right: 5px;
        h1{
            color: rgba(255,255,255,0.3);
        }
    }

    .pokename{
        font-size: 1.25rem;
        margin: 0.125rem;
        color: white;
    }

    button{
        cursor: pointer;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
        font-size: 0.875rem;
        padding: 0.25rem 0.75rem;
        border-radius: 1000px;
        margin: 0.25rem 0;
        color: white;
        display: inline-block;
        background-color: ${btnPrimaryColor};
        transition: 100ms all ease-in-out;
        border: none;
        &:hover{
            background-color: ${btnPrimaryColorHover};
        }
    }
`