import React, { useRef, useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./UploadButton.styles.css";
import UploadFiles from "../../DataHandler/upload";
import { useHistory } from "react-router-dom";

const UploadButton = () => {

    const history = useHistory();
    const inputFile = useRef(null);
    const [uploaded, updateUploaded] = useState(false)

    useEffect(
        () => {
            
            if (uploaded) {
                history.push("/editor");
            }
          
        },
        [uploaded, history])

    const onUploadClick = () => {
       
        inputFile.current.click();
    }

    const onUpload = (e) => {
       
        const files = e.target.files;
        if (!files) return;
        UploadFiles(files)
            .then(
                res => {
                    
                    updateUploaded(true);
                }
            )

    }

    return (
        <>
            <input type='file' id='file' name="uploadedFile" ref={inputFile} style={{ display: 'none' }} onChange={(e) => onUpload(e)} multiple />
            <Button outline color="primary" className="upload-button" onClick={()=>onUploadClick()}>
                <div className="arrange">
                    <span className="material-icons upload-file">
                        upload_file
                </span>
                Upload files
             </div>
            </Button>
        </>
    )
}

export default UploadButton;