/**
  Created by Jesse.Liang on 2016/3/23.
 */
define([
    'underscore',
    'backbone',
    'text!templates/alPageDetails.html',
    'appVent'
], function(_, Backbone, alPageDetailsTemplate, vent){
    var alPageDetailsView = Backbone.View.extend({
        className: 'aldt-img-list',

        initialize: function(){
            vent.on('pageContent:show', this.destroyView, this);
        },

        destroyView: function() {
            this.remove();
        },

        template: _.template(alPageDetailsTemplate),
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return alPageDetailsView;
});
