/**
 * Created by jesse.liang on 2016/3/10.
 */
define([
    'underscore',
    'backbone',
    'collections/menu',
    'views/menuCollection',
    'data',
    'appVent'
], function (_, Backbone, MenuCollection, MenuCollectionView, tuKuData, vent ) {
    var AppView = Backbone.View.extend({
        el: '.containerMenu',
        initialize: function () {
            this.menuCollection = new MenuCollection(tuKuData);
            vent.on('menu:show', this.renderMenu, this);
            vent.on('filterByType', this.filterBy, this);
            vent.on('sortByFieldEvent', this.sortBy, this);
        },
        renderMenu: function () {
            this.menuCollectionView =
                this.menuCollectionView ?
                    this.menuCollectionView :
                    (new MenuCollectionView({collection: this.menuCollection}));
            this.$el.append(this.menuCollectionView.$el);
            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
            return this;
        },
        renderingProperties: {
            filterBy: '',
            sortBy: 'id'
        },
        filterBy: function (itemType) {
            this.renderingProperties.filterBy = itemType;
            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
        },
        sortBy: function (fieldName) {
            if (this.renderingProperties.sortBy != fieldName) {
                this.renderingProperties.sortBy = fieldName;
            } else {
                this.renderingProperties.sortBy = 'id';
            }
            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
        }
    });
    return AppView;
});