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
    'views/alPageDetails',
    'views/nav',
    'data',
    'appVent',
    'appRouter'
], function (_, Backbone, MenuCollection, alPageCollection, alPageDetails, navViews, tuKuData, vent, itemRouter) {
    var appView = Backbone.View.extend({
        el: '.page.m-index',

        initialize: function () {
            this.menuCollection = new MenuCollection(tuKuData);
            vent.on('pageContent:show', this.renderMenu, this);
            vent.on('pageItem:show', this.renderPageDetails, this);

        },
        renderMenu: function () {
            this.menuCollectionView =
                this.menuCollectionView ?
                    this.menuCollectionView :
                    (new alPageCollection({collection: this.menuCollection}));
            this.navViews = this.navViews ? this.navViews : (new navViews({collection: this.menuCollection}));
            this.$el.html(this.navViews.render().$el);
            this.$el.append(this.menuCollectionView.$el);
            vent.trigger('renderingPropertiesChanged', this.renderingProperties);
            return this;
        },

        renderPageDetails: function (id) {
            this.navViews = this.navViews ? this.navViews : (new navViews({collection: this.menuCollection}));
            this.$el.html(this.navViews.render().$el);

            var pageItem = this.menuCollection.get(id);
            if (!pageItem) {
                return itemRouter.navigate('', true);
            }
            var alPageDetailsViews = new alPageDetails({model: pageItem});
            this.$el.append(alPageDetailsViews.render().$el);
        },

        renderNav: function () {
            this.navViews = this.navViews ? this.navViews : (new navViews({collection: this.menuCollection}));
            this.$el.html(this.navViews.render().$el);
        },


        renderingProperties: {
            filterBy: '',
            sortBy: 'id'
        }

    });

    return appView;
});