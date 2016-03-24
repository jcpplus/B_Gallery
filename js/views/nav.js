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
        className: 'nav',
        initialize: function () {
            //this.render();
            //this.collection.on('change', this.render, this);
            _.bindAll(this, 'render');
            vent.on('goIndex', this.goToIndex, this);
        },
        events: {
            'click': 'goToIndex'
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
            var reg = new RegExp("[item]+");
            if(_hash == "" || !reg.test(_hash)) {
                this.$el.find('.nav-back').hide();
                var txt = this.$el.find('.nav-title').html('案例列表');
            } else {
                this.$el.find('.nav-back').css('display', 'inherit');
                var txt = this.$el.find('.nav-title').html('案例详情');
            }

        }

    });

    return navView;
});
