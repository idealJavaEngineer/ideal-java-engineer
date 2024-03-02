import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../learnPage/LearnPage.css';
import React, {useState} from 'react';

function RightSearchBox({tags, categoryName}) {

    return (
        <div className="hashtag-search-container">
            <h3 className="search-text-style kode-mono">Search for a {categoryName}</h3>
                    <div className="input-group mb-3">
                        <span className="search-block-style input-group-text " id="basic-addon1"><h2 className="heading-4"><SearchRoundedIcon /></h2></span>
                        <input type="text" className="form-control search-block-style" placeholder={`${categoryName} Name`} aria-label="Blog Name" aria-describedby="basic-addon1" />
                    </div>
            <h5 className="search-text-style kode-mono">Filter {categoryName} by tags</h5>
            <div className="max-height-hastag-container">
                <div className="hashtag-button-container">
                    {
                        tags.map((tag, index) => 
                            <button key ={index} className='button-style-blog-page'><p className="link-style-blog-page">#{tag.tagName}</p></button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSearchBox;