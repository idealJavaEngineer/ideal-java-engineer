
import SlidingBlogs from "../slidingBlog/SlidingBlogs";
import BlogCard from "../blogCard/BlogCard";
import "./Home.css";
import BlogRowCard from "../blogCard/BlogRowCard";
import Footer from "../../footer/Footer";
import TrendingBlogPageTop from "../blogCard/TrendingBlogPageTop.js";
import HomePageReviewCard from "../reviewPage/HomePageReviewCard";

function Home() {

    const blogData = {
        imageUrl: "https://drive.google.com/uc?export=view&id=1t-1p97-2Y-IgBCTe88t5bujOuYfavBgR",
        title: "A Solo Trip to Nainital",
        description: "what its like to be solo on a trip",
        author: {
            authorName: "Tanuj Yadav",
            authorDesignation: "owner of Website"
        }
    }

    return (
        <div className="home-container">
            <div className="title-container">
                <TrendingBlogPageTop />
                <div className="vl"></div>
                <h1 className="title-style">The Bloggers Paper</h1>
                <div className="vl"></div>
                <TrendingBlogPageTop />
            </div>
            <div className="sliding-blog-container">
                <hr className="horizontal-line-style" />
                <div className="slide-review-container">
                    <SlidingBlogs />
                    <div className="rw-c-on-hp-container">
                        <HomePageReviewCard cardInfo={blogData} />
                        <hr className="horizontal-line-style" />
                        <HomePageReviewCard cardInfo={blogData} />
                    </div>
                </div>
                <hr className="horizontal-line-style" />
            </div>
            <div className="topic-container">
                <h1 className="trending-style">Trending</h1>
                <hr className="horizontal-line-style" />
                <div className="cards-container">
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                </div>

            </div>
            <div className="topic-container">
                <h1 className="trending-style">Editors Choice</h1>
                <hr className="horizontal-line-style" />
                <div className="cards-container">
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                </div>
            </div>
            <div className="topic-container">
                <h1 className="trending-style">Latest Released</h1>
                <hr className="horizontal-line-style" />
                <div className="cards-container">
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                    <div className="vl"></div>
                    <BlogCard cardInfo={blogData} />
                </div>
            </div>
            
            <div className="footer-comtainer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;