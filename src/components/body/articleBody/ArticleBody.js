import Footer from '../../footer/Footer';
import './ArticleBody.css'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import CustomTextEditor from '../textEditor/CustomTextEditor';

function ArticleBody() {

    return (
        <div>
            
            <div className="outer-container">
                <div className="button-title-container">
                    <div className="back-button-container">
                        <KeyboardBackspaceRoundedIcon className="icon-style" />
                    </div>
                    <div className="title-style">
                        <h1 className='heading1-style'>Three Hour Rule</h1>
                    </div>
                </div>
                <div className="body-content-container">
                    <div className="description-container">
                        <div className="description-space">
                            <h2 className="Description-style">Description:</h2>
                        </div>
                        <div>
                            <p className="content-style"> If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.</p>
                        </div>
                    </div>
                    <div className="description-container">
                        <div className="description-space">
                            <h2 className="Description-style">Discussion:</h2>
                        </div>
                        <div>
                            <p className="content-style">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                            <p className="content-style">Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. </p>
                        </div>
                    </div>
                    <div className="description-container">
                        <div className="description-space">
                            <h2 className="Description-style">Conclusion:</h2>
                        </div>
                        <div>
                            <p className="content-style">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ArticleBody;