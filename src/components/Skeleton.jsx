import { css } from "@emotion/react";

const Skeleton = ({display="block",margin="0 0 0 0",height="20px",width="100%",baseColor="#efefef", highightColor="#dddddd", radius="0"}) => {
    const skeleton = css`
        display: ${display};
        height: ${height};
        width: ${width};
        margin: ${margin};
        border-radius: ${radius};
        background-color: ${baseColor};
        overflow: hidden;
        position: relative;

        &:before{
            content:'';
            display:block;
            height: 100%;
            width: 30em;
            position: absolute;
            left: -150px;
            top:0;
            background: linear-gradient(90deg, transparent 0%, ${highightColor} 50%, transparent 100%);
            animation: loading 1s ease-in-out infinite;
        }

        @keyframes loading{
            0%{
                left: -30em;
            }
            100%{
                left: 100%;
            }
        }
    `

    return (  
        <>
            <div css={skeleton}></div>
        </>
    );
}
 
export default Skeleton;