import Modal from "@components/Modal/Modal";
import successImg from "@assets/catch.png";
import { confirmation } from "@styles/modal-style"
import { useState } from "react";
import { addPokemon, isPokeNameExist } from "@handler/pokemon-handler";
import { Link } from "react-router-dom";

const ConfirmationModal = ({isShowing, setIsShowing, pokeToDelete, releasePokemon}) => {
   
    const onClose = () => {
        setIsShowing(false);
    }

    return (  
        <>
            <Modal isShowing={isShowing} onClose={()=>onClose()}>
                <div css={confirmation}>
                    <h1>Are You Sure?</h1>
                    <img src={pokeToDelete?.image} alt={"Picture"} height={"auto"} width={"96"}/>
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