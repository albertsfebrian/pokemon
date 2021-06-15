import Modal from "@components/Modal/Modal";
import { confirmation } from "@styles/modal-style";

const ConfirmationModal = ({isShowing, setIsShowing, pokeToDelete, releasePokemon}) => {
   
    const onClose = () => {
        setIsShowing(false);
    }

    return (  
        <>
            <Modal isShowing={isShowing} onClose={()=>onClose()}>
                <div css={confirmation}>
                    <h1>Are You Sure?</h1>
                    <img src={pokeToDelete?.image} alt={"Picture"} height={"96"} width={"96"}/>
                    <h2 className="capitalize">{`Delete ${pokeToDelete?.pokeName}`}</h2>
                    <div className="confirm-btn">
                        <button className="delete" onClick={()=>releasePokemon(pokeToDelete)}>Delete</button>
                        <button className="cancel" onClick={()=>onClose()}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
 
export default ConfirmationModal;