import TextEditor from "./TextEditor";
import './CustomTestEditor.css';
import { useState } from 'react';
import InputModal from "./InputModal";
import UploadBlogPostUtility from '../../../utilities/uploadBlogPostUtility';
import {uploadCoverImageUtility} from '../../../utilities/s3ImageCrudUtility';

function CustomTextEditor() {
    const [editorOutput, setEditorOutput] = useState("");
    const [showData, setshowData] = useState(true);
    const [isModalData, setIsModalData] = useState({
        tags: "",
        category: "",
        blogName: "",
        blogImageUrl: "https://drive.google.com/uc?export=view&id=1t-1p97-2Y-IgBCTe88t5bujOuYfavBgR"
    });
    const currBlogId = -1;


    const submitTheBlog = () => {
        const blogPostData = {
            tags: isModalData.tags,
            category: isModalData.category,
            blogName: isModalData.blogName,
            imageUrl: isModalData.blogImageUrl,
            blogContent: editorOutput
        }
        UploadBlogPostUtility(1, blogPostData, callBackFunction);
    }

    const callBackFunction = (response) => {
        console.log(response);
        currBlogId = response.blogId;
    }

    const submitCoverImage = () => {
        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];
        uploadCoverImageUtility(2, file, callBackForImageUpload);
    }

    const callBackForImageUpload = (response) => {
        console.log(response);
    }

    return (
        <div className="text-editor">
            <div className="editor-container">
                <h2>Text Editor Input</h2>
                <div className="editor-style">
                    <TextEditor setEditorOutput={setEditorOutput} />
                </div>
                <div>
                    <InputModal isModalData={isModalData} setIsModalData={setIsModalData} />
                    <button className='save-blog-button' onClick={submitTheBlog}>Save And Publish</button>
                    <p>*please upload the cover image if available its size should be less then 800KB</p>
                    
                    <div className="upload-image-container">
                        <form id="uploadForm" encType="multipart/form-data">
                            <input type="file" id="imageInput" name="image" accept="image/*"/>
                            <button className='save-blog-button' type="button" onClick={submitCoverImage}>Upload</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="editor-output">
                <h2>Text Editor Output</h2>
                <div className="output-border">
                    <div dangerouslySetInnerHTML={{ __html: editorOutput }} />
                </div>
            </div>
        </div>
    )
}

export default CustomTextEditor;