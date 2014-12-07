;(function($) {   

	$.fn.addTouchEventAlert = function(options) {  

		var opts = $.extend({},{}, options);

		this.click(function(){
			alert(1);
		});
		
		// this.alert = function() {
		// 	this.each(function (index, dom) {
		// 		this.click(function(){
		// 			alert(1);
		// 		});
		// 	});
		// }

		return this.each(function() { 

		});
	};
    
})(jQuery);