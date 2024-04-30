import './BlogCard.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';

function BlogCard({ blogInfo }) {

    const coverImage = "https://ideal-java-engineer-01.s3.ap-south-1.amazonaws.com/";
    
    const routeToBlogPage = () => {
        window.location.href = `${process.env.PUBLIC_URL}/blog-post/${blogInfo.blogId}`;
    }

    const getPublishedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.getDate() + "/" + date.toLocaleString('en', { month: 'long' }) + "/" + date.getFullYear();
    }


    return (
        <>
            {
                blogInfo != null ?
                    (
                        <div className="blog-container" onClick={routeToBlogPage}>
                            <div className="image-container">
                                <img className="image-decoration" src={coverImage + blogInfo.imageUrl} alt={blogInfo.blogName} />
                            </div>
                            <div className="descr-container">
                                <h3 className="desc-h3">{blogInfo.blogName}</h3>
                                <p className="desc-p">published on : {getPublishedDate(blogInfo.publishedAt)}</p>
                                <div className="author-container">
                                    <h4 className="desc-h4">Author: {blogInfo.author.user.firstName + " " + blogInfo.author.user.lastName}</h4>
                                    <h5 className="desc-h5">{blogInfo.author.expertise}</h5>
                                </div>
                            </div>
                        </div>)
                    : (<p>Loading..</p>)
            }

        </>
    )
}

export default BlogCard;