/**
 * Created by jesse.liang on 2016/3/17.
 */

define([
    'backbone'
], function(Backbone) {

    var alPageContent = Backbone.Model.extend({
       defaults: {
           id: '',
           title: '',
           Author: '',
           reservationQuantity: '', // 预约人数
           designFeeRange: '', //设计费
           city: '',
           itemType: '',
           priceUsual: '',
           discount: '',
           imageLink: '',
           description: '',
           ingredients:''
       }
    });

    return alPageContent;
});
