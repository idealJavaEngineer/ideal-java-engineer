import './BlogRowCard.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function BlogRowCard({ blogInfo }) {
    const [currentBlog, setCurrentBlog] = useState(blogInfo);

    return (

        <Link to={`/blog-post/${blogInfo.blogId}`}>
            <div className="card-container">
                <div className="descr-row-container">
                    <h2 className="h2-style kode-mono">{blogInfo.blogName}</h2>
                    <p>{
                        blogInfo.tags.map((tag, index) =>
                            <span className="p-style kode-mono" key={tag.id}>#{tag.tagName}</span>
                        )
                    }</p>
                    <p className="p-style kode-mono">{blogInfo.publishedA}</p>
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