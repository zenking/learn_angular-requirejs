/**
 * Created by dulin on 2015/11/4.
 */
define([
    './module',
    'underscore'
], function(ctrlModule, _) {
    ctrlModule.controller('MainController', ['$scope', function($scope) {

        $scope.vm = {
            navArr: [
                {
                    key: 'ng',
                    txt: 'AngularJS文档'
                },
                {
                    key: 'jq',
                    txt: 'jQuery文档'
                }
            ],
            activeNav: ''
        };
        $scope.vm.activeNav = _.first($scope.vm.navArr)['key'];

        $scope.navClickHandler = function(nav) {
            $scope.vm.activeNav = nav.key;
        };

    }]);
});