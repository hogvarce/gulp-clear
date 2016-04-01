/// <reference path="Framework/Events.ts" />
requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        helperPage: 'helper-page'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'helperPage': {
            deps: ['jquery'],
            exports: 'helperPage'
        },
        'todo': {
            exports: 'todo'
        }
    }
});

require(['helperPage'], function(helperPage, todo){});
