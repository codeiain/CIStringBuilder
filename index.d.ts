/**
* @module ci
* @submodule String
* @class ci.StringBuilder
*
*/
declare class CIStringBuilder {
    public newLineCharacter: string;
    public strings: string[];
    /**
    * Creates a new string builder object
    * @class ci.StringBuilder
    * @constructor
    * @param {string} value the base vaule if required
    * @example var sb = new ci.StringBuilder();
    * @example var sb = new ci.StringBuilder("test");
    * @since 1.0.0
    */
    constructor(value?: string);
    /**
    * Appends a string to the string builder
    * @method append
    * @param {string} value the string to add to the string builder
    * @since 1.0.0
    */
    public append(value: string): void;
    /**
    * Appends a string to the string builder followed by a new line
    * @method appendLine
    * @param {string} value the string to add to the string builder
    * @since 1.0.0
    */
    public appendLine(value: string): void;
    /**
    * Appends a  formated String
    * @method appendFormat
    * @param {string} values the string to be foramted e.g "Added {0} by {1} to your collection"
    * @param {array} values to enter in to the string e.g. "title","artist"
    * @since 1.0.0
    */
    public appendFormat(value: string, args: any): void;
    /**
    * Clears the string builder
    * @method clear
    * @since 1.0.0
    */
    public clear(): void;
    /**
    * The string builder to string
    * @method toString
    * @return {string} the content of the string builder as a string
    * @since 1.0.0
    */
    public toString(): string;
}
export = CIStringBuilder;
