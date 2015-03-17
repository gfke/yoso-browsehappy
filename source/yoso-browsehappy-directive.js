/** @namespace exampleDirective
 *  @desc ExampleModule API
 * Some general description for the exampleDirective below
 *
 * Markdown can be used in the descriptions
 * -----------------
 *
 * We can `use` [all of that](http://daringfireball.net/projects/markdown/) in our *Docs*.
 */

/**
 *
 * Add here details for the constructor function of the directive
 * and its dependency parameters
 *
 * @name exampleDirective
 * @memberof exampleDirective
 * @function
 * @param {Object} $angularDependency1 some Angular service
 * @param {Array.<String>} npmDependency1 some package
 * @param {Function(Error)} cb Callback for what so ever
 */
module.exports = function(ngModule) {
    ngModule.directive('yosoBrowsehappy',[function() {
        return {
            restrict: 'E',
            template: require('./yoso-browsehappy-directive-template.html'),
            link: function (scope, element, attrs) {
                var modernizr = Modernizr || {};

                scope.invalid = false;
                scope.validationList = [];

                angular.forEach(attrs.$attr, function ($value, $key) {
                    var _state = modernizr[$key];

                    if (angular.isDefined(_state)) {
                        scope.validationList.push({'name': $key, 'valid':_state});

                        if (_state === false) {
                            scope.invalid = true;
                        }
                    }
                });
            }
        };
    }]);
};
