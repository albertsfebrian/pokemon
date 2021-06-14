import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setError(null);
        setLoading(true);

        fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error("Failed to load the resource")
                }
                return res.json();
            })
            .then(data =>{
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err =>{
                setLoading(false);
                setError(err.message);
            })
    }, [url])
    
    return {data, loading, error};
}
 
export default useFetch;