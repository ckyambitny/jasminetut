define(function () {
    'use strict';

    /**
     * ### add
     *
     * Passed numeric arguments to this function,
     * them it will be returns sum of them.
     *
     * @param {...number}
     * @returns {number}
     */
    function add() {
        var inputs = Array.prototype.slice.call(arguments);

        return inputs.reduce(function (mem, i) {
            return mem + i
        }, 0);
    }

    // Public API
    return {
        add: add
    }
});
