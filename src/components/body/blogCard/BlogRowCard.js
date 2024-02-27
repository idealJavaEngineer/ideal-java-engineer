import './BlogRowCard.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';

function BlogRowCard(props) {

    return (
        <div className="card-container">
                {/* <div className="image-row-container">
                    <img className="image-row-decoration" src={backgroundImage1} alt={props.cardInfo.title} />
                </div> */}
            <div className="descr-row-container">
                <h3 className="h3-style">{props.cardInfo.title}</h3>
                <p className="p-style">{props.cardInfo.description}</p>
                <div className="author-container">
                    <h4 className="h4-style">{props.cardInfo.author.authorName}</h4>
                    <h5 className="h5-style">{props.cardInfo.author.authorDesignation}</h5>
                </div>
            </div>
        </div>
        )
}

export default BlogRowCard;