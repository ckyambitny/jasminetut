define(function () {
    'use strict';

    /**
     * ### add
     *
     * Passed numeric or string arguments to this function,
     * them it will be returns sum of them.
     *
     * @param {...}
     * @returns {number}
     */
    function add() {
        var inputs = Array.prototype.slice.call(arguments);
        
       
        return inputs.reduce(function (mem, i) {           
            if ( typeof i === 'string' ) {
                i = parseFloat(i, 10) || 0;   
            }
            return mem + i;
        }, 0);
    }
     /**
     * ### getPrecision
     *
     * Passed float argument to this function
     * them it will be returns decimal point precisin of it.
     *
     * @param {...number}
     * @returns {number}
     */
    function getPrecision(a) {
        if ( typeof a != 'number' ) throw new Error ('Not a number argument');
        var e = 1;
        while (Math.round(a * e) / e !== a) e *= 10;
        return Math.log(e) / Math.LN10;
    }
    // Public API
    return {
        add: add,
        getPrecision : getPrecision
    }
});
