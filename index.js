/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

try {
    var C = require('node-pngcrush');
} catch(e){
    fis.log.warning('node-pngcrush does not support your node ' + process.version +
        ', report it to https://github.com/xiangshouding/node-pngcrush/issues');
}

module.exports = function(content, file, conf) {
    if (C && C.compress) {
        return C.option(conf).compress(content);
    } else {
        return content;
    }
};