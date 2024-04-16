import React from 'react';
import './RoadMapScreen.css';
import ListIcon from '@mui/icons-material/List';
import logo from "../../../static/images/backgroundImage1.jpg";
import BlogArticle from "../blogArticleScreen/BlogArticle";

const RoadMapScreen = ({roadmapInfo}) => {


  return (
    <div className="father-container">
      <div className="roadmap-screen-container">
        {/* sidebar container */}
        <div className="sidebar-container">
          {/* sidebar header */}
          <div className="sidebar-header">
            <div className="sidebar-header-style">
              <h2 className="sidebar-header-text">
                Java Essentials
              </h2>
              <ListIcon className="toggle-sidebar-style" />
            </div>
          </div>
          {/* sidebar content */}
          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 1 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>
          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 2 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>
          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 3 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>

          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 3 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>
          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 3 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>
          <div className="sidebar-content-container">
            <div className="chapter-name-container">
              <h3 className="chapter-name-style">
                java fundamentals
              </h3>
            </div>
            <div className="sidebar-item-container">
              <p className="sidebar-item-number"> 3 </p>
              <h2 className="sidebar-item-name"> Sliding Window Fixed Size </h2>
            </div>
          </div>


        </div>
        {/* main item content represents here */}
        <div className="item-content-container">
          <h1 className="content-item-title">
            Sliding Window Problem:
          </h1>
          <div className="youtube-video-style">
            <img alt="click on it to get to the video !" src={logo} ></img>
          </div>
          <div className="content-nav">
            <div className="content-opt active border-left-radius">Content</div>
            <div className="content-opt">Suggested Problems</div>
            <div className="content-opt border-right-radius">Q&A</div>
          </div>

          <div className="item-blog-container">
            <div>
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMapScreen;