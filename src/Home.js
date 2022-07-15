import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     {title:'My New website', body:'lorem ipsum...', author:'Spectakural', id:1},
    //     {title:'Welcome Party!', body:'lorem ipsum...', author:'Master Yoda', id:2},
    //     {title:'Web dev top tips', body:'lorem ipsum...', author:'Gojo Sensei', id:3},
    //     {title:'Youtube Hacks!', body:'lorem ipsum...', author:'Spectakural', id:4},
    //     {title:'Things to remember in coding', body:'lorem ipsum...', author:'Spectakural', id:5}
    // ]);

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');




    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading..</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'Spectakural')} title="Spectakural's Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'Gojo Sensei')} title="Gojo Sensei's Blogs" handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;