class Validator {

    constructor(commands) {
        this.validCommands = commands;
        this.error = "";
    }

    isValidCommand(command) {


        if (this.validCommands.indexOf(command) >= 0) {
            return true;
        }
        else {
            this.error = command + " is not a valid Text Parser command. Execute 'help' for list of commands";
            return false;
        }

    }

    isValidLine(line) {

        if (line % 1 !== 0) {
            this.error = "Are you sure about line numbers being decimal?";
            return false;
        }

        else if (line < 0) {
            this.error = "Line number should be >= 0";
            return false;
        }

        else if (line >= this.maxLines) {

            this.error = "Line " + line + " doesn't exists";
            return false;
        }

        return true;
    }


    isValidDelete(command) {
        if (command.length > 2) {
            this.error = "The delete command (d) received too many arguments. syntax : d &lt;line-number&gt;";
            return false;
        }
        else if (command.length < 2) {
            this.error = "The delete command (d) requires the line number. syntax : d &lt;line-number&gt;";
            return false;
        }
        return true;

    }

    isValidInsert(command) {
        if (command.length > 3) {
            this.error = "The insert command (i) received too many arguments. syntax : i &lt;line-number&gt; &lt;line-text&gt;";
            return false;
        }
        else if (command.length < 3) {
            this.error = "The insert command (i) requires the line number and the text to insert. syntax : i &lt;line-number&gt; &lt;line-text&gt;";
            return false;
        }
        return true;
    }

    isvalidSearchReplace(command) {
        if (command.length > 4) {
            this.error = "Too many arguments for sr. Syntax : sr &lt;search-string&gt &lt;replace-string&gt; (optionaly) &lt;line-number&gt";
            return false;
        }
        else if (command.length < 3) {
            this.error = "Too few arguments for sr. Syntax : sr &lt;search-string&gt &lt;replace-string&gt; (optionaly) &lt;line-number&gt ";
            return false;
        }
        return true;

    }

    isValidReverse(command) {
        if (command.length > 2) {
            this.error = "The reverse command (rev) received too many arguments. syntax : rev &lt;line-number&gt;";
            return false;
        }
        else if (command.length < 2) {
            this.error = "The reverse command (rev) requires the line number. syntax : rev &lt;line-number&gt;";
            return false;
        }
        return true;
    }

}

export default Validator;