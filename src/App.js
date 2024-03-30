import './App.css';
import Home from "./components/body/homePage/Home";
import RoadMap from './components/body/roadMap/RoadMap';
import { useSelector } from 'react-redux';
import Navbar from './components/header/Navbar';
import CustomTextEditor from './components/body/textEditor/CustomTextEditor';
import {
  Routes,
  Route
} from "react-router-dom";
import AdminPage from './components/body/adminPage/AdminPage';
import LearnPage from './components/body/learnPage/LearnPage';
import JournalsPage from './components/body/journalPage/JournalsPage';
import ReviewsPage from './components/body/reviewPage/ReviewsPage';
import AboutUs from './components/body/aboutUs/AboutUs';
import BlogArticle from './components/body/blogArticleScreen/BlogArticle';

function App() {
  const currPageState = useSelector((state) => state.currentPageState.currentPageInstance);
  return (
    <div className='App'>
      <Navbar />
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/road-map' element={<RoadMap />}></Route>
          <Route path='/tutorial' element={<LearnPage />}></Route>
          <Route path='/journal' element={<JournalsPage />}></Route>
          <Route path='/review' element={<ReviewsPage />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/text-editor' element={<CustomTextEditor />}></Route>
          <Route path='/blog-post/:id' element={<BlogArticle />}></Route>
        </Routes>
    </div>
  );
}

export default App;
