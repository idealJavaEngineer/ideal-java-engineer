import './SlideBlogItem.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';


function SlideBlogItem({blogInfo}) {

    const getPublishedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getDate() + "/" + date.toLocaleString('en', { month: 'long' }) + "/" + date.getFullYear();
    }

    const routeToBlogPage = () => {
        window.location.href = `${process.env.PUBLIC_URL}/blog-post/${blogInfo.blogId}`;
    }

    return (
        <div className='carousel-item font-new-style mouse-icon' onClick={routeToBlogPage}>
            <img className="d-block w-100 img-size" src={backgroundImage1} alt={blogInfo.blogName} />
            <div className="carousel-caption d-none d-md-block">
                <h1>{blogInfo.blogName}</h1>
                <h3>published on : {getPublishedDate(blogInfo.publishedAt)}</h3>
                <p>Author: {blogInfo.author.user.firstName + " " + blogInfo.author.user.lastName}</p>
            </div>
        </div>
    )
}

export default SlideBlogItem;