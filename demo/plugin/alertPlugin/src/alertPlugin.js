;(function($) {   

	/**
	 *	处理事件
	 */
	function handleEvent(obj, opts) {
		var type = opts.eventType;

		if (type == 'alert') {
			eventAlert(obj, opts.message);
		}else if (type == 'log') {
			eventLog(obj, opts.message);
		}
	}

	/**
	 *	警告框
	 */
	function eventAlert(obj, message) {
		obj.click(function() {
			alert(message);
		});
	}

	/**
	 *	控制台打印
	 */
	function eventLog(obj, message) {
		obj.click(function() {
			console.log(message);
		});
	}

	/**
	 *	添加一个警告框事件
	 */
	$.fn.onClickEventAlert = function(options) {  
		// 获取参数
		var opts = $.extend({}, $.fn.onClickEventAlert.defaults, options);

		return this.each(function() { 
			// 获取对象
			var obj = $(this);

			// 添加警告框事件
			handleEvent(obj, opts);
		});
	}
    $.fn.onClickEventAlert.defaults = {
    	eventType : 'alert',
    	message   : '插件尚未传入参数'
    };

})(jQuery);