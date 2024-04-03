import React, {useEffect, useState} from 'react';
import BlogRowCard from '../blogCard/BlogRowCard';
import './RoadMap.css';
import backgroundImage1 from '../../../static/images/backgroundImage1.jpg';
import Footer from '../../footer/Footer';
import getInitialDataForCategoryUtility from '../../../utilities/categoryScreenDataUtility';
import RightSearchBox from '../rightSearchBox/RightSearchBox';
import RoadMapPage from './RoadMapPage';


function RoadMap() {

    const [blogsInfo, setBlogsInfo] = useState([]);
    const [defaultTag, setDefaulTag] = useState("tranding");
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div >
            {
                loading ? (<div>Loading...</div>) :
                    (
                        <div className="tutorial-screen-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#000000" fillOpacity="1" d="M0,256L26.7,218.7C53.3,181,107,107,160,85.3C213.3,64,267,96,320,101.3C373.3,107,427,85,480,74.7C533.3,64,587,64,640,101.3C693.3,139,747,213,800,250.7C853.3,288,907,288,960,250.7C1013.3,213,1067,139,1120,128C1173.3,117,1227,171,1280,197.3C1333.3,224,1387,224,1413,224L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                            </svg>
                            <div className="body-container">

                                <div className="inner-container-roadmap">
                                    <div className="opacity-on-title">
                                        <h1 className="heading-1-roadMap">Road Maps</h1>
                                    </div>
                                        <RoadMapPage />
                                </div>
                            </div>
                            <Footer />
                        </div>
                    )
            }
        </div>
    )
}

export default RoadMap;