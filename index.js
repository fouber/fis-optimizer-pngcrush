/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

try {
    var C = require('node-pngcrush');
} catch(e){
    fis.log.warning('node-pngcrush does not support the version you\'re using node');
}

module.exports = function(content, file, conf) {
    if (C && C.compress) {
        return C.option(conf).compress(content);
    } else {
        return content;
    }
};
