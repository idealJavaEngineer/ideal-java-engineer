import TextEditor from "./TextEditor";
import './CustomTestEditor.css';
import { useState } from 'react';
import InputModal from "./InputModal";
import UploadBlogPostUtility from '../../../utilities/uploadBlogPostUtility';

function CustomTextEditor() {
    const [editorOutput, setEditorOutput] = useState("");
    const [showData, setshowData] = useState(true);
    const [isModalData, setIsModalData] = useState({
        tags : "",
        category : "",
        blogName : ""
    });

    
    const submitTheBlog = () => {
        const blogPostData = {
           tags : isModalData.tags,
           category : isModalData.category,
           blogName : isModalData.blogName,
           blogContent :  editorOutput
        }
        UploadBlogPostUtility(1, blogPostData, callBackFunction);
    }

    const callBackFunction = (response) => {
        alert(response);
    }

    return (
        <div className="text-editor">
            <div className="editor-container">
            <h2>Text Editor Input</h2>
                <div className="editor-style">
                    <TextEditor setEditorOutput={setEditorOutput} />
                </div>
                <div>
                    <InputModal isModalData={isModalData} setIsModalData={setIsModalData}/>
                    <button className='save-blog-button' onClick={submitTheBlog}>Save And Publish</button>
                </div>
            </div>
            
            <div className="editor-output">
            <h2>Text Editor Output</h2>
            <div className ="output-border">
                <div dangerouslySetInnerHTML={{ __html: editorOutput }} />
            </div>
            </div>
        </div>
    )
}

export default CustomTextEditor;