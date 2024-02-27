import './BlogCard.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';

function BlogCard (props) {


    return (
        <div className="blog-container">
            <div className="image-container">
                <img className="image-decoration" src={backgroundImage1} alt={props.cardInfo.title} />
            </div>
            <div className="descr-container">
                <h3 className="desc-h3">{props.cardInfo.title}</h3>
                <p className="desc-p">{props.cardInfo.description}</p>
                <div className="author-container">
                    <h4 className="desc-h4">{props.cardInfo.author.authorName}</h4>
                    <h5 className="desc-h5">{props.cardInfo.author.authorDesignation}</h5>
                </div>
            </div>

        </div>
    ) 
}

export default BlogCard;