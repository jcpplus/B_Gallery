/**
 * Created by jesse.liang on 2016/3/17.
 */
define([
    'zepto',
    'underscore',
    'backbone',
    'models/alPageContent',
    'views/alPageContent',
    'appVent'
], function($, _, Backbone, alPage, alPageView, vent){
    var alPageCollectionView = Backbone.View.extend({
        className: 'al-pg-content',

        initialize: function(){
            vent.on("renderingPropertiesChanged", this.sort, this);
            this.collection.on('sort', this.render, this);
            vent.on('scrollss', this.scrolls, this);
        },

        scrolls: function(scrollss) {
            console.log('detected');
        },

        sort: function(renderingProperties) {
            this.renderingProperties = renderingProperties;
            this.collection.sortByField(this.renderingProperties.sortBy);
        },

        render: function() {
            this.$el.empty();
            this.newColl = this.filterCollection(this.renderingProperties.filterBy);
            _.each(this.newColl, function(alPage) {
                    var alPageItemView = new alPageView({ model: alPage});
                    this.$el.append(alPageItemView.render().$el);
            }, this);

            return this;
        },
        filterCollection: function(filterBy) {
            return this.collection.filter(function(alPage) {
                if (!filterBy || alPage.get("itemType") == filterBy) {
                    return alPage;
                }
            }, this);
        }
    });

    return alPageCollectionView;
});
