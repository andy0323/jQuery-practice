;(function($) {   
	
	var _css;

	function hiddenView(obj) {
		obj.animate({
			height: '0px',
			width: '0px',
			opacity:'0.0'
		});
	}

	function showView(obj) {
		obj.animate(_css);
	}
	/**
	 *	初始化私有函数
	 */
	function initActionMove(_self) {
		_css = {
			height  : _self.css('height'),
			width   : _self.css('width'),
			opacity : _self.css('opacity'),
		};

		_self.hidden = function() {
			_self.each(hiddenView(_self));
		}
		
		_self.show = function() {
			_self.each(showView(_self));
		}
	}

	$.fn.registAtionMove = function(options) {
		var opts = $.extend({}, $.fn.registAtionMove.defaults, options);

		initActionMove(this);

		return this.each(function() { 
			// 获取对象
			var obj = $(this);
		});
	};
	$.fn.registAtionMove.defaults = {

	};

})(jQuery);