'use strict';

requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'angular': '../../bower_components/angular/angular.min',
        'angular-material': '../../bower_components/angular-material/angular-material.min',
        'angular-animate': '../../bower_components/angular-animate/angular-animate.min',
        'angular-aria': '../../bower_components/angular-aria/angular-aria.min',
        'angular-messages': '../../bower_components/angular-messages/angular-messages.min',
        'app': 'app'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-material': {
            deps: ['angular-animate','angular-aria','angular-messages']
        },
        'angular-animate': {
            exports: 'angular-animate'
        },
        'angular-aria': {
            exports: 'angular-aria'
        },
        'angular-messages': {
            exports: 'angular-messages'
        },
        'app': {
            deps: ['jquery', 'angular', 'angular-material'],
            exports: 'app'
        }
    },
    deps: ['app']
});
