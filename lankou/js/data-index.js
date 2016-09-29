//导航栏列表
var Lis = 
//护肤
	[
	//产品类型
		[
			{nm:'卸妆清洁'},
			{nm:'眼霜'},
			{nm:'乳液'},
			{nm:'爽肤水'},
			{nm:'精华'},
			{nm:'日霜'},
			{nm:'晚霜'},
			{nm:'面膜'},
			{nm:'隔离'},
			{nm:'男士'}
		],
		//肌肤需求
		[
			{nm:'激活肌底 促进吸收'},
			{nm:'收缩毛孔 去除痘印'},
			{nm:'提拉紧致 抚平皱纹'},
			{nm:'去黄提亮 抗倦充能'},
			{nm:'润泽保湿 平衡水油'},
			{nm:'淡化斑点 肤色润白'},
			{nm:'隔离防晒 提亮肤色'},
			{nm:'深层洁净 全面保护'},
			{nm:'全方位多重抗老化'},
			{nm:'360度男士护肤'}
		],
		//产品系列
		[
			{nm:'小黑瓶系列'},
			{nm:'美肤修护系列'},
			{nm:'新立体塑颜系列'},
			{nm:'水光润养系列'},
			{nm:'水份缘舒缓系列'},
			{nm:'臻白系列'},
			{nm:'柔皙轻透防晒系列'},
			{nm:'清滢清洁系列'},
			{nm:'金纯系列'},
			{nm:'男士护肤系列'}
		],
		//护肤 小帮手
		[
			{nm:'如何选择护肤品'}
		],
		[],
//彩妆
		//面部
		[
			{nm:'气垫家族'},
			{nm:'妆前乳'},
			{nm:'粉底'},
			{nm:'遮瑕'},
			{nm:'粉饼'},
			{nm:'隔离'},
			{nm:'腮红'},
			{nm:'查看所有 面部 彩妆'}
		],
		//眼部
		[
			{nm:'睫毛膏'},
			{nm:'眼影'},
			{nm:'眼线笔'},
			{nm:'眉笔'},
			{nm:'眉胶'},
			{nm:'查看所有 眼部 彩妆'}
		],
		//唇部
		[
			{nm:'唇膏'},
			{nm:'唇蜜'},
			{nm:'唇釉'},
			{nm:'查看所有 唇部 彩妆'}
		],
		//美甲&工具
		[
			{nm:'甲油'},
			{nm:'眉刷'},
			{nm:'粉扑'},
			{nm:'刷子'},
			{nm:'查看所有 美甲&工具 彩妆'}
		],
		//潮流彩妆
		[
			{nm:'Sonia限量版'},
			{nm:'夏季潮流彩妆'},
			{nm:'限量版彩妆'}
		],
		//彩妆 小助手
		[
			{nm:'如何选择粉底'},
			{nm:'如何选择睫毛膏'}
		],
		[],
//香水
		//女士香水
		[
			{nm:'美丽人生系列香水'},
			{nm:'奇迹系列香水'},
			{nm:'珍爱系列香水'}
		],
		[],
//特惠礼盒
		//礼盒套装
		[
			{nm:'护肤礼盒'},
			{nm:'彩妆礼盒'},
			{nm:'香水礼盒'}
		],
		[]
	];
	var levelList = $('.level-3-list');
	function preInfo(obj,list){
		var str = '';
		for(var i = 0; i<list.length; i++){
			str += '<li class="level-3-list-item">'
	                    +    '<a class="level-3-list-item-link">'+list[i].nm+'</a>'
	                    +'</li>';
		}
		obj.prepend(str);
	}
	levelList.each(function(k){
		preInfo(levelList.eq(k),Lis[k]);
	});

//畅销产品
var product = [
	[
		{
			src:'LAN00273-1.jpg',
			nm:'小黑瓶「星光限量版」',
			pri:'￥1080'
		},
		{
			src:'L5814400U_01.jpg',
			nm:'兰蔻大眼精华眼部精华肌底液',
			pri:'￥680'
		},
		{
			src:'L9924400U.jpg',
			nm:'兰蔻「水光瓶」水光润养精华液',
			pri:'￥490'
		},
		{
			src:'F5556800U_2.jpg',
			nm:'兰蔻气垫修颜隔离乳（粉芯+粉盒）',
			pri:'￥420'
		}
	],
	[
		{
			src:'L4139800U_01.jpg',
			nm:'兰蔻小黑瓶精华肌底液',
			pri:'￥760'
		},
		{
			src:'LAN00055_01.jpg',
			nm:'兰蔻美肤修护精华乳',
			pri:'￥760'
		},
		{
			src:'L5144900U_01.png',
			nm:'兰蔻塑颜法式提拉晚霜',
			pri:'￥980'
		},
		{
			src:'LAN00059_L.jpg',
			nm:'兰蔻粉水清滢柔肤水(干性)',
			pri:'￥320'
		}
	],
	[
		{
			src:'F6422600U.jpg',
			nm:'兰蔻臻白日霜',
			pri:'￥695'
		},
		{
			src:'F1272600U_1.jpg',
			nm:'兰蔻柔皙轻透防晒露 SPF30+ PA+++',
			pri:'￥480'
		},
		{
			src:'LAN00073_L.jpg',
			nm:'兰蔻水份缘舒缓凝霜',
			pri:'￥575'
		},
		{
			src:'LAN00028_L.jpg',
			nm:'兰蔻臻白淡斑精华乳',
			pri:'￥830'
		}
	]
];
var contentcarouselListItem = $('.contentcarousel-list-item');
	function appInfo(obj,list){
		var str = '';
		for(var i = 0; i<list.length; i++){
			str += '<div class="slide-inner-content">'
					+	'<div class="product-tile ">'
					+		'<a class="product-image-wrapper">'
					+			'<img class="product-image" src="img/'+list[i].src+'" />'
					+		'</a>'
					+		'<div class="main-info-landing">'
					+			'<a>'
					+				'<span class="product-subtitle">'
					+					'<span>'+list[i].nm+'</span>'
					+				'</span>'
					+			'</a>'
					+			'<p class="product-price">'+list[i].pri+'</p>'
					+		'</div>'
					+	'</div>'
					+	'<div class="quick-shop">'
					+		'<a>立即购买</a>'
					+	'</div>'
					+'</div>';
		}
		obj.prepend(str);
	}
	contentcarouselListItem.each(function(k){
		appInfo(contentcarouselListItem.eq(k),product[k]);
	});
	var productDetail = [
		[
			{
				src:'L4139800U_01.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'LAN00028_L.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'LAN00059_L.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'F1271700U_01.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
		],
		[
			{
				src:'184.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'Valueset262_01.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'L9214800U_1.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'L5734700U.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
		],
		[
			{
				src:'LAN00132_01_L.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'LAN00137_L.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'LAN00135_L.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
			{
				src:'LAN00181_01.jpg',
				nm:'兰蔻小黑瓶精华肌底液',
				pri:'￥760'
			},
		]
	];
var productDetailPro = $('.product-type .product-detail-pro');
	function appendInfo(obj,list){
		var str = '';
		for(var i = 0; i<list.length; i++){
			str += '<li class="product-detail-item">'
	    			+	'<div class="product-detail-img"><img src="img/'+list[i].src+'"></div>'
	    			+	'<div class="product-content">'
	    			+		'<span>'+list[i].nm+'</span>'
	    			+		'<h4>'+list[i].pri+'</h4>'
	    			+		'<div class="quick-shop">'
	    			+			'<a>立即购买</a>'
	    			+		'</div>'
	    			+	'</div>'
	    			+'</li>';
		}
		obj.prepend(str);
	}
	productDetailPro.each(function(k){
		appendInfo(productDetailPro.eq(k),productDetail[k]);
	});
