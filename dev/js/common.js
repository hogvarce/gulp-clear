requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        helperPage : 'helper-page'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'helperPage': {
            deps: ['jquery'],
            exports: 'helperPage'
        }
    }
});

require(['helperPage'], function(helperPage){});
