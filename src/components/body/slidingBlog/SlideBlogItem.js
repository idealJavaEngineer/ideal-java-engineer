import './SlideBlogItem.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';


function SlideBlogItem(props) {

    return (
        <div className='carousel-item'>
            <img className="d-block w-100 img-size" src={backgroundImage1} alt={props.slideNum} />
            <div className="carousel-caption d-none d-md-block">
                <h1>Fiction or Non Fiction</h1>
                <h3>which one is better ..?</h3>
                <p>Simple question but complex answer lets discuss about it..</p>
            </div>
        </div>
    )
}

export default SlideBlogItem;