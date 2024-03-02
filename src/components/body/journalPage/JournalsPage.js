
import BlogRowCard from '../blogCard/BlogRowCard';
import './JournalsPage.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';
import Footer from '../../footer/Footer';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function JournalsPage() {

    const blogData = {
        imageUrl: backgroundImage1,
        title: "A Solo Trip to Nainital",
        description: "what its like to be solo on a trip",
        author: {
            authorName: "Tanuj Yadav",
            authorDesignation: "owner of Website"
        }
    }

    return (
        <div className='journal-background-image'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4d1818" fillOpacity="1" d="M0,320L18.5,309.3C36.9,299,74,277,111,240C147.7,203,185,149,222,112C258.5,75,295,53,332,64C369.2,75,406,117,443,160C480,203,517,245,554,224C590.8,203,628,117,665,96C701.5,75,738,117,775,133.3C812.3,149,849,139,886,165.3C923.1,192,960,256,997,261.3C1033.8,267,1071,213,1108,186.7C1144.6,160,1182,160,1218,170.7C1255.4,181,1292,203,1329,202.7C1366.2,203,1403,181,1422,170.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
            <div className="body-container">

                <div className="inner-container-blog">
                    <div className="opacity-on-title">

                        <h2 className="heading-1-journal">Journals</h2>
                        <h3 className="hashtag-style">#trending</h3>
                    </div>
                    <div className="blogs-container">
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                        <BlogRowCard cardInfo={blogData} />
                    </div>
                    <div className='pagination-outer-container'>
                        <nav className="" aria-label="Page navigation example">
                            <ul className="pagination ">
                                <li className="page-item li-width-inc">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span className="text-color" aria-hidden="true">&laquo; Previous</span>
                                    </a>
                                </li>
                                <li className="page-item li-width-inc">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span className="text-color" aria-hidden="true">Next &raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="hashtag-search-container">
                    <h3 className="search-text-style">Search for a Journal</h3>
                    <div className="input-group mb-3">
                        <span className="search-block-style input-group-text " id="basic-addon1"><h2 className="heading-4"><SearchRoundedIcon /></h2></span>
                        <input type="text" className="form-control search-block-style" placeholder="Blog Name" aria-label="Blog Name" aria-describedby="basic-addon1" />
                    </div>
                    <h4>Filter blogs by hashtags</h4>
                    <div className="max-height-hastag-container">
                        <div className="hashtag-button-container">
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#trending</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#fiction</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#latest</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#sports</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#what if</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#food</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#game</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#lifestyle</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#music</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#trending</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#fiction</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#latest</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#sports</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#what if</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#food</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#game</p></button>
                            <button className='button-style-blog-page'><p className="link-style-blog-page">#lifestyle</p></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JournalsPage;