/**
 * Created by jesse.liang on 2016/3/11.
 */

define([
    'backbone',
    'models/menuItem'
], function (Backbone, MenuItem) {
    var MenuCollection = Backbone.Collection.extend({
        model: MenuItem,
        sortKey: 'id',

        comparator: function (menuItem) {
            return menuItem.get(this.sortKey);
        },
        sortByField: function (fieldName) {
            this.sortKey = fieldName;
            this.sort();
            console.log(this.sort());
        }
    });
    return MenuCollection;
});
