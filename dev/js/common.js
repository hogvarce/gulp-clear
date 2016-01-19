requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        helperPage : 'helper-page'
    }
    }
});

require(['helperPage'], function(helperPage){});
