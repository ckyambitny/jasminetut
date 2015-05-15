define(function () {
    'use strict';

    /**
     * ### add
     *
     * Passed numeric or string arguments to this function,
     * then it will be returns sum of them.
     *
     * @param {...}
     * @returns {number}
     */
    function add() {
        var inputs = Array.prototype.slice.call(arguments);
        return inputs.reduce(function (mem, i) {
            i = API.parseInput(i);

            return mem + i;
        }, 0);
    }

    /**
     * ### parseInput
     *
     * Passed argument to function
     * then it will be returns parsed input.
     *
     * @param {string} a
     * @returns {number}
     */
    function parseInput(a) {
        if (typeof a === 'string') {
            a = parseFloat(a) || 0;
        }

        if (typeof a !== 'number') {
            throw new Error('Not a number');
        }

        return a;
    }
    /**
     * ### getPrecision
     *
     * Passed float argument to this function
     * them it will be returns decimal point precision of it.
     *
     * @param {number} a
     * @returns {number}
     */
    function getPrecision(a) {
        if (typeof a !== 'number') throw new Error('Not a number argument');
        var e = 1;
        while (Math.round(a * e) / e !== a) e *= 10;
        return Math.log(e) / Math.LN10;
    }

    // Public API
    var API = {
        add: add,
        getPrecision: getPrecision,
        parseInput: parseInput
    };

    return API;
});
