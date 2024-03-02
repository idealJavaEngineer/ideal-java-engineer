import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetBlogPostDataUtility from "../../../utilities/getBlogPostDataUtility";

const BlogArticle = () => {
    const { id } = useParams();
    const [blogData, setBlogData]  = useState(null);

    useEffect(() => {
        getBlogContent(id);
    })

    const getBlogContent = () => {
        GetBlogPostDataUtility(id, callBackFunction);
    }

    const callBackFunction = (response) => {
        if (response != "failed") {
            setBlogData(response);
        }

    }

    return (
        <div>
            {
                blogData != null ?
                    (
                        <div className="blog-outer-container">
                            <h2>{blogData.blogName}</h2>
                            <div className="inner-container">
                                <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                            </div>
                        </div>
                    ) : 
                    (<p>Loading.....</p>)
            }
        </div>
    )
}

export default BlogArticle;