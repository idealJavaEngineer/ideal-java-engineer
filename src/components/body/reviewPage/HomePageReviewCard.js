import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';
import "./HomePageReviewCard.css";

function HomePageReviewCard({blogInfo}) {

    const routeToBlogPage = () => {
        window.location.href = `http://localhost:3000/blog-post/${blogInfo.blogId}`;
    }

    const getPublishedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getDate() + "/" + date.toLocaleString('en', { month: 'long' }) + "/" + date.getFullYear();
    }

    return (
        <div className="homePage-review-outer-container-1">
            <div className="homePage-review-outer-container-2">
                <div className="review-card-design"  onClick={routeToBlogPage}>
                    <img className="image-deco" src={backgroundImage1} alt="no new decoration" />
                    <div className="review-descr-container">
                        <h3 className="review-desc-h3">{blogInfo.blogName}</h3>
                        <p className="desc-p-size">published on : {getPublishedDate(blogInfo.publishedAt)}</p>
                        <div className="review-author-container">
                            <h4 className="review-desc-h4">{blogInfo.author.user.firstName + " " + blogInfo.author.user.lastName}</h4>
                            <h5 className="review-desc-h5">{blogInfo.author.expertise}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageReviewCard;