/**
 * @fileoverview Rule to flag non-smart quotes in string literals.
 * @author Juan Carlos Montemayor Elosua
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow non-smart quotes in string literals",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {
        return {
            Literal(node) {
                if (typeof node.value !== "string") {
                    return;
                }
                console.log('raw', node.raw)
                const match = node.raw.match(/^(?:\"|\').*([(\"|\')])+.*(?:\"|\')$/);
                console.log('match', match)

                if (match) {
                    const offendingPunctuation = match[1];
                    const matchedString = match[0];

                    if (typeof matchedString !== 'undefined' && typeof offendingPunctuation !== 'undefined') {
                        const message = "Strings must use curly quotes in: " + matchedString + ". Use <“ ” ‘ ’> instead."
                        context.report({ node, message: message, data: { offendingPunctuation } });
                    }
                }
            }
        };
    }
};
