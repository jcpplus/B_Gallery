/**
 * Created by jesse.liang on 2016/3/11.
 */

define([
    'backbone'
], function(Backbone){
    var MenuItem = Backbone.Model.extend({
        defaults: {
            id: '',
            title: '',
            itemType: '',
            description: '',
            ingredients: '',
            imageLink: '',
            discount: ''
        }
    });
    return MenuItem;
});
