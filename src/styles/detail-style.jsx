import { css } from "@emotion/react";
import { btnPrimaryColor, btnPrimaryColorHover } from "@variables/colors";
import { min_sm_device } from "@variables/responsive-size";

export const detail = css`
    min-height: 100vh;
    width: 100%;

    .head{
        color: white;
        min-height: 50vh;
        transition: 300ms all ease-in-out;

        .container{
            padding-bottom: 0;

            button{
                cursor: pointer;
                background-color: transparent;
                border: none;
                font-size: 1rem;
                font-weight: 800;
                color: white;
                letter-spacing: 2px;
                transition: 100ms all ease-in-out;
                margin-bottom: 1rem;
                padding: 0;
                z-index:2;
                position: relative;

                &:hover{
                    color: #676767;
                }
            }

            .poke-info{
                display:flex;
                justify-content: center;
                align-item: center;

                div{
                    
                }
            }   
        }
    }
    .bar{
        transition: 300ms all ease-in-out;
        height: 2rem;
        border-radius: 0 0 100% 100%;
    }
    .content{
        background-color: white;
        position: relative;

        .container{
            padding-top: 0;
            text-align: center;

            button{
                cursor: pointer;
                padding: 0.75rem 5rem;
                border-radius: 1000px;
                border: none;
                font-size: 1.125rem;
                font-weight: 700;
                text-align: center;
                letter-spacing: 1px;
                margin: 1.75rem 0;
                color: white;
                display: inline-block;
                background-color: ${btnPrimaryColor};
                transition: 100ms all ease-in-out;
                &:hover{
                    background-color: ${btnPrimaryColorHover};
                }
            }
        }
    }


    @media (min-width: ${min_sm_device}){
        .bar{
            height: 3rem;
            border-radius: 0 0 100% 100%;
        }
    }
`