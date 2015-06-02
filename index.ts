/**
* @module ci
* @submodule String
* @class ci.StringBuilder
*
*/
class CIStringBuilder {

    newLineCharacter: string = "\r\n";
    strings: string[];
    /**
     * Creates a new string builder object
     * @class ci.StringBuilder
     * @constructor
     * @param {string} value the base vaule if required
     * @example var sb = new ci.StringBuilder();
     * @example var sb = new ci.StringBuilder("test");
     * @since 1.0.0
     */
    constructor(value?: string) {
        this.strings = new Array();
        if (value !== undefined) {
            this.strings.push(value);
        }
    }
    
    /** 
    * Appends a string to the string builder
    * @method append
    * @param {string} value the string to add to the string builder
    * @since 1.0.0
    */
    append(value: string) {
        if (value) {
            this.strings.push(value);
        }
    }

    /** 
     * Appends a string to the string builder followed by a new line
     * @method appendLine
     * @param {string} value the string to add to the string builder
     * @since 1.0.0
     */
    appendLine(value: string) {
        if (value) {
            this.strings.push(value);
            this.strings.push(this.newLineCharacter);
        }
    }
    
    /**
     * Appends a  formated String
     * @method appendFormat
     * @param {string} values the string to be foramted e.g "Added {0} by {1} to your collection"
     * @param {array} values to enter in to the string e.g. "title","artist"
     * @since 1.0.0
     */
    appendFormat(value: string, args: any) {
        var i = args.length;

        while (i--) {
            value = value.replace(new RegExp('\\{' + i + '}', 'gm'), args[i]);
        }
        this.strings.push(value);
    }

    /**
     * Clears the string builder
     * @method clear
     * @since 1.0.0
     */
    clear() {
        this.strings.length = 1;
    }

    /**
     * The string builder to string
     * @method toString
     * @return {string} the content of the string builder as a string
     * @since 1.0.0
     */
    toString() : string {
        return this.strings.join("");
    }
}

export = CIStringBuilder;