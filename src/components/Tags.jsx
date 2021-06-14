import getTagColor from "@utils/getTagColor";
import Skeleton from "@components/Skeleton";

const Tags = ({pokeTypes, loading}) => {
    if(loading){
        return(
            <div>
                {
                    [...Array(2)].map((data,i)=>{
                        return <Skeleton key={i} display={"inline-block"} margin={"0.25rem"} width={"5.5rem"} height={"26px"} baseColor={"transparent"} radius={"1000px"}/>
                    })
                }
            </div>
        )
    }

    return ( 
        <>
            <div>
                {
                    pokeTypes?.map( (data,index) => {
                        const typeName = data.type.name
                        return (
                            <div className="tags" 
                                style={{ backgroundColor: `${ getTagColor(typeName) }` }} 
                                key={index}
                            >
                                {typeName}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default Tags;