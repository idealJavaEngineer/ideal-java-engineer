import './App.css';
import Home from "./components/body/homePage/Home";
import BlogPage from './components/body/blogPage/BlogPage';
import { useSelector } from 'react-redux';
import Navbar from './components/header/Navbar';
import CustomTextEditor from './components/body/textEditor/CustomTextEditor';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AdminPage from './components/body/adminPage/AdminPage';
import LearnPage from './components/body/learnPage/LearnPage';
import JournalsPage from './components/body/journalPage/JournalsPage';
import ReviewsPage from './components/body/reviewPage/ReviewsPage';
import AboutUs from './components/body/aboutUs/AboutUs';

function App() {
  const currPageState = useSelector((state) => state.currentPageState.currentPageInstance);
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/road-map' element={<BlogPage />}></Route>
        <Route exact path='/tutorial' element={<LearnPage />}></Route>
        <Route exact path='/journal' element={<JournalsPage />}></Route>
        <Route exact path='/review' element={<ReviewsPage />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/admin' element={<AdminPage />}></Route>
        <Route exact path='/text-editor' element={<CustomTextEditor />}></Route>
        <Route exact path='/tutorial/:id' element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
