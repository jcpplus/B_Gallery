define([], function () {
    var tuKuData = [
        {
            id: 1,
            title: '暖心天堂',
            Author: '作者名', // 设计师名称
            reservationQuantity: 12, // 预约人数
            designFeeRange: 100, //设计费
            city: '北京',
            itemType: 3,
            priceUsual: 2.00,
            discount: 10,
            imageLink: 'img/1.jpg',
            description: '浅色空间最大的优点是空间的阔朗，但也很容易显得单调轻佻。这里的空间简约却不简单，细心品味之下，充满了生活的美感',
            ingredients: ['浅色空间最大的优点是空间的阔朗，但也很容易显得单调轻佻。','这里的空间简约却不简单，细心品味之下，充满了生活的美感']
        },
        {
            id: 2,
            title: '暖心天堂',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 200,
            city: '北京',
            itemType: 1,
            priceUsual: 1.20,
            discount: 20,
            imageLink: 'img/2.jpg',
            description: '自然的浅木色与白色近乎毫无修饰的顶部空间，形成了一种正气大方、自然明净的舒适感。 ',
            ingredients: []
        },
        {
            id: 3,
            title: '暖心天堂',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 210,
            city: '上海',
            itemType: 1,
            priceUsual: 1.80,
            imageLink: 'img/3.jpg',
            description: '整个空间如清泉般的干净透彻，几株绿色植物点缀，更添几分空灵之感，红色的台灯与餐厅区映来的红色，如同冬天的火焰，带来家的温暖感。 ',
            ingredients: ['整个空间如清泉般的干净透彻','几株绿色植物点缀，更添几分空灵之感','红色的台灯与餐厅区映来的红色，如同冬天的火焰，带来家的温暖感。']
        },
        {
            id: 4,
            title: '暖心天堂',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.40,
            imageLink: 'img/4.jpg',
            description: '一张品红的粗桌布，提升了空间的温度，令进餐区域充满浓浓的家庭氛围。无需多大的空间，只要恰到好处。空间如同一首流畅的诗歌，无论如何变换角度，都能见到精彩的美丽。 ',
            ingredients: ['一张品红的粗桌布，提升了空间的温度，令进餐区域充满浓浓的家庭氛围。','无需多大的空间，只要恰到好处。','空间如同一首流畅的诗歌，无论如何变换角度，都能见到精彩的美丽。']
        },
        {
            id: 5,
            title: '阁楼小美式',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 1,
            priceUsual: 1.60,
            discount: 25,
            imageLink: 'img/5.jpg',
            description: '仿古地砖强化了整个空间风格！由入户玄关进入，便可见十分开阔的客餐厅空间。客厅与餐厅设计是经过空间改造，两厢融汇贯通的，线条圆润优美、结构简洁大方。',
            ingredients: ['仿古地砖强化了整个空间风格！','由入户玄关进入，便可见十分开阔的客餐厅空间。','客厅与餐厅设计是经过空间改造，两厢融汇贯通的，线条圆润优美、结构简洁大方。']
        },
        {
            id: 6,
            title: '阁楼小美式',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 3,
            priceUsual: 2.00,
            discount: 10,
            imageLink: 'img/6.jpg',
            description: '厨房交错使用棕、绿、咖啡等配色，使空间色彩丰富！就整体而言，美式家具传达了单纯、休闲、有组织、多功能的设计思想，让家庭成为释放压力和解放心灵的净土。 ',
            ingredients: ['厨房交错使用棕、绿、咖啡等配色，使空间色彩丰富！','就整体而言，美式家具传达了单纯、休闲、有组织、多功能的设计思想，','让家庭成为释放压力和解放心灵的净土。']
        },
        {
            id: 7,
            title: '阁楼小美式',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.20,
            discount: 30,
            imageLink: 'img/7.jpg',
            description: '每一个小盆友都是父母的心头肉，没有什么比孩子的健康成长更重要的。孩子每天至少有10个小时在房间里度过，安全和环保系数，就成了儿童房设计的关键。',
            ingredients: ['每一个小盆友都是父母的心头肉，没有什么比孩子的健康成长更重要的。','孩子每天至少有10个小时在房间里度过，安全和环保系数，就成了儿童房设计的关键。']
        },
        {
            id: 8,
            title: '阁楼小美式',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.50,
            imageLink: 'img/8.jpg',
            description: '自然、淳朴的风格，隐藏设计的衣柜，使其看起来更整洁、美观。 ',
            ingredients: ['自然、淳朴的风格，隐藏设计的衣柜，使其看起来更整洁、美观。']
        },
        {
            id: 9,
            title: '六月星晴',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 3,
            priceUsual: 0.90,
            imageLink: 'img/9.jpg',
            description: '美式其实是一个道不清说不明的概念，移民风格就是什么都有一点，与纯正美式相比较本案例中更注重舒适度，装饰简洁化。 客厅应当是我们呆得时间最多的地方吧，喜欢窝在沙发的感觉。这个客厅有我想要的温馨感觉！',
            ingredients: ['六月星晴--美式其实是一个道不清说不明的概念，移民风格就是什么都有一点，与纯正美式相比较本案例中更注重舒适度，装饰简洁化。','客厅应当是我们呆得时间最多的地方吧，喜欢窝在沙发的感觉。','这个客厅有我想要的温馨感觉！']
        },
        {
            id: 10,
            title: '六月星晴',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.80,
            discount: 15,
            imageLink: 'img/10.jpg',
            description: '一厅两用，采用小格子白色移门，让室内光源更充足。现代家居简化仪式感，更倾向于让自己的内心愉悦透亮。演化在装饰上，采光、通透、实用，加一点点缀就够。',
            ingredients: ['一厅两用，采用小格子白色移门，让室内光源更充足。','现代家居简化仪式感，更倾向于让自己的内心愉悦透亮。','演化在装饰上，采光、通透、实用，加一点点缀就够。']
        },
        {
            id: 11,
            title: '六月星晴',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.80,
            discount: 15,
            imageLink: 'img/11.jpg',
            description: '在本案例中，有意思的是，电视机自觉向后退一步，虽然还在空间内，但是在装饰平面以后，就没有那么突兀，低调不扎眼了。当然这也和摄影师的取景角度有关。如果你对电视机没有如此迷恋与依赖，笔者建议你把它拿掉。有网络与pad，足够了。',
            ingredients: ['在本案例中，有意思的是，电视机自觉向后退一步，虽然还在空间内，但是在装饰平面以后，就没有那么突兀，低调不扎眼了。当然这也和摄影师的取景角度有关。如果你对电视机没有如此迷恋与依赖，笔者建议你把它拿掉。有网络与pad，足够了。']
        },
        {
            id: 12,
            title: '六月星晴',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 3,
            priceUsual: 0.90,
            imageLink: 'img/12.jpg',
            description: '喜欢套房的设计，把我爱的主卧、衣帽间和主卫都放在一起。这角度看过去主卧的走道有点长哈！非常喜欢大大的床，宽敞的飘窗，看看书喝喝咖啡，美美哒！偶尔家人来小住，就住在这么一间温馨的房间啦！',
            ingredients: ['喜欢套房的设计，把我爱的主卧、衣帽间和主卫都放在一起。','这角度看过去主卧的走道有点长哈！','非常喜欢大大的床，宽敞的飘窗，看看书喝喝咖啡，美美哒！','偶尔家人来小住，就住在这么一间温馨的房间啦！']
        },
        {
            id: 13,
            title: '六月星晴',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.50,
            imageLink: 'img/13.jpg',
            description: '背后的复古砖，一下子拉伸了我这小小干区的视觉空间感卫生间采用干湿分离，三口之家尤其三代同堂的家庭，在使用功能上更方便。。',
            ingredients: ['背后的复古砖，一下子拉伸了我这小小干区的视觉空间感。','卫生间采用干湿分离，三口之家尤其三代同堂的家庭，在使用功能上更方便。']
        },
        {
            id: 14,
            title: '日式情调榻榻米',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.20,
            discount: 30,
            imageLink: 'img/14.jpg',
            description: '本案套三户型采用MUJI气质浓郁的日式风格设计，以大量浅色清水实木材质来打造简约、明媚的素色居家环境，带来有健康、有品质的休闲享受。 进门右手边为开放的餐厅，可见灰白木为主的空间色调，由装饰画轻点主题，一面闲逸、自然的格调。',
            ingredients: ['本案套三户型采用MUJI气质浓郁的日式风格设计，以大量浅色清水实木材质来打造简约、明媚的素色居家环境，带来有健康、有品质的休闲享受。','进门右手边为开放的餐厅，可见灰白木为主的空间色调，由装饰画轻点主题，一面闲逸、自然的格调。']
        },
        {
            id: 15,
            title: '日式情调榻榻米',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 1,
            priceUsual: 1.20,
            discount: 20,
            imageLink: 'img/15.jpg',
            description: '玻璃移门隔开的厨房，应餐厅借光需求而用百叶帘来调节明暗。亮白的抛光砖搭配实木柜板很清爽。洗衣区和冰箱都规划于厨房一侧，将相对宽敞的厨房空间合理利用起来。',
            ingredients: ['玻璃移门隔开的厨房，应餐厅借光需求而用百叶帘来调节明暗。','亮白的抛光砖搭配实木柜板很清爽。','洗衣区和冰箱都规划于厨房一侧，将相对宽敞的厨房空间合理利用起来。']
        },

        {
            id: 16,
            title: '日式情调榻榻米',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 1,
            priceUsual: 1.60,
            discount: 25,
            imageLink: 'img/16.jpg',
            description: '延伸出的半隔断栅栏虚化视野，使后方的和室空间显得更含蓄、静逸，同时也打改变了短过道的呆板印象。和室里无论是基础硬装还是软装细节，都体现出了自然清新、雅致悠闲的慢生活氛围。 ',
            ingredients: ['延伸出的半隔断栅栏虚化视野，使后方的和室空间显得更含蓄、静逸，同时也打改变了短过道的呆板印象。','和室里无论是基础硬装还是软装细节，都体现出了自然清新、雅致悠闲的慢生活氛围。.']
        },
        {
            id: 17,
            title: '日式情调榻榻米',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 2,
            priceUsual: 1.40,
            imageLink: 'img/17.jpg',
            description: '阳台空间被改造为简单的书房，没有太多装饰，一方一圆的吊灯与台灯，渲染出空间的知性魅力。',
            ingredients: ['阳台空间被改造为简单的书房，没有太多装饰，一方一圆的吊灯与台灯，渲染出空间的知性魅力。']
        },
        {
            id: 18,
            title: '日式情调榻榻米',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 1,
            priceUsual: 1.60,
            discount: 25,
            imageLink: 'img/18.jpg',
            description: '从客厅看向餐厅方向来张特写，朴实、爽朗的木色是这个家的主调。',
            ingredients: []
        },
        {
            id: 19,
            title: '静致远',
            Author: '作者名',
            reservationQuantity: 12,
            designFeeRange: 100,
            city: '北京',
            itemType: 3,
            priceUsual: 1.30,
            discount: 20,
            imageLink: 'img/19.jpg',
            description: '“静致远，悠然见性”。你对于“家”的想象是什么？扰攘尘嚣之中，“家”应是能让身心完全解压、休憩的，不要赘饰、没有繁复符号。',
            ingredients: []
        }
    ];
    return tuKuData;
});