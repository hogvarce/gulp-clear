'use strict';

requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'angular': '../../bower_components/angular/angular.min',
        'app': 'app'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        },
        'app': {
            deps: ['jquery', 'angular'],
            exports: 'app'
        }
    },
    deps: ['app']
});
