/**
 * Created by dulin on 2015/11/3.
 */

define([
    'app'
], function() {

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '',
                controller: ''
            })
            .when('/contact', {
                templateUrl: ''
            })
            .when('/about', {
                templateUrl: ''
            })
            .otherwise({
                redirectTo: '/'
            })
    }
});