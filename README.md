# Yoso Browsehappy

An angular js directive for detect browser capabilities and show warning on missed app requirements.    
If the browser missed required capabilities the user get a link to [outdatedbrowser](http://outdatedbrowser.com/) where he can update.    
The browser capabilities are detected using [Modernirz](http://modernizr.com/), which must be already implemented inside the project. 
All browser capabilities Modernitz detect can be used inside yoso browsehappy. To enable detetection add the required feature as parameter inside the directive tag.
 
![alt example image](docs/example.png) 

### Install
```bash
$ npm install --save yoso-browsehappy
```

### Usage
Inject directive to your model:
```javascript
    angular.module('app.common.directives', [])
  .directive('yosoBrowsehappy', require('yoso-browsehappy'));
 ```

Insert into your template:
```html
    <yoso-browsehappy rgba svg touch></yoso-browsehappy>
 ```
Add required feature as parameter inside the directive tag to enable detection for it.

### Customize design
The colors are specified as SCSS variables, which can be simple overwritten/redefined. Following variables are available:

| Variable | description  | default value |
| -------- | ------------ | ------------- |
| $browsehappy--font-color | The block font color  | rgb(0, 0, 0) |
| $browsehappy--background-color The block background color. The block goes over the full viewport. |            | rgb(255, 255, 255) |
| $browsehappy__message--font-color |  Paragraph font color. Is used for the message description.       | rgba(0, 0, 0, 0.6) |
| $browsehappy__signal--background-color | The signal (opps) background color. Is also used as link font color and invalid list item background color.   | rgb(211, 61, 57) |
| $browsehappy__signal--font-color |  The signal (opps) font color. Is also used as list item font color.        | rgb(255, 255, 255) |
| $browsehappy__success--background-color | Is used for list success item  background color.   | rgb(145, 205, 0) |
| $browsehappy__success--font-color |  Is used for list success item  font color.         | rgb(255, 255, 255) |
