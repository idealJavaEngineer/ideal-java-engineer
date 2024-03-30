import './Navbar.css';
import dtdJournalLogo from '../../static/images/ideal-java-engineer-logos.png';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPageInstance } from '../../store/slices/CurrentPageSlice';
import {  
  Link
} from "react-router-dom";


function Navbar() {

  const currentPageState = useSelector((state) => state.currentPageState.currentPageInstance)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="outer-nav-container">
        <div className="log-container">
          <img className="logo-style" src={dtdJournalLogo} alt="DTD Journal" />
        </div>
        <div className="nav-option-container">
          <div className="nav-option-container-li"> 
            <button className='nav-option-style' onClick={() => dispatch(changeCurrentPageInstance('Home'))}><Link className="link-decoration" to="/home">Home</Link></button>
            <button className='nav-option-style' onClick={() => dispatch(changeCurrentPageInstance('Blog'))}><Link className="link-decoration" to="/road-map">RoadMaps</Link></button>
            <button className='nav-option-style'><Link className="link-decoration" to="/tutorial">Tutorials</Link></button>
            <button className='nav-option-style'><Link className="link-decoration" to="/journal">Journals</Link></button>
            <button className='nav-option-style'><Link className="link-decoration" to="/review">Reviews</Link></button>
            <button className='nav-option-style'><Link className="link-decoration" to="/about">AboutUs</Link></button>
          </div>
        </div>
        {/* <div className="profile-container">
          <button className="profile-button-style">Profile</button>
        </div> */}
      </div>

    </div>
  )
}

export default Navbar;
