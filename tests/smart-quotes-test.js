"use strict";

var rule = require("../lib/rules/smart-quotes"),
    RuleTester = require("eslint").RuleTester;

function mkString (x, quotesToUse = '\'') {
    return quotesToUse + x + quotesToUse
}

var ruleTester = new RuleTester();
ruleTester.run("smart quotes test", rule, {

    valid: [
        mkString('“Some headline!”'),
        mkString('‘Some headline!’'),
        mkString('“”'),
        mkString('‘’'),
        mkString('Beginning of a “'),
        mkString('” end of a sentence.'),
        mkString('Beginning of a ‘'),
        mkString('’ end of a sentence.'),
    ],

    invalid: [
        {
            code: mkString('"Some headline!"'),
            errors: [{
                message: "Strings must use curly quotes in: '\"Some headline!\"'. Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('\'Some headline!\'', '"'),
            errors: [{
                message: "Strings must use curly quotes in: \"'Some headline!'\". Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('\"\"'),
            errors: [{
                message: "Strings must use curly quotes in: '\"\"'. Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('\'\'', '"'),
            errors: [{
                message: "Strings must use curly quotes in: \"''\". Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('Beginning of a "'),
            errors: [{
                message: "Strings must use curly quotes in: 'Beginning of a \"'. Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('" end of a sentence.'),
            errors: [{
                message: "Strings must use curly quotes in: '\" end of a sentence.'. Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('Beginning of a \'', '"'),
            errors: [{
                message: "Strings must use curly quotes in: \"Beginning of a '\". Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
        {
            code: mkString('\' end of a sentence.', '"'),
            errors: [{
                message: "Strings must use curly quotes in: \"' end of a sentence.\". Use <“ ” ‘ ’> instead.",
                type: "Literal"
            }]
        },
    ]
});
