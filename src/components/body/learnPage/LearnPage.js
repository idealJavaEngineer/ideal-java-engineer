
import BlogRowCard from '../blogCard/BlogRowCard';
import './LearnPage.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';
import Footer from '../../footer/Footer';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function LearnPage() {

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
        <div >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#23236e" fill-opacity="1" d="M0,256L21.8,256C43.6,256,87,256,131,261.3C174.5,267,218,277,262,266.7C305.5,256,349,224,393,224C436.4,224,480,256,524,245.3C567.3,235,611,181,655,165.3C698.2,149,742,171,785,176C829.1,181,873,171,916,144C960,117,1004,75,1047,64C1090.9,53,1135,75,1178,112C1221.8,149,1265,203,1309,229.3C1352.7,256,1396,256,1418,256L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
            </svg>
            <div className="body-container">

                <div className="inner-container-blog">
                    <div className="opacity-on-title">

                        <h2 className="heading-1-learn">Tutorials</h2>
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
                    <h3 className="search-text-style">Search for a Tutorial</h3>
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

export default LearnPage;