import React, { useEffect, useState } from 'react';
import BlogRowCard from '../blogCard/BlogRowCard';
import './LearnPage.css';
import Footer from '../../footer/Footer';
import getInitialDataForCategoryUtility from '../../../utilities/categoryScreenDataUtility';
import RightSearchBox from '../rightSearchBox/RightSearchBox';

function LearnPage() {

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
            categoryName: "Tutorial",
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#23236e" fillOpacity="1" d="M0,256L21.8,256C43.6,256,87,256,131,261.3C174.5,267,218,277,262,266.7C305.5,256,349,224,393,224C436.4,224,480,256,524,245.3C567.3,235,611,181,655,165.3C698.2,149,742,171,785,176C829.1,181,873,171,916,144C960,117,1004,75,1047,64C1090.9,53,1135,75,1178,112C1221.8,149,1265,203,1309,229.3C1352.7,256,1396,256,1418,256L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
                            </svg>
                            <div className="body-container">

                                <div className="inner-container-blog">
                                    <div className="opacity-on-title">

                                        <h1 className="heading-1 kode-mono">Tutorials</h1>
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

export default LearnPage;