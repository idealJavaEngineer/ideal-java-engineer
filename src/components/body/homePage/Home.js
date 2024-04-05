import React, { useEffect, useState } from 'react';
import SlidingBlogs from "../slidingBlog/SlidingBlogs";
import BlogCard from "../blogCard/BlogCard";
import "./Home.css";
import Footer from "../../footer/Footer";
import HomePageReviewCard from "../reviewPage/HomePageReviewCard";
import homeScreenDataUtility from '../../../utilities/homeScreenDataUtility.js';

function Home() {
    const [showScreen, setShowScreen] = useState(true);
    const [homeScreenData, setHomeScreenData] = useState(null);

    const windowResized = () => {
        const height = window.innerHeight;
        const width = window.innerWidth;
        
        if(width < "920") {
            setShowScreen(false);
        } else {
            setShowScreen(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', windowResized);
        getInitialHomeScreenData();
    }, []);

    const getInitialHomeScreenData = () => {
        homeScreenDataUtility(callBackMethod);
    }

    const callBackMethod = (response) => {
        if (response != "failed")
            setHomeScreenData(response);
    }

    return (
        <div>
            {
                homeScreenData != null && showScreen ?
                (<div className="home-container">
                            <div className="title-container">
                               
                                <h1 className="title-style">The Engineers Paper</h1>
                               
                            </div>
                            <div className="sliding-blog-container">
                                <hr className="horizontal-line-style" />
                                <div className="slide-review-container">
                                    <SlidingBlogs blogsInfo={homeScreenData}/>
                                    <div className="rw-c-on-hp-container">
                                        <HomePageReviewCard blogInfo={homeScreenData.mostLiked[3]} />
                                        <hr className="horizontal-line-style" />
                                        <HomePageReviewCard blogInfo={homeScreenData.mostLiked[4]} />
                                    </div>
                                </div>
                                <hr className="horizontal-line-style" />
                            </div>
                            <div className="topic-container">
                                <h1 className="trending-style">Latest Tutorials</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.latestTutorials[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestTutorials[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestTutorials[2]} />
                                </div>

                            </div>
                            <div className="topic-container">
                                <h1 className="trending-style">Latest Journals</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.latestJournals[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestJournals[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestJournals[2]} />
                                </div>

                            </div>

                            <div className="topic-container">
                                <h1 className="trending-style">Latest Reviews</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.latestReviews[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestReviews[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.latestReviews[2]} />
                                </div>

                            </div>

                            <div className="topic-container">
                                <h1 className="trending-style">Top Tutorials</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.mostLikedTutorials[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedTutorials[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedTutorials[2]} />
                                </div>
                            </div>

                            <div className="topic-container">
                                <h1 className="trending-style">Top Journals</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.mostLikedJournals[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedJournals[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedJournals[2]} />
                                </div>
                            </div>

                            <div className="topic-container">
                                <h1 className="trending-style">Top Reviews</h1>
                                <hr className="horizontal-line-style" />
                                <div className="cards-container">
                                    <BlogCard blogInfo={homeScreenData.mostLikedReviews[0]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedReviews[1]} />
                                    <div className="vl"></div>
                                    <BlogCard blogInfo={homeScreenData.mostLikedReviews[2]} />
                                </div>
                            </div>

                            <div className="footer-comtainer">
                                <Footer />
                            </div>
                        </div>
                        ) :
                        (<p>Loading.....</p>)
                }
            </div>
    )
}

            export default Home;