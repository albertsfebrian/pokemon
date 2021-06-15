import { css } from "@emotion/react"
import {min_md_device} from "@variables/responsive-size";
import { navColor, navBorderColor, navFontColor, navHoverFontColor } from "@variables/colors";

export const navbar = css`
    background-color: ${navColor};
    padding: 1rem 0.25rem 0.25rem 0.25rem;
    border-top: 2px solid ${navBorderColor};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:10;
    
    #header-container{
        display: flex;
        justify-content: space-between;
        padding: 0;
    }

    .main-logo{
        display: none;
    }

    #nav-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        a{
            font-weight: 800;
            letter-spacing: .125rem;
            color: ${navFontColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img{
                display:block;
            }
            span{
                margin-top: 0.25rem;
                font-size: 0.75rem;
            }
            &:hover{
                color: ${navHoverFontColor}
            }
        }
    }

    @media (min-width: ${min_md_device}){
        top : 0;
        bottom : auto;
        border-top: none;
        border-bottom: 2px solid ${navBorderColor};
        padding: 1rem;

        .main-logo{
            display: inline;
        }
        #nav-container{
            justify-content: flex-end;
            a{
                padding: 1rem;
                img{
                    display: none;
                }
                span{
                    margin: 0;
                    font-size: 1rem;
                }
            }
        }
    }
`