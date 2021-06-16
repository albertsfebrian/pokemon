import { useParams } from "react-router";
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from "@queries/getPokemon-query";
import { detail } from "@styles/detail-style";
import getCardColor from "@utils/getCardColor";
import NotFound from "@pages/NotFound";
import PokemonHeading from "@components/PokemonHeading";
import { useHistory } from "react-router-dom";
import MoveList from "@components/MoveList";
import errorImg from "@assets/sad-poke.png";
import ErrorMessage from "@components/ErrorMessage";
import Skeleton from "@components/Skeleton";
import SuccessModal from "@components/Modal/SuccessModal";
import FailedModal from "@components/Modal/FailedModal";
import { useEffect, useState } from "react";
import randomCatch from "@utils/randomCatch";
import { scrollToOptions, title_app } from "@variables/others";

const Detail = () => {
    const history = useHistory();
    const {name} = useParams();
    const variable = {
        "name": name,
    }
    const { loading, error , data } = useQuery(GET_POKEMON, {variables: variable})
    const types = data?.pokemon?.types;
    const moves = data?.pokemon?.moves;
    const id = data?.pokemon?.id;

    const [isSuccessShow, setIsSuccessShow] = useState(false);
    const [isFailedShow, setIsFailedShow] = useState(false);
    
    useEffect(() => {
        window.scrollTo(scrollToOptions);
        document.title = `${title_app} | ${name}`;
    }, [])

    const handleCatch = () => {
        const isSuccess = randomCatch(50);
        if(isSuccess){
            setIsSuccessShow(true);
            setIsFailedShow(false);
        }
        else {
            setIsSuccessShow(false);
            setIsFailedShow(true);
        }
    }

    if(data && data.pokemon?.id===null){
        return(
            <NotFound/>
        )
    }

    if(error){
        return(
            <ErrorMessage 
                image={errorImg} 
                alt={"Picture"}
                height={"257px"}
                width={"219px"}
                redirect={"/"} 
                h1Msg={"Error"} 
                h2Msg={error.message}
                buttonMsg={"Refresh Page"}
            />
        );
    }

    return (  
        <>
            <div css={detail}>
                <div className="head" style={{ backgroundColor: `${ getCardColor(types) }` }}>
                    <div className="container">
                        <button onClick={()=> history.goBack()}>&#8592; Back</button>
                        <PokemonHeading name={name} pokemonData={data} loading={loading}/>
                    </div>
                </div>
                <div className="bar" style={{ backgroundColor: `${ getCardColor(types) }` }}></div>
                <div className="content">
                    <div className="container">
                        { loading ? 
                            <Skeleton height={"46px"} margin={"1.75rem auto"} radius={"1000px"} width={"300px"}/> 
                            : 
                            <button onClick={()=>handleCatch()}>Catch Pokemon</button>
                        }
                        <MoveList movesList={moves} color={getCardColor(types)} loading={loading}/>
                    </div>
                </div>
                <FailedModal setIsShowing={setIsFailedShow} isShowing={isFailedShow} name={name}/>
                <SuccessModal setIsShowing={setIsSuccessShow} isShowing={isSuccessShow} name={name} id={id}/>
            </div>
        </>
    );
}
 
export default Detail;