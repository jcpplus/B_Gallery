/**
 * Created by jesse.liang on 2016/3/11.
 */
define([
    'backbone',
    'appVent'
], function (Backbone, vent) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'item/:id': 'showMenuItem',
            '*other': 'index'
        },
        index: function () {
            // 见源码119行
            // Backbone.Events
            vent.trigger('pageContent:show');
        },
        showMenuItem: function (itemId) {
            vent.trigger('pageItem:show', itemId);
        }
    });
    return Router;
});