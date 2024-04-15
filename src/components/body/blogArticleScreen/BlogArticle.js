import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetBlogPostDataUtility from "../../../utilities/getBlogPostDataUtility";
import './BlogArticle.css';
import Footer from "../../footer/Footer";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { likeBlogPostUtility, dislikeBlogPostUtility } from "../../../utilities/likeDislikeBlogPostUtility";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import currImage from '../../../static/images/java-env-setup.png';




const BlogArticle = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [disableLike, setDisableLike] = useState("");

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

    const dislikeBlogPost = () => {
        dislikeBlogPostUtility(blogData.blogId, dislikecallbackFunction);
    }

    const dislikecallbackFunction = (response) => {
        if (response != "failed") {
            setDisableLike("none");
            setBlogData({
                ...blogData,
                dislikes: response
            });
        }
    }

    const likeBlogPost = () => {
        likeBlogPostUtility(blogData.blogId, likecallbackFunction);
    }

    const likecallbackFunction = (response) => {
        if (response != "failed") {
            setDisableLike("none");
            setBlogData({
                ...blogData,
                likes: response
            });
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
                            
                                <h1 className="h1-style">{blogData.blogName}</h1>
                                <p className="p-style-1">published on : {getPublishedDate(blogData.publishedAt)}</p>
                                {
                                    blogData.tags.map((tag, index) =>
                                        <span className="p-style-1 tag-style" key={tag.id}>#{tag.tagName}</span>
                                    )
                                }
                            </div>
                            <div className="flex-row">
                                <div className="like-iiner-continer">
                                    <div className="inner-container">
                                        {/* {
                                            blogData.imageUrl != null ? (<img src={blogData.imageUrl} className="first-img-style"/>) : (<></>)
                                        } */}
                                        <img src='https://ideal-java-engineer.s3.ap-south-1.amazonaws.com/java-env-setup-1.png' className="first-img-style"/>
                                        <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                                    </div>
                                    <p className="review-request-style">*If you like this article, please give it a Thumbs Up or Thumbs Down vice versa.</p>
                                    <div className="like-button-container">
                                        <div className="like-desc-style">
                                            <ThumbUpOutlinedIcon className="like-icon-style"  style={{pointerEvents: disableLike}} onClick={likeBlogPost} />
                                            <p>{blogData.likes}</p>
                                        </div>
                                        <div className="like-desc-style">
                                            <ThumbDownOutlinedIcon className="dislike-icon-style" style={{pointerEvents: disableLike}} onClick={dislikeBlogPost} />
                                            <p>{blogData.dislikes}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-desc">
                                    <div className="profile-container">
                                        <FaceRoundedIcon className="profile-style" />
                                    </div>
                                    <h4 className="h4-style-author">Author Name : {blogData.author.user.firstName + " " + blogData.author.user.lastName}</h4>
                                    <p className="p-style-1">{blogData.author.expertise}</p>
                                </div>
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