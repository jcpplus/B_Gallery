/**
 * Created by jesse.liang on 2016/3/10.
 */
/*global require*/
'use strict';

require.config({

    baseUrl: 'js',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        text: '../node_modules/requirejs-text/text'
    }
});


require([
    'backbone',
    'views/appView'
], function (Backbone, AppView) {
    /*jshint nonew:false*/

    // Initialize the application views
    new AppView();
    // Initialize routing and start Backbone.history()

    Backbone.history.start({pushstate:true});
});
