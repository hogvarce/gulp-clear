requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: 'lib/jquery.min',
        bxSlider : 'lib/jquery.bxslider.min',
        fancybox: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack',
        googleMap: '//maps.google.com/maps/api/js?sensor=false',
        MarkerClusterer: 'lib/markerclusterer',
        InfoBubble: 'lib/infobubble-compiled',
        select2: '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/select2.min',
        mapInit:'mapInit',
        helperPage : 'helper-page'
    },
    shim: {
        jquery: {
            exports: "jquery"
        },
        select2: {
            deps: ["jquery"],
            exports: "select2"
        },
        InfoBubble: {
            deps: ["jquery", "googleMap"],
            exports: "InfoBubble"
        },
        googleMap: {
            deps: ["jquery"],
            exports: "googleMap"
        },
        MarkerClusterer: {
            deps: ["jquery","googleMap"],
            exports: "MarkerClusterer"
        },
        mapInit: {
            deps: ["jquery","googleMap", "MarkerClusterer"],
            exports: "mapInit"
        },
        bxSlider: {
            deps: ["jquery"],
            exports: "bxSlider"
        },
        fancybox: {
            deps: ["jquery"],
            exports: "fancybox"
        }
    }
});

require(['helperPage'], function(helperPage){});
