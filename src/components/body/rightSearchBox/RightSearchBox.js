import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../blogPage/BlogPage.css';

function RightSearchBox(props) {

    return (
        <div className="hashtag-search-container">
            <h3 className="search-text-style">Search for a {props.title}</h3>
                    <div className="input-group mb-3">
                        <span className="search-block-style input-group-text " id="basic-addon1"><h2 className="heading-4"><SearchRoundedIcon /></h2></span>
                        <input type="text" className="form-control search-block-style" placeholder="Blog Name" aria-label="Blog Name" aria-describedby="basic-addon1" />
                    </div>
            <h4 className="search-text-style">Filter {props.title} by hashtags</h4>
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
    )
}

export default RightSearchBox;