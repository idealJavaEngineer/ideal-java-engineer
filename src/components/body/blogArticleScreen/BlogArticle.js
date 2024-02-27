import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';


const BlogArticle = () => {
    const {blogId} = useParams();

    useEffect(() => {
        getBlogContent();
    }, []);

    const getBlogContent = () => {

    }



    return(
        <div className="blog-outer-container">
            <h2></h2>
            <div className="inner-container">

            </div>
        </div>
    ) 
}

export default BlogArticle;