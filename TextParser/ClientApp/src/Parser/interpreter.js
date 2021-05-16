import Validator from "./validator";

class Interpreter {

    constructor() {

        this.validCommands = ["d", "i", "sr", "rev"];
        this.validator = new Validator(this.validCommands);
        this.errorSummary = () => { return this.validator.error }
        this.content = "";
    }

    deleteLine(command) {

        if (this.validator.isValidDelete(command)) {

            let lineNumberToDelete = Number(command[1])
            if (!isNaN(lineNumberToDelete)) {

                if (this.validator.isValidLine(lineNumberToDelete)) {
                    this.content.splice(lineNumberToDelete, 1);                
                    return true;
                }

                return false;
            }

            else {
                this.validator.error = "The correct syntax is : d &lt;line-number&gt;";
                return false;
            }

        }

        return false;
    }

    insertLine(command) {

        if (this.validator.isValidInsert(command)) {

            let lineNumberToInsert = Number(command[1])
            if (!isNaN(lineNumberToInsert)) {

                if (this.validator.isValidLine(lineNumberToInsert) || lineNumberToInsert === this.content.length) {
                    this.content.splice(lineNumberToInsert, 0, command[2].replace(/['"]+/g, ''));
                    return true;
                }

                return false;
            }

            else {
                this.validator.error = "The correct syntax is : d &lt;line-number&gt;";
                return false;
            }

        }

        return false;
    }

    searchReplace(command) {

        if (this.validator.isvalidSearchReplace(command)) {

            let stringToSearch = command[1].replace(/['"]+/g, '');
            let stringToReplaceWith = command[2].replace(/['"]+/g, '');

            if (command.length === 4) {

                let lineNumberToReplaceOn = Number(command[3])
                if (!isNaN(lineNumberToReplaceOn)) {

                    if (this.validator.isValidLine(lineNumberToReplaceOn)) {

                        this.content[lineNumberToReplaceOn] = this.content[lineNumberToReplaceOn].replace(new RegExp(stringToSearch, 'g'), stringToReplaceWith);
                        return true;
                    }

                    return false;
                }

                else {
                    this.validator.error = "The correct syntax is : sr &lt;search-string&gt &lt;replace-string&gt; (optionaly) &lt;line-number&gt ";
                    return false;
                }
                ;
            }

            else {
                for (let i = 0; i < this.content.length; ++i)
                {
                    this.content[i] = this.content[i].replace(new RegExp(stringToSearch, 'g'), stringToReplaceWith);
                }
                return true;
            }
        }

        return false;
    }

    reverseLine(command) {

        if (this.validator.isValidReverse(command)) {

            let lineNumberToReverse = Number(command[1])
            if (!isNaN(lineNumberToReverse)) {

                if (this.validator.isValidLine(lineNumberToReverse)) {
                    this.content[lineNumberToReverse] = this.content[lineNumberToReverse].split("").reverse().join("");
                    return true;
                }

                return false;
            }

            else {
                this.validator.error = "The correct syntax is : rev &lt;line-number&gt;";
                return false;
            }

        }

        return false;
        
    }

    decide(command) {

        let returnValue = false;
        
        switch (command[0]) {

            case "d":
                returnValue = this.deleteLine(command);
                break;
            case "i":
                returnValue = this.insertLine(command);
                break;
            case "sr":
                returnValue = this.searchReplace(command);
                break;
            case "rev":
                returnValue = this.reverseLine(command);
                break;
            default:
                this.validator.error = "This command, although being a correct one, isn't implemented yet";
                returnValue = false;

        }

        return returnValue;
    }

    execute(fullCommand, content) {

        let command = fullCommand.match(/(?:[^\s"]+|"[^"]*")+/g)
        if (!command) {
            this.validator.error = "Enter a valid command. Type 'help' for list of avaiable commands";
            return false;
        }
        this.validator.maxLines = content.length;

        if (this.validator.isValidCommand(command[0])) {
           
            this.content = content;
            return this.decide(command);
        }

        return false;
    }
}

export default new Interpreter();