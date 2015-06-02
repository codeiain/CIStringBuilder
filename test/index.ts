/// <reference path="../index.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />



import chai = require('chai');
var expect = chai.expect;

import StringBuilder = require('../index');

it('append', (done) => {
    var sb = new StringBuilder();

    var expected = "string1";
    //Act
    sb.append("string1")
    var result = sb.toString();
    expect(result).to.equal(expected);
    done();
});

it('appendFormat', (done) => {
    var sb = new StringBuilder();

    var expected = "This is a test of the format function";
    sb.append("This");
    sb.appendFormat(" is a test of the {0} function", ["format"]);

    var result = sb.toString();

    expect(result).to.equal(expected);
    done();

});

it('appendLine', (done) => {
    var sb = new StringBuilder();
    var expected = "This is a test of the \r\n appendLine function";
    //Act
    sb.appendLine("This is a test of the ");
    sb.append(" appendLine function");

    var result = sb.toString();

    expect(result).to.equal(expected);
    done();

});

it('clear', (done) => {
    var sb = new StringBuilder();
    sb.appendLine("This is a test of the ");
    sb.append(" appendLine function");

    var result = sb.clear();
    expect(result).to.equal(undefined);
    done();
});