import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
    const [tsec, setTsec] = useState(5);
    const history = useHistory();

    useEffect(()=>{
        tsec>0 && setTimeout(()=> setTsec(tsec - 1),1000);
    })

    const handleTsec = ()=>{
        setTimeout(()=>{
            history.push('/');
        },5000)
    }

    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <p>Sorry, that page cannot be found.</p>
            <p>Redirecting to homepage in <b><i>{tsec} seconds</i></b>...</p>
            <br />
            <p>If not redirected, click below.</p>
            <Link to="/">Go to Homepage</Link>
            {handleTsec()}
        </div>
     );
}
 
export default NotFound;