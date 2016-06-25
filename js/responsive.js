$(function(){
	$('.header').append('<div class="gh"><svg class="top" viewBox="0 0 96 96" width="100%"><rect width="32" height="5" x="32" y="46"></rect></svg><svg viewBox="0 0 96 96" width="100%" class="bottom"><rect width="32" height="5" x="32" y="46"></rect></svg></div>');		  
//隐藏的菜单栏
	$('.gh').click(function(){
		if($('.header').hasClass('selected')){
			$('.header').removeClass('selected');
		}										
		else{
			$('.header').addClass('selected')	
		}					
	})
})