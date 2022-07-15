import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const BlogView = ({blog}) => {

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleDelete = ()=>{
        setIsPending(true);
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
            <div className="blog-wrapper">
                <h2>{blog.title}</h2>
                <p className="blog-author">by <Link to={`/author/${blog.author}`}><i>{blog.author}</i></Link></p>
                <p className="blog-body">{blog.body}</p>
                {!isPending && <button onClick={handleDelete}>Delete</button>}
                {isPending && <button disabled>Deleting...</button>}
            </div>
     );
}
 
export default BlogView;