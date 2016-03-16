/// <reference path="Framework/Events.ts" />
requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        fancybox: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack',
        bxSlider: '//cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min',
        select2: '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.2/js/select2.min',
        app: 'app',
        helperPage: 'helper-page'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'select2': {
            deps: ['jquery'],
            exports: 'select2'
        },
        'fancybox': {
            deps: ['jquery'],
            exports: 'fancybox'
        },
        'bxSlider': {
            deps: ['jquery'],
            exports: 'bxSlider'
        },
        app: {
            deps: ['jquery'],
            exports: 'app'
        },
        'helperPage': {
            deps: ['jquery', 'fancybox', 'bxSlider', 'select2', 'app'],
            exports: 'helperPage'
        }
    },
    deps: ['helperPage']
});
