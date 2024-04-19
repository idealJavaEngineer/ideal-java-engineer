import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../learnPage/LearnPage.css';
import React, {useState, useEffect} from 'react';
import TrieSearch from 'trie-search';
import SearchBlogModal from '../customModal/SearchBlogModal';


function RightSearchBox({tags, categoryName, updateCurrTag, searchblogsInfo}) {

    
    const trie = new TrieSearch('blogName');
    const [blogsInfoTrie, setBlogsInfoTrie] = useState(trie);    
    const [currBlogName, setCurrBlogName] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [searchedBlogPost, setSearchedBlogPost] = useState([]);

    useEffect(() => {
        setBlogsInfoInTrie();

    }, [searchblogsInfo]) 

    const setBlogsInfoInTrie = () => {
        trie.addAll(searchblogsInfo);
        setBlogsInfoTrie(trie);
    }


    const filterBlogByTag = (tag) => {
        if(tag === "default") {
            const defaultTag = { id : -1, tagName: "trending"};
            updateCurrTag(defaultTag);
        } else {
            updateCurrTag(tag);
        }
    }

    const searchBlogName = (event) => {
        setCurrBlogName(event.target.value);
    }

    const searchSimilarBlogs = () => {
        setSearchedBlogPost(blogsInfoTrie.search(`${currBlogName}`));
        setOpenModal(true);
    }

    return (
        <div className="hashtag-search-container">
            <h3 className="search-text-style kode-mono">Search for a {categoryName}</h3>
                    <div className="input-group mb-3">
                        <span className="search-block-style input-group-text" id="basic-addon1" onClick={searchSimilarBlogs}><h2 className="heading-4"><SearchRoundedIcon/></h2></span>
                        <input type="text" className="form-control search-block-style" placeholder={`${categoryName} Name`} aria-label="Blog Name" aria-describedby="basic-addon1" onChange={searchBlogName}/>
                    </div>
            <h5 className="search-text-style kode-mono">Filter {categoryName} by tags</h5>
            <div className="max-height-hastag-container">
                <div className="hashtag-button-container">
                    {
                        tags.map((tag, index) => 
                            <button key ={index} className='button-style-blog-page' onClick={() => filterBlogByTag(tag)}><p className="link-style-blog-page">#{tag.tagName}</p></button>
                        )
                    }
                    <button className='button-style-blog-page' onClick={() => filterBlogByTag("default")}><p className="link-style-blog-page">#trending</p></button>
                </div>
            </div>
            <SearchBlogModal
                open={openModal}
                searchedName = {currBlogName}
                categoryName = {categoryName}
                searchBlogResult={searchedBlogPost}
                onClose={() => setOpenModal(false)} 
                        />
        </div>
    )
}

export default RightSearchBox;