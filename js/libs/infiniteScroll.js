// 上拉更新
define([
    'libs/tukuApp'
], function (TAPP) {
    "use strict";
    function infiniteScrollFunction(box, element) {
        var loading = false; // 加载标志
        var isLast = false; // 是否是最后一条数据
        var itemsPerLoad = 2; // 每次加载几条数据

        // 应用 'infinite' 事件
        var infiniteScroll = $('.infinite-scroll');
        infiniteScroll.on('infinite', function () {
            if (loading) return; // 如果还在加载中，退出进程
            loading = true; // 设置加载标志
            //显示菊花
            $('.infinite-scroll-preloader').removeClass('none');
            // 设定1S延迟
            setTimeout(function () {
                loading = false; // 重设加载标志
                if (isLast) {
                    // 没有更多的加载就禁用无限滚动
                    TAPP.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除菊花
                    $('.infinite-scroll-preloader').remove();
                    return;
                }
                // 需要追加的HTML
                var expHTML = '';
                for (var i = 1; i <= itemsPerLoad; i++) {
                    expHTML += element;
                }
                // 增加HTML
                infiniteScroll.find(box).append(expHTML);

                // 图片懒加载
                lazyLoadImg(box);
                // 隐藏菊花
                $('.infinite-scroll-preloader').addClass('none');
            }, 1000);
        });
    }

    function lazyLoadImg(element) {
        // img元素上必须有.item-img这个class名
        var unloadedpic = $(element + " .item-img").not("lazy-loaded");
        unloadedpic.trigger('lazy');
    }

    return {
        infiniteScrollFunction: infiniteScrollFunction
    }
});
