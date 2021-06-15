import { css } from "@emotion/react";
import { btnPrimaryColor, btnPrimaryColorHover, btnSecondaryColor, btnSecondaryColorHover, fontColor, navFontColor, navHoverFontColor } from "@variables/colors";
import { max_xs_device, min_md_device, min_sm_device } from "@variables/responsive-size";

export const modal = css`
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition : 400ms all ease-in-out;

    &.hide{
        opacity:0;
        z-index:-1;
    }
    &.show{
        opacity: 1;
        z-index: 10;
    }

    button{
        cursor: pointer;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        color: ${navFontColor};
        letter-spacing: 1px;
        transition: 100ms all ease-in-out;
        padding: 0;
    }

    &>div{
        width:90%;
        max-width: 500px;
        min-height: 25rem;
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;
        padding-bottom: 2.5rem;
        text-align: center;
        transition : 350ms all ease-in-out;

        &.hide{
            transform: scale(0);
        }
        &.show{
            transform: scale(1);
        }

        .close{
            text-align: right;
            button{
                background-color: transparent;
                font-size: 2rem;
                font-weight: 800;
                color: ${navFontColor};
                letter-spacing: 2px;
                padding: 0;

                &:hover{
                    color: ${navHoverFontColor};
                }
            }
        }

        img{
            margin: 1rem 0;

            @media (max-width: ${max_xs_device}){
                width: 10rem;
                height: auto;
            }
        }
    }
`

export const success = css`
    form{
        div{
            margin: 1rem 0 0.125rem 0;
            input{
                display: block;
                margin: auto;
                width: 100%;
                padding: 0.5rem;
                border-radius: 1rem;
                border: 2px solid ${fontColor};
                outline: none;
                text-align: center;

                &:disabled{
                    border: 2px solid white;
                    background-color: white;
                }
                
                @media (min-width: ${min_sm_device}){
                    width: 80%;
                }
            }
            span{
                padding: 0.5rem;
                display: block;
                color: red;
                min-height: 35px;
            }
        }
        button{
            padding: 0.75rem 5rem;
            border-radius: 1000px;
            text-align: center;
            margin: 0;
            color: white;
            display: inline-block;
            background-color: ${btnPrimaryColor};
            &:hover{
                background-color: ${btnPrimaryColorHover};
            }
        }
    }
`

export const confirmation = css`
    .confirm-btn{

        button{
            width: 100%;
            display : block;
            margin: 0.5rem auto;

            @media (min-width: ${min_md_device}){
                width: 75%;
            }
        }

        .delete{
            padding: 0.75rem 5rem;
            border-radius: 1000px;
            text-align: center;
            color: white;
            background-color: ${btnPrimaryColor};
            &:hover{
                background-color: ${btnPrimaryColorHover};
            }
        }
        .cancel{
            padding: 0.75rem 5rem;
            border-radius: 1000px;
            text-align: center;
            color: white;
            background-color: ${btnSecondaryColor};
            &:hover{
                background-color: ${btnSecondaryColorHover};
            }
        }
    }
`