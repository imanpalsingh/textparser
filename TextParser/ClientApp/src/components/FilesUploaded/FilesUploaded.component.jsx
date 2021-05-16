import React, { useEffect, useState} from "react";
import { UploadedFileNames } from "../../DataHandler/get";
import DeleteFile from "../../DataHandler/delete";
import "./FilesUploaded.styles.css";

const FilesUploaded = ({ currentFile, updateCurrentFile }) => {

    const [filenames, updateFilenames] = useState([])
    
    useEffect(
        () => {
            UploadedFileNames()
                .then(res => {
                    updateFilenames(res.data);
                })
        }, []
    )

    useEffect(
        () => {
            if (filenames.length)
                updateCurrentFile(filenames[0])
            else
                updateCurrentFile(null)
        }, [filenames, updateCurrentFile]
    )

    const changeCurrentFile = (filename) => {
        updateCurrentFile(filename);
    }

    const unloadFile = (filename) => {
        DeleteFile(filename)
            .then(res => {
                let newFilenames = filenames.filter(f => f !== filename)
                updateFilenames(newFilenames)
            })

    }

 
    return (
        <div className="files-uploaded scroll-bar-custom">
            <h4 className="file-heading"> Files Loaded </h4>

            <div className="filenames">
                {
                    filenames.length ?
                        filenames.map((filename, index) => (
                            <div key={index} className={"filename-holder " + (filename === currentFile ? " selected" : "")}>
                                <p className="filename" title={filename} onClick={() => changeCurrentFile(filename)}>
                                   
                                        <span className="material-icons file-uploaded" title={"Download " + filename}>
                                            <a className="download-link" href={"api/file/download/" + filename} title={"Download " + filename} >file_download</a>
                                        </span>
                                  
                                     {(filename.length > 10) ? filename.slice(0, 9) + "...." : filename}
                                </p>
                                <div className="unload-file">
                                    <span className="material-icons" title="Unload the file" onClick={() => { unloadFile(filename) }}>
                                        close
                            </span>
                                </div>
                            </div>))
                        :
                        "No files found"
                }

            </div>
        </div>
    )
}
export default FilesUploaded;