import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import BlogView from './BlogView';

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogView blog={blog} />}
        </div>
     );
}
 
export default BlogDetails;