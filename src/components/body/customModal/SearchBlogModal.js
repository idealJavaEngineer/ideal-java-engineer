import React from 'react';
import '../customModal/searchBlogModal.css';

const SearchBlogModal = ({ open, onClose, searchBlogResult, searchedName, categoryName }) => {


  const sendToBlogPage = (blogInfo) => {
    window.location.href = `http://localhost:3000/blog-post/${blogInfo.id}`;
  }

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >

        <div className='modalRight'>
          <button className='closeBtn' onClick={onClose}>
            Close
          </button>
          <div className='content'>
            <h1>Searched {categoryName} by "{searchedName}"</h1>
            <h3>Total items {searchBlogResult.length}</h3>
          </div>
          <div className='btnContainer'>
            <div className='blog-list-container'>
              {
                searchBlogResult.map((blogInfo, index) =>
                  <div key={blogInfo.id} className='each-blog-row-style' onClick={() => {sendToBlogPage(blogInfo)}}>
                    <h3>{blogInfo.blogName}</h3>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlogModal;