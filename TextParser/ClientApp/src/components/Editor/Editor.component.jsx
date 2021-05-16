import React, { useState } from "react";
import "./Editor.styles.css";
import FileUploaded from "../FilesUploaded/FilesUploaded.component";
import FileContent from "../FileContent/FileContent.component";
import CommandLine from "../CommandLine/CommandLine.component";

const Editor = () => {

    const [currentFile, updateCurrentFile] = useState("");
    const [content, updateContent] = useState(null);
    return (
        <div className="editor">
            <FileUploaded
                currentFile={currentFile} updateCurrentFile={updateCurrentFile} />
            <FileContent
                currentFile={currentFile}
                content={content} updateContent={updateContent} />
            <CommandLine
                currentFile={currentFile}
                content={content} updateContent={updateContent} />
        </div>
    )
}

export default Editor;