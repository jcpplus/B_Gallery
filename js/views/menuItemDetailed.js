define([
    'underscore',
    'backbone',
    'text!templates/menuItemDetailed.html',
    'appVent',
    'appRouter'
],function(_, Backbone, template, vent, itemRouter) {

    var MenuItemDetailedView = Backbone.View.extend({
        className: 'menuItemDetailedView',

        events: {
            'click .returnMenuButton': 'navigateToIndex'
        },
        initialize: function(){
            vent.on('menu:show', this.destroyView, this);

        },
        destroyView: function() {
          this.remove();
        },
        template: _.template(template),

        navigateToIndex: function(){
            itemRouter.navigate('', true);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return MenuItemDetailedView;
});