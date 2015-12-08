/**
 * Created by dulin on 2015/11/3.
 */

define([
    './app'
], function(app) {

    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {

        $urlRouterProvider
            .when('/', '/ng')
            .otherwise('/');

        $stateProvider
            .state('ng', {
                url: '/ng',
                controller: 'NgController',
                templateUrl: 'app/views/ng.html',
                resolve: {

                }
            })
            .state('jq', {
                url: '/jq',
                controller: 'JqController',
                templateUrl: 'app/views/jq.html'
            })
    }]);

});