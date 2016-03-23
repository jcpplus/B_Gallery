/**
 * Created by Jesse.Liang on 2016/3/23.
 */
define([
    'underscore',
    'backbone',
    'text!templates/nav.html',
    'appVent',
    'appRouter'
], function (_, Backbone, template, vent, itemRouter) {
    var navView = Backbone.View.extend({
        tagName: 'nav',
        id: 'nav',

        initialize: function () {
            this.render();
            //this.collection.on('render', this.render, this);
        },
        events: {
            'click .nav-title': 'goToIndex'
        },
        goToIndex: function () {
            itemRouter.navigate('', true);
        },
        template: _.template(template),

        render: function () {
            this.$el.html(template);
            this.titleText();
            return this;
        },

        titleText: function() {
            var _hash = window.location.hash;
            if(_hash == "") {
                var txt = this.$el.find('.nav-title').html('案例列表');
            } else {
                var txt = this.$el.find('.nav-title').html('案例详情');
            }

        }

    });

    return navView;
});
