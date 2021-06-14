import Modal from "@components/Modal/Modal";
import successImg from "@assets/catch.png";
import { success } from "@styles/modal-style"
import { useState } from "react";
import { addPokemon, isPokeNameExist } from "@handler/pokemon-handler";
import { Link } from "react-router-dom";

const SuccessModal = ({isShowing, setIsShowing, name, id}) => {
    const [pokeName, setpokeName] = useState("");
    const [errorPokeName, setErrorPokeName] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    
    const onClose = () => {
        setIsShowing(false);
        resetData();
    }

    const resetData=()=>{
        setIsSaved(false);
        setpokeName("");
        setErrorPokeName("");
    }

    const handlePokeName=(e)=>{
        const name = e.target.value;
        setpokeName(name);
        validatePokeName(name);
    }

    const validatePokeName =(name)=>{
        if(name===undefined || name==null || name===""){
            setErrorPokeName("Name cannot be empty");
            return false;
        }
        else if(name.length < 3 || name.length > 20){
            setErrorPokeName("Name must between 5-20 character");
            return false;
        }
        else if(isPokeNameExist(name)){
            setErrorPokeName("You already used this name");
            return false;
        }
        else{
            setErrorPokeName("");
            return true;
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const pokeName = e.target.pokeName.value;
        setpokeName(pokeName);
        if(validatePokeName(pokeName)){
            setpokeName(`You named it ${pokeName}`);
            setErrorPokeName("");
            addPokemon(pokeName,name,id);
            setIsSaved(true);
        }
    }

    return (  
        <>
            <Modal isShowing={isShowing} onClose={()=>onClose()}>
                <div css={success}>
                    <h1>Congratulations</h1>
                    <img src={successImg} alt={"Picture"} height={"auto"} width={"175"}/>
                    <h2 className="capitalize">{`You Caught ${name}`}</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div>
                            <input type="text" name="pokeName" id="pokeName" placeholder="Enter Name" value={pokeName} onChange={(e)=>handlePokeName(e)} disabled={isSaved}/>
                            <span>{errorPokeName}</span>
                        </div>
                        {isSaved ? 
                            <Link to="/my-pokemon">
                                <button>See My Pokemon</button>
                            </Link>
                            : 
                            <button type="submit">Submit</button>
                        }
                    </form>
                </div>
            </Modal>
        </>
    );
}
 
export default SuccessModal;