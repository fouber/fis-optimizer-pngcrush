# fis-optimizer-pngcrush

A optimizer plugin for fis to compress png using pngcrush.

## usage

    $ npm install -g fis-optimizer-pngcrush
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    modules : {
        optimizer : {
            png : 'pngcrush'
        }
    }
});
```

    $ fis release --optimizer --dest ../output