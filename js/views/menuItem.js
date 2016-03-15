define([
    'underscore',
    'backbone',
    'text!templates/menuItem.html',
    'appRouter'
], function(_, Backbone, template, itemRouter){
    var MenuItemView = Backbone.View.extend({
        className: 'menuItem',
        events: {
            'click': 'showDetails'
        },

        // router.navigate(fragment, [triggerRoute])
        // 手动到达应用程序中的某个位置。 传入 triggerRoute 以执行路由动作函数。
        // app.navigate("help/troubleshooting", true);
        // 或者：  this.navigate("page/" + pageNumber);

        showDetails: function() {
            itemRouter.navigate('item/'+this.model.get('id'), true);
        },
        template: _.template(template),
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return MenuItemView;
});