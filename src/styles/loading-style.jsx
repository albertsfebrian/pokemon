import { css } from "@emotion/react";

export const loading=css`
    img{
        animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`