import { moves } from "@styles/moves-style";
import Skeleton from "@components/Skeleton";

const MoveList = ({movesList, color, loading}) => {

    if(loading){
        return(
            <>  
                <div css={moves}>
                    {
                        [...Array(60)].map( (data,i) => {
                            return (
                                <Skeleton key={i} height={"40px"} radius={"1rem"}></Skeleton>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (  
        <>  
            <div css={moves}>
                {
                    movesList?.map( (move,i) => {
                        const name = move?.move?.name
                        return (
                            <div key={i} style={{ backgroundColor: `${ color }` }}>
                                {name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default MoveList;