(function(){
	var Spanclick = {
		careQulity : $('.care-qulity span'),
		careUl : $('.care-qulity ul'),
		init:function(){
			this.qulityClick();
			this.docClick();
			this.liClick();
		},
		qulityClick:function(){
			this.careQulity.each(function(k){
				$(this).click(function(e){
					e.stopPropagation();
					$(this).parent().find('ul').toggle();
				});
				
			});
		},
		liClick:function(){
			this.careUl.each(function(k){
				$(this).find('li').click(function(){
					var val = $(this).html();
					$(this).parents('.care-qulity').find('span span').html(val)
				});
			});
		},
		docClick:function(){
			var _this = this;
			$(document).click(function(){
				_this.careUl.hide();
			});
		}
	};
	Spanclick.init();
	var calCount = {
		checkBox : $('.care-product-item input[type=checkbox]'),
		total : $('.products-total'),
		n :0,
		init:function(){
			this.checkClick();
		},
		checkClick : function(){
			var _this = this;
			this.checkBox.each(function(k){
				$(this).click(function(){
					if($(this).prop('checked') == true){
						_this.n++;
						_this.total.html(_this.n);
					}else{
						_this.n--;
						_this.total.html(_this.n);
					}
				});
			});
		}
	};
	calCount.init();
})()
