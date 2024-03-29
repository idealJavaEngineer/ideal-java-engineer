import './SlidingBlogs.css';
import SlideBlogItem from './SlideBlogItem';
import SlideBlogItemActive from './SlideBlogItemActive';

function SlidingBlogs({blogsInfo}) {

    const preImageLink = "https://drive.google.com/uc?export=view&id=1t-1p97-2Y-IgBCTe88t5bujOuYfavBgR";



    return (
        <div className="slidebar-outer-container">
                <div id="carouselExampleIndicators" className="carousel slide container-dimension" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <SlideBlogItemActive imageLink={blogsInfo.mostLiked[0].imageUrl} blogInfo={blogsInfo.mostLiked[0]} />
                        <SlideBlogItem imageLink={blogsInfo.mostLiked[1].imageUrl} blogInfo={blogsInfo.mostLiked[1]} />
                        <SlideBlogItem imageLink={blogsInfo.mostLiked[2].imageUrl} blogInfo={blogsInfo.mostLiked[2]} />
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="sr-only">Next</span>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
        </div >

    )
}

export default SlidingBlogs;