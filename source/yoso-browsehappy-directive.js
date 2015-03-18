/** @namespace yosoBrowsehappy
 *  @desc An angular js directive for detect browser capabilities and show warning on missed app requirements.
 */

require('./yoso-browsehappy-directive.scss');
/**
 *
 * Provide the angular module as parameter to the require function and it will register itself
 *
 * @name yosoBrowsehappy
 * @memberof yosoBrowsehappy
 * @function
 * @param {Object} ngModule the angular module on which this directive should be registered
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
