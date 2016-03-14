/**
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/menuItem',
    'views/menuItem',
    'appVent'
],function($, _,Backbone, MenuItem, MenuItemView, vent) {
    var MenuCollectionView = Backbone.View.extend({
        className: 'row menuCollectionView',
        initialize: function() {
            vent.on("renderingPropertiesChanged", this.sort, this);
            this.collection.on('sort', this.render, this);
            this.collection.on('change', this.render, this);

        },
        sort: function(renderingProperties) {
            this.renderingProperties = renderingProperties;
            this.collection.sortByField(this.renderingProperties.sortBy);
        },
        render: function() {
            this.$el.empty();
            this.newColl = this.filterCollection(this.renderingProperties.filterBy);
            _.each(this.newColl, function(menuItem) {
                    var menuItemView = new MenuItemView({ model: menuItem});
                    this.$el.append(menuItemView.render().$el);
            }, this);

            return this;
        },
        filterCollection: function(filterBy) {
            return this.collection.filter(function(menuItem) {
                if (!filterBy || menuItem.get("itemType") == filterBy) {
                    return menuItem;
                }
            }, this);
        }
    });
    return MenuCollectionView;
});