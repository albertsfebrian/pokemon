import Modal from "@components/Modal/Modal";
import failedImg from "@assets/sad-poke.png";

const FailedModal = ({isShowing,setIsShowing, name}) => {
    const onClose = () => {
        setIsShowing(false);
    }

    return (  
        <>
            <Modal isShowing={isShowing} onClose={onClose}>
                <h1>Oh No....</h1>
                <img src={failedImg} alt={"Picture"} height={"257"} width={"219"}/>
                <h2 className="capitalize">{`You Failed to Catch ${name}`}</h2>
            </Modal>
        </>
    );
}
 
export default FailedModal;