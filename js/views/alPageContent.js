/**
 * Created by jesse.liang on 2016/3/17.
 */
define([
    'underscore',
    'backbone',
    'text!templates/alPageContent.html',
    'appRouter'
], function(_, Backbone, template, itemRouter){

    var alPageContentView = Backbone.View.extend({

        className: 'al-pg-content-item',

        events: {
            'click': 'showDetails'
        },

        showDetails: function() {
            itemRouter.navigate('item/' + this.model.get('id'), true);
        },

        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return alPageContentView;
});