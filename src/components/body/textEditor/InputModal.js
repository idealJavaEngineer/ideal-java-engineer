import React, { useState } from "react";
import './InputModal.css';

function InputModal({isModalData,setIsModalData}) {

    const tagHandler = (event) => {
        setIsModalData({
            ...isModalData,
            tags : event.target.value
        });
    }

    const categoryNameHandler = (event) => {
        setIsModalData({
            ...isModalData,
            category : event.target.value
        });
    }

    const blogNameHandler = (event) => {
        setIsModalData({
            ...isModalData,
            blogName : event.target.value
        });
    }

    const BlogImageUrlHandler = (event) => {
        setIsModalData({
            ...isModalData,
            blogImageUrl : event.target.value
        })
    }

    return (
        <div className="form-container">
            <div className="field-container">
                <label>Blog Name</label>
                <input onChange={blogNameHandler} rows="4" cols="50"></input>
            </div>
            <div className="field-container">
                <label>Tags</label>
                <textarea onChange={tagHandler} rows="4" cols="50"></textarea>
            </div>
            <div className="field-container">
                <label>Category</label>
                <input onChange={categoryNameHandler} placeholder="category name"></input>
            </div>
            <div className="field-container">
                <label>Blog Image Url</label>
                <input onChange={BlogImageUrlHandler} placeholder="Image Url"></input>    
            </div>
        </div>
    );
}

export default InputModal;