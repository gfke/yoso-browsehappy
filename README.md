# Yoso Browsehappy

An angular js directive for detect browser capabilities and show warning on missed app requirements.
It's a part of Yoso Starterkit which use browserify. The directive can be used by any other angular project using browserify.

### Install
```bash
$ npm install --save git@github.com:nahody/yoso-browserify.git
$ npm install --save yoso-browserify
```

### Usage
```javascript
    angular.module('app.common.directives', [])
  .directive('yosoBrowserify', require('yoso-browserify'));
 ```
