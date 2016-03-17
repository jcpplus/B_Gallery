/**
 * Created by jesse.liang on 2016/3/10.
 */
//define([
//    'underscore',
//    'backbone',
//    'collections/menu',
//    'views/menuCollection',
//    'views/menuItemDetailed',
//    'data',
//    'appVent',
//    'appRouter'
//], function (_, Backbone, MenuCollection, MenuCollectionView, MenuItemDetaildView, tuKuData, vent, itemRouter) {
//    var AppView = Backbone.View.extend({
//        el: '.containerMenu',
//        initialize: function () {
//            this.menuCollection = new MenuCollection(tuKuData);
//            vent.on('menu:show', this.renderMenu, this);
//
//            vent.on('menuitem:show', this.renderMenuItemDetails, this);
//        },
//        renderMenu: function () {
//            this.menuCollectionView =
//                this.menuCollectionView ?
//                    this.menuCollectionView :
//                    (new MenuCollectionView({collection: this.menuCollection}));
//            this.$el.append(this.menuCollectionView.$el);
//            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
//            return this;
//        },
//
//        renderMenuItemDetails: function(id) {
//            var menuItem = this.menuCollection.get(id);
//            if(!menuItem) {
//                return itemRouter.navigate('', true);
//            }
//            var menuItemDetailsView = new MenuItemDetaildView({model: menuItem});
//
//            this.$el.html(menuItemDetailsView.render().$el);
//        },
//        renderingProperties: {
//            filterBy: '',
//            sortBy: 'id'
//        }
//    });
//    return AppView;
//});


define([
    'underscore',
    'backbone',
    'collections/menu',
    'views/alPageContentCollection',
    'data',
    'appVent',
    'appRouter'
], function(_, Backbone, MenuCollection, alPageCollection, tuKuData, vent, itemRouter){
    var appView = Backbone.View.extend({
        el: '.al-pg-box',

        initialize: function () {
            this.menuCollection = new MenuCollection(tuKuData);
            vent.on('menu:show', this.renderMenu, this);

        },
        renderMenu: function () {
            this.menuCollectionView =
                this.menuCollectionView ?
                    this.menuCollectionView :
                    (new alPageCollection({collection: this.menuCollection}));
            this.$el.append(this.menuCollectionView.$el);
            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
            return this;
        },

        renderingProperties: {
            filterBy: '',
            sortBy: 'id'
        }

    });

    return appView;
});