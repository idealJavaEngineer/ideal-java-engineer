import './SlideBlogItemActive.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';

function SlideBlogItemActive(props) {
    return (
        <div className="carousel-item active">
            <img className="d-block w-100 img-size" src={backgroundImage1} alt={props.slideNum} />
            <div className="carousel-caption d-none d-md-block">
                <h3>{props.slideNum}</h3>
                <p>...</p>
            </div>
        </div>
    )
}

export default SlideBlogItemActive;