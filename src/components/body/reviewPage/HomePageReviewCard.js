import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';
import "./HomePageReviewCard.css";

function HomePageReviewCard(props) {
    return (
        <div className="homePage-review-outer-container-1">
            <div className="homePage-review-outer-container-2">
                <div className="review-card-design">
                    <img className="image-deco" src={backgroundImage1} alt="no new decoration" />
                    <div className="review-descr-container">
                        <h3 className="review-desc-h3">{props.cardInfo.title}</h3>
                        <p className="review-desc-p">{props.cardInfo.description}</p>
                        <div className="review-author-container">
                            <h4 className="review-desc-h4">{props.cardInfo.author.authorName}</h4>
                            <h5 className="review-desc-h5">{props.cardInfo.author.authorDesignation}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageReviewCard;