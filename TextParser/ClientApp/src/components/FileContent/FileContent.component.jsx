import React, { useEffect } from "react";
import { CurrentFileContent } from "../../DataHandler/get";
import "./FileContent.styles.css";

const FilesContent = ({ currentFile, content, updateContent }) => {
    
    useEffect(
        () => {

            if (currentFile) {
                CurrentFileContent(currentFile)
                    .then(res => {
                        updateContent(res.data.split("\n"));
                    })
            }
            else {
                updateContent(null);
            }

        }, [currentFile, updateContent]
    )

    return (
        <div className="file-content-display scroll-bar-custom">
            <h4 className="file-heading"> {currentFile} </h4>
            <br />
            { 
                content?
                    content.map((line, number) => {
                        return (
                            <div className="line" key={number}>
                                <div className="number">
                                    {number}
                                </div>
                                <div className="content-line">
                                    {line}
                                </div>
                            
                            </div>
                        )
                    })
                    :
                    "Select a file from uploaded files or upload a new file"

            }
        </div>
    )
}

export default FilesContent;