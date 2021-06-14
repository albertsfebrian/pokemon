import { css } from "@emotion/react";
import {btnPrimaryColor, btnPrimaryColorHover} from "@variables/colors";

export const error = css`
    text-align: center;

    h1,h2{
        margin: 1rem;
    }
    h1{
        font-size:1.75rem;
    }
    h2{
        font-size:1.25rem;
    }
    button{
        cursor: pointer;
        padding: 0.75rem 5rem;
        border-radius: 1000px;
        border: none;
        font-size: 1.125rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 1px;
        margin: 0.25rem 0;
        color: white;
        display: inline-block;
        background-color: ${btnPrimaryColor};
        transition: 100ms all ease-in-out;
        &:hover{
            background-color: ${btnPrimaryColorHover};
    }
`