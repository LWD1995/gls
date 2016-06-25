$(function(){
	
	
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
		
		
		var glide = $('.glide').glide({

			//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值

			animationTime:100, //动画过度效果，只有当浏览器支持CSS3的时候生效

			arrows:true, //是否显示左右导航器
			//arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
			//arrowMainClass: "slider-arrow",//滑块箭头公共类名
			//arrowRightClass:"slider-arrow--right",//滑块右箭头类名
			//arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
			arrowRightText:"",//定义左右导航器文字或者符号也可以是类
			arrowLeftText:"",

			nav:true, //主导航器也就是本例中显示的小方块
			navCenter:true, //主导航器位置是否居中
			navClass:"slider-nav",//主导航器外部div类名
			navItemClass:"slider-nav__item", //本例中小方块的样式
			navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
		});
		
		
		//imagesLoaded是一个检查图片是否加载完成的javascript插件
		imagesLoaded( $('body'), function(){
			//
			 if(!isResponsive(1024)){
				jQuery('.img-scale').each(function(){
					if(jQuery(this).parent().hasClass('wp-caption')){
						jQuery(this).waypoint(function(){
							jQuery(this).parent().addClass('load-finished');
						}, { triggerOnce: true, offset: "95%" });
					} else {
						jQuery(this).waypoint(function(){
							jQuery(this).addClass('load-finished');
						}, { triggerOnce: true, offset: "95%" });
					}
				});
				
				
				
			} else {
				jQuery('.img-scale').each(function(){
					if(jQuery(this).parent().hasClass('wp-caption')){
						jQuery(this).parent().addClass('load-finished');
					} else {
						jQuery(this).addClass('load-finished');
					}
				});
			
			}
		})
	




		
		//搜索框
		$('.header .sear').hover(function(){
			$(this).addClass('sear-selected').find('.text').stop().animate({width:150},800);								  
		},
		function(){
			$(this).find('.text').stop().delay(2500).animate({width:0},800,function(){
				$('.header .sear').removeClass('sear-selected');																	
			});	
		})
		
		$(".zxns table tr:even").addClass("table1");  //奇数行的样式
    	$(".zxns table tr:odd").addClass("table2");  //偶数行的样式
		
		$('.cpyy .tab li').hover(function(){
			$('.cpyy .tab li').removeClass('selected');	
			$(this).addClass('selected');	
			
			$('.cpyy .bd .body').hide().eq($(this).index()).show();
		})
})