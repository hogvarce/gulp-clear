requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        helperPage: 'helper-page',
        typeScript: 'type'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'helperPage': {
            deps: ['jquery'],
            exports: 'helperPage'
        },
        'typeScript': {
            deps: ['jquery'],
            exports: 'typeScript'
        }
    }
});

require(['helperPage', 'typeScript'], function(helperPage, typeScript){});
