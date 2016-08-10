require.config({
    paths: {
        jquery: '/sites/all/modules/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2',
        bootstrap: '/sites/all/build/bower_components/bootstrap/dist/js/bootstrap.min',
        //transition: '../../bower_components/bootstrap/js/transition',
        //carousel: '../../bower_components/bootstrap/js/carousel',
        //touchswipe: '../../bower_components/jquery-touchswipe/jquery.touchSwipe.min',
        showgilrs: 'showgirls',
        svg4everybody: '/sites/all/build/bower_components/svg4everybody/dist/svg4everybody.min',
        async: '/sites/all/build/bower_components/requirejs-plugins/src/async'
        
    },
    deps: ['showgirls'],
    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': ['jquery']
    }
});


