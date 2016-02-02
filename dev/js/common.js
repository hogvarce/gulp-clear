requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        helperPage: 'helper-page',
        Person: 'Person',
        typeScript: 'type'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'helperPage': {
            deps: ['jquery','Person'],
            exports: 'helperPage'
        },
        'Person': {
            deps: ['jquery'],
            exports: 'Person'
        },
        'typeScript': {
            deps: ['jquery','Person'],
            exports: 'typeScript'
        }
    }
});

require(['helperPage', 'typeScript'], function(helperPage, typeScript){});
