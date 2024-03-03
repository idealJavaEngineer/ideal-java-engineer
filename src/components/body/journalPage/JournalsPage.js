import React, { useEffect, useState } from 'react';
import BlogRowCard from '../blogCard/BlogRowCard';
import './JournalsPage.css';
import Footer from '../../footer/Footer';
import getInitialDataForCategoryUtility from '../../../utilities/categoryScreenDataUtility';
import RightSearchBox from '../rightSearchBox/RightSearchBox';

function JournalsPage() {

    const [blogsInfo, setBlogsInfo] = useState([]);
    const [currTag, setCurrTag] = useState({ id : -1, tagName : "trending"});
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        getInitialDataForScreen(0, -1);

    }, [])

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
            categoryName: "Journal",
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
                        <div className="Journal-screen-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4d1818" fillOpacity="1" d="M0,320L18.5,309.3C36.9,299,74,277,111,240C147.7,203,185,149,222,112C258.5,75,295,53,332,64C369.2,75,406,117,443,160C480,203,517,245,554,224C590.8,203,628,117,665,96C701.5,75,738,117,775,133.3C812.3,149,849,139,886,165.3C923.1,192,960,256,997,261.3C1033.8,267,1071,213,1108,186.7C1144.6,160,1182,160,1218,170.7C1255.4,181,1292,203,1329,202.7C1366.2,203,1403,181,1422,170.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>

                            <div className="body-container">

                                <div className="inner-container-blog">
                                    <div className="opacity-on-title">

                                        <h1 className="heading-1-journal kode-mono">Journals</h1>
                                        <h3 className='hashtag-style kode-mono'>#{currTag.tagName}</h3>
                                    </div>
                                    <div className='pagination-outer-container'>
                                        <nav className="" aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className={paginationPrevButtonCss(pageNumber-1)} onClick={loadPrevPageContent}>
                                                    <a className="page-link" aria-label="Previous">
                                                        <span className="text-color kode-mono" aria-hidden="true">&laquo; Previous</span>
                                                    </a>
                                                </li>
                                                <li className={paginationNextButtonCss(pageNumber+1)} onClick={loadNextPageContent}>
                                                    <a className="page-link" aria-label="Next">
                                                        <span className="text-color kode-mono" aria-hidden="true">Next &raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="blogs-container">
                                        {
                                            blogsInfo.map((blog, index) =>
                                                <BlogRowCard key={index} blogInfo={blog} />
                                            )
                                        }
                                    </div>
                                </div>
                                {tags != [] ? (
                                    <RightSearchBox tags={tags} updateCurrTag={updateCurrTag} categoryName="Tutorials" />
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

export default JournalsPage;