import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetBlogPostDataUtility from "../../../utilities/getBlogPostDataUtility";
import './BlogArticle.css';
import Footer from "../../footer/Footer";

const BlogArticle = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        getBlogContent(id);
    }, [])

    const getBlogContent = () => {
        GetBlogPostDataUtility(id, callBackFunction);
    }

    const callBackFunction = (response) => {
        if (response != "failed") {
            setBlogData(response);
        }

    }

    const getPublishedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getDate() + "/" + date.toLocaleString('en', { month: 'long' }) + "/" + date.getFullYear();
    }

    return (
        <div>
            {
                blogData != null ?
                    (<div className="screen-background">
                        <div className="blog-outer-container">
                            <div className="heading-container">
                                <h1 className="h1-style dancing-script"><strong>{blogData.blogName}</strong></h1>
                                <p className="p-style-1 dancing-script">published on : {getPublishedDate(blogData.publishedAt)}</p>
                                {
                                    blogData.tags.map((tag, index) =>
                                        <span className="p-style-1 tag-style dancing-script" key={tag.id}>#{tag.tagName}</span>
                                    )
                                }
                                <h4 className="h4-style-author dancing-script">Author Name : {blogData.author.user.firstName + " " + blogData.author.user.lastName}</h4>
                                <p className="p-style-1 dancing-script">{blogData.author.expertise}</p>
                            </div>
                            <div className="inner-container">
                                <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                            </div>
                        </div>
                        <Footer />
                    </div>
                    ) :
                    (<p>Loading.....</p>)
            }
        </div>
    )
}

export default BlogArticle;