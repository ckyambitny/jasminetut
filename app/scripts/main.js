require([
    'numbers'
], function (number) {
    'use strict';

    var infinity = number.add(-Infinity, Infinity);

    console.log('infinity', infinity);
});
