define([
    'require',
    'angular',
    'app',
    'router'
], function(require, angular) {

    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['app']);
    });
});