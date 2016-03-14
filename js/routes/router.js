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
            vent.trigger('menu:show');
        },
        showMenuItem: function (menuitemId) {
            vent.trigger('menuitem:show', menuitemId);
        }
    });
    return Router;
});