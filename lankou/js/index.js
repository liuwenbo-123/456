(function(){
	//选项卡
	var listItemHover = $('.list-item-hover');
	listItemHover.hover(function(){
		$(this).find('.navigation-dropdown').toggle();
	});
	//吸顶盒
	var navigationWrapper = $('.navigation-wrapper');
	//console.log(navigationWrapper);
	var hei = navigationWrapper.offset().top;
	$(window).scroll(function(){
		var a = $(document).scrollTop();
		if(a > hei ){
			$('.navigation').css('backgroundColor','#000');
			$('.navigation .level-1-list-item .level-1-list-item-link').css('color','#fff');
			navigationWrapper.removeClass('navigation-wrapper');
			navigationWrapper.addClass('fixed');
		}
		if(a < 68 ){
			navigationWrapper.addClass('navigation-wrapper');
			navigationWrapper.removeClass('fixed');
			$('.navigation').css('backgroundColor','#fff');
			$('.navigation .level-1-list-item .level-1-list-item-link').css('color','#000');
		}
	});
	//淡入淡出全屏轮播
	var Lunbo = {
		now : 0,
		next : 0,
		imgArr : $('.carousel .banner img'),
		uiWrapper : $('.banner'),
		uiPrev : $('.carousel .btn-left'),
		uiNext : $('.carousel .btn-right'),
		circles : $('.circle span'),
		speed : 4000,
		timer : null,
		init:function(){
			this.autoPlay();
			this.uiWrapperHover();
			this.uiNextClick();
			this.uiPrevClick();
			this.circlesClick();
		},
		/*更换图片*/
		switchImg:function(){
			this.imgArr.eq(this.now).animate({
				'opacity': 0
			},500);
			this.imgArr.eq(this.next).animate({
				'opacity': 1
			},500);
			this.circles.eq(this.now).removeClass('active');
			this.circles.eq(this.next).addClass('active');
			this.now = this.next;
		},
		/*自动播放*/
		autoPlay:function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.next++;
				_this.next %= _this.imgArr.length;
				_this.switchImg();
			},_this.speed);
		},
		/*鼠标移入移出*/
		uiWrapperHover:function(){
			var _this = this;
			this.uiWrapper.hover(function(){
				clearInterval(_this.timer);
			},function(){
				_this.autoPlay();
			});
		},
		/*点击下一张*/
		uiNextClick:function(){
			//alert(1);
			var _this = this;
			this.uiNext.click(function(){
				_this.next++;
				_this.next %= _this.imgArr.length;
				_this.switchImg();
			});
		},
		/*点击上一张*/
		uiPrevClick:function(){
			var _this = this;
			this.uiPrev.click(function(){
				_this.next--;
				if(_this.next <= -1){
					_this.next = _this.imgArr.length - 1;
				}
				_this.switchImg();
			});
		},
		/*点击小圆圈*/
		circlesClick:function(){
			var _this = this;
			this.circles.each(function(k,v){
				$(v).click(function(){
					_this.next = k;
					_this.switchImg();
				});
			});
		}
	};
	Lunbo.init();
	//滚动轮播
	
		function SlideBanner(obj){
			this.banner = obj;
			this.imgWrapper = obj.find('.contentcarousel-list');
			this.circleItem =  obj.find('.circle span');
			this.imgs =  obj.find('.contentcarousel-list .contentcarousel-list-item');
			this.index = 0;
			this.imgWidth = this.imgs.eq(0).width();
			this.imgsWidth = this.imgWidth*this.imgs.length;
			//this.control = obj.find('.control');
			this.controlPre =  obj.find('.jcarousel-clip .btn-left');
			this.controlNext = obj.find('.jcarousel-clip .btn-right');
		}
		SlideBanner.prototype = {
			constructor: SlideBanner.prototype.constructor,
			__proto__: SlideBanner.prototype.__proto__,
			init: function(){
				this.leftBtnClick();
				this.rightBtnClick();
				this.circleClick();
				//this.objHover();
			},
			leftBtnClick:function(){
				var _this = this;
				this.controlPre.click(function(){
					_this.index--;
					if(_this.index <= 0){
						_this.index = 0	;
					}
					_this.imgAnimate();
				});
			},
			rightBtnClick:function(){
				var _this = this;
				this.controlNext.click(function(){
					_this.index++;
					if(_this.index >= _this.imgs.length){
						_this.index = _this.imgs.length-1;
						return;
					}
					//console.log(_this.index);
					_this.imgAnimate();
				});
			},
			circleClick:function(){
				var _this = this;
				this.circleItem.each(function(k){
					_this.circleItem.eq(k).click(function(){
						_this.index = k;
						_this.imgAnimate();
					});
				});
			},
			objHover:function(){
				var _this = this;
				this.banner.hover(function(){
					_this.control.animate({
						opacity:1
					},500);
				},function(){
					_this.control.animate({
						opacity:0
					},200);
				});
			},
			imgAnimate: function(){
				var _this = this;
				this.imgWrapper.animate({
					marginLeft:-this.imgWidth*this.index
				},500,function(){
					_this.circleItem.eq(_this.index).addClass('active').siblings().removeClass('active');
					//_this.imgs.eq(_this.index).siblings().appendTo(_this.imgWrapper);
				});	
			}
		}
		var banner = new SlideBanner($('.banner-box'));
		banner.init();
		//产品类型选项卡
		var Select = {
			productNav : $('.product-type .product-nav').find(':gt(0)'),
			productNavItem : $('.product-detail .product-detail-pro'),
			init:function(){
				this.productNavClick();
			},
			productNavClick:function(){
				var _this = this;
				this.productNav.each(function(k){
					
					_this.productNav.eq(k).click(function(){
						$(this).addClass('active').siblings().removeClass('active');
						_this.productNavItem.eq(k).addClass('active').siblings().removeClass('active');
					});
				});
			}
		};
		Select.init();
		
		//go-top
	var  Gotop = {
			top: $('.go-top'),
			a:0,
			timer:null,
			init:function(){
				this.scroll();
				this.topClick();
			},
			scroll:function(){
				var that = this;
				$(window).scroll(function(){
					that.a = $(document).scrollTop();//获取滚动条高度
					if(that.a > 100){
						that.top.fadeIn(500);
					}
					if(that.a <= 0){
						that.top.fadeOut(500);
					}
				});
			},
			
			topClick:function(){
				var that = this;
				that.top.click(function(){
					that.a = $(document).scrollTop();
					clearInterval(that.timer);
					that.timer =setInterval(function(){
						that.a -= 30;
						$(document).scrollTop(that.a);//获取滚动条移动到的位置
						if (that.a<=0){
							clearInterval(that.timer);	
							that.top.fadeOut(500);	 
						}
					},13);
				});
			}
		}
		Gotop.init();
		
		
		//联系我们
		var Contact = {
			con :$('.contact .con'),
			contact : $('.contact'),
			init:function(){
				this.scroll();
				this.conHover();
			},
			scroll:function(){
				var that = this;
				$(window).scroll(function(){
					that.a = $(document).scrollTop();//获取滚动条高度
					if(that.a > 1000){
						that.contact.fadeIn(500);
					}
					if(that.a <= 300){
						that.contact.fadeOut(500);
					}
				});
			},
			conHover:function(){
				var that = this;
				this.con.hover(function(){
					console.log($(this));
					$(this).find('.js-sh').show();
				},function(){
					$(this).find('.js-sh').hide();
				});
			}
		};
		Contact.init();
		
		//引入尾部
		$('#footer').load('footer.html #footer-use');
})()
