import React, { useEffect, useState } from 'react';
import BlogRowCard from '../blogCard/BlogRowCard';
import './ReviewsPage.css';
import Footer from '../../footer/Footer';
import getInitialDataForCategoryUtility, {getSearchBlogPostInfoServiceUtility} from '../../../utilities/categoryScreenDataUtility';
import RightSearchBox from '../rightSearchBox/RightSearchBox';

function ReviewsPage() {

    const categoryName = "Review";
    const [blogsInfo, setBlogsInfo] = useState([]);
    const [currTag, setCurrTag] = useState({ id : -1, tagName : "trending"});
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchBlogsInfo, setsearchBlogsInfo] = useState([]);

    useEffect(() => {
        getInitialDataForScreen(0, -1);
        getSearchBlogInfo();
    }, [])

    const getSearchBlogInfo = () => {
        getSearchBlogPostInfoServiceUtility(categoryName, searchBlogsCallBackMethod);
    }

    const searchBlogsCallBackMethod = (response) => {
        if(response != "failure") {
            setsearchBlogsInfo(response);
        }
    }

    const paginationPrevButtonCss = (currPageNumber) => {
        if (currPageNumber < 0) {
            return `page-item li-width-inc disabled`;
        } else {
            return `page-item li-width-inc`;
        }
    }

    const paginationNextButtonCss = () => {
        if (blogsInfo.length == 0) {
            return `page-item li-width-inc disabled`;
        } else {
            return `page-item li-width-inc`;
        }
    }

    const loadNextPageContent = () => {
        const nextPageNumber = pageNumber + 1;
        setPageNumber(nextPageNumber);
        getInitialDataForScreen(nextPageNumber, currTag.id);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const loadPrevPageContent = () => {
        const prevPageNumber = pageNumber - 1;
        setPageNumber(prevPageNumber);
        getInitialDataForScreen(prevPageNumber, currTag.id);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const getInitialDataForScreen = (currPageNumber, tagId) => {
        const requestData = {
            categoryName: categoryName,
            pageNumber: currPageNumber.toString(),
            tagId: tagId.toString()
        }
        getInitialDataForCategoryUtility(requestData, callBackFunction);
    }

    const callBackFunction = (response) => {
        
        if (response !== "failure") {
            setBlogsInfo(response.blogs);
            if(response.defaultTag.id != currTag.id) {
                setCurrTag(response.defaultTag);
            }
            setTags(response.tags);
            setLoading(false);
        }
    }

    const updateCurrTag = (tag) => {
        setCurrTag(tag);
        setLoading(true);
        getInitialDataForScreen(0, tag.id);
    }

    return (
        <div >
            {
                loading ? (<div>Loading...</div>) :
                    (
                        <div className="tutorial-screen-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4e8a82" fillOpacity="1" d="M0,160L18.5,138.7C36.9,117,74,75,111,80C147.7,85,185,139,222,165.3C258.5,192,295,192,332,160C369.2,128,406,64,443,64C480,64,517,128,554,133.3C590.8,139,628,85,665,58.7C701.5,32,738,32,775,74.7C812.3,117,849,203,886,224C923.1,245,960,203,997,192C1033.8,181,1071,203,1108,197.3C1144.6,192,1182,160,1218,165.3C1255.4,171,1292,213,1329,229.3C1366.2,245,1403,235,1422,229.3L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
                            </svg>
                            <div className="body-container">

                                <div className="inner-container-blog">
                                    <div className="opacity-on-title">

                                        <h1 className="heading-1-review">Reviews</h1>
                                        <h3 className='hashtag-style'>#{currTag.tagName}</h3>
                                    </div>
                                    <div className='pagination-outer-container'>
                                        <nav className="" aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className={paginationPrevButtonCss(pageNumber-1)} onClick={loadPrevPageContent}>
                                                    <a className="page-link" aria-label="Previous">
                                                        <span className="text-color" aria-hidden="true">&laquo; Previous</span>
                                                    </a>
                                                </li>
                                                <li className={paginationNextButtonCss(pageNumber+1)} onClick={loadNextPageContent}>
                                                    <a className="page-link" aria-label="Next">
                                                        <span className="text-color" aria-hidden="true">Next &raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="blogs-container">
                                        {
                                            blogsInfo.map((blog, index) =>
                                                <BlogRowCard key={index} blogInfo={blog} fontStyle=""/>
                                            )
                                        }
                                    </div>
                                </div>
                                {tags != [] ? (
                                    <RightSearchBox tags={tags} updateCurrTag={updateCurrTag} searchblogsInfo={searchBlogsInfo} categoryName="Reviews" />
                                ) :
                                    (<div>Loading tags..</div>)
                                }
                            </div>
                            <Footer />
                        </div>
                    )
            }
        </div>
    )
}

export default ReviewsPage;