/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var C = require('node-pngcrush');


module.exports = function(content, file, conf) {
    return C.option(conf).compress(content);
};
