import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(res.ok){
                    return res.json()
                }else{
                    throw Error('could not fetch the data for that resource')
                }
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                if (err.name === 'AbortError'){
                    console.log("Fetch aborted!")
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch