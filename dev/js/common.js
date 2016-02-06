requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min',
        todo: 'todo'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        },
        'bootstrap': {
            deps:['jquery'],
            exports: 'bootstrap'
        },
        'todo': {
            deps:['angular'],
            exports: 'todo'
        }
    }
});

require([
    'jquery',
    'angular',
    'bootstrap',
], function($) {
    require(['todo'], function(){
        initApp();
    });
});
