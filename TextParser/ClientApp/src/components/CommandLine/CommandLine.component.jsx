import React, { useState } from "react";
import "./CommandLine.styles.css";
import Parser from "../../Parser/interpreter";
import Updator from "../../DataHandler/update";

const CommandLine = ({ content, updateContent, currentFile }) => {

    const [currentCommand, updateCurrentCommand] = useState("");
    const commandChange = (e) => {
        updateCurrentCommand(e.target.value);
    }

    const UpdateContentToServer = (_content) => {
        Updator({ name: currentFile, content: _content.join("\n")})
            .then(res => {
                updateContent([..._content]);
            })
    }

    const execute = (e) => {
        if (e.key === "Enter") {

            
            let summarySpan = document.querySelector(".cmd-des");

            if (currentFile === null) {
                summarySpan.innerHTML = "No file is currently loaded. Either Select a file or upload one";
                summarySpan.style = "color:red";
                return;
            }

            if (currentCommand === "" || currentCommand === "help") {
                summarySpan.innerHTML = "Valid commands are : " + Parser.validCommands;
                summarySpan.style = "color:white";
                return;
            }

            let result = Parser.execute(currentCommand, content);
            let summary = result ? currentCommand + " executed successfully." : Parser.errorSummary();

            if (summary.length > 150) {
                summary = result?"Command Executed successfully.":"Invalid Command and possibly too long."
            }
            summarySpan.innerHTML=summary
            summarySpan.style = result ? "color:green" : "color:red";

            if (result) UpdateContentToServer(Parser.content);
        }
    }

    return (
        <div className="command-line">
            <input type="text" className="command-text" value={currentCommand} onKeyDown={(e) => { execute(e) }} onChange={(e) => commandChange(e)} autoFocus maxLength={200}/>
            <span className="cmd-des">
                Text Parser, Version 0.1  - Imanpal Singh 2021
                </span>
            <span className="cmd">Command&gt;&gt;</span>
        </div>
    )
}

export default CommandLine;