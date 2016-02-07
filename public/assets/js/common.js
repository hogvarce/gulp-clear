requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min',
        app: 'app'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        },
        'app': {
            deps:['angular'],
            exports: 'app'
        }
    }
});

require(['app'], function(){
    angular.bootstrap(document, ['app']);
});
