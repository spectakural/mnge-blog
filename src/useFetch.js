import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
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
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
    }, [url]);

    return {data, isPending, error}
}

export default useFetch