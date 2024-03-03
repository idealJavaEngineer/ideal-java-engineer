import './BlogRowCard.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function BlogRowCard({ blogInfo }) {
    const [currentBlog, setCurrentBlog] = useState(blogInfo);

    const getPublishedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getDate() + "/" + date.toLocaleString('en', { month: 'long' }) + "/" + date.getFullYear();
    }

    return (

        <Link to={`/blog-post/${blogInfo.blogId}`} className='remove-underline'>
            <div className="card-container">
                <div className="descr-row-container">
                    <h2 className="h2-style kode-mono">{blogInfo.blogName}</h2>
                    <p className="p-style kode-mono">{
                        blogInfo.tags.map((tag, index) =>
                            <span  key={tag.id}>#{tag.tagName}</span>
                        )
                    }</p>
                    <p className="p-style-date kode-mono">published on : {getPublishedDate(blogInfo.publishedAt)}</p>
                </div>
                <div className="author-container">
                    <h4 className="h4-style kode-mono">{blogInfo.author.user.firstName + blogInfo.author.user.lastName} </h4>
                    <h4 className="h5-style kode-mono">{blogInfo.author.badge.badgeName}</h4>
                </div>
            </div>
        </Link >

    )
}

export default BlogRowCard;