import { modal } from "@styles/modal-style";
import { Children } from "react";

const Modal = ({children, isShowing ,onClose}) => {
    const modalDisplay = isShowing ? "show" : "hide";

    return (  
        <>
            <div css={modal} className={`${modalDisplay}`}>
                <div className={`${modalDisplay}`}>
                    <div className="close">
                        <button onClick={onClose}>&#215;</button>
                    </div>
                    {isShowing ? 
                        <div className="content">
                            {children}
                        </div>
                        : 
                        null
                    }
                </div>
            </div>
        </>
    );
}
 
export default Modal;