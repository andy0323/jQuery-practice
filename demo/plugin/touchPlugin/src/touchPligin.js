;(function($){

	/**
	 * 根据不同的参数，绑定事件
	 */
	function bindEvent(obj, opts) {		
		switch(opts.eventType) {
			case 'touch' : 
				bindTouchEvent(obj, opts);
			break;

			case 'move' :
				bindMoveEvent(obj, opts);
			break;

			case 'drog' :
				bindDrogEvent(obj, opts);
			break;			
		}
	}

	/**
	 *	绑定点击事件
	 */
	function bindTouchEvent(obj, opts) {
		obj.click(opts.touchMethod);
	}

	/**
	 *	绑定移动事件
	 */
	function bindMoveEvent(obj, opts) {
		obj.mouseenter(opts.mouseEnterMethod);
		obj.mouseleave(opts.mouseLeaveMethod);				
	}

	/**
	 *	绑定拖拽事件
	 */
	function bindDrogEvent(obj, opts) {
		var pageX;
		var pageY;
		var moveEnable = false;

		// 开始移动
		obj.mousedown(function(e){
			pageX = e.pageX;
			pageY = e.pageY;
			moveEnable = true;		
			opts.drogBegainMethod();	
		});

		// 正在移动
		$(document).mousemove(function(e){
			
			if (moveEnable == false) {
				return;
			};

			// 获取偏移量
			var offsetX = e.pageX - pageX;
			var offsetY = e.pageY - pageY;

			// 获取视图对象坐标
			var position = obj.position();
			var divPageX = position.left + offsetX;
			var divPageY = position.top  + offsetY;

			console.log();

			// 重新设置视图对象坐标
			var divOffset = new Object();
			divOffset.left = divPageX;
			divOffset.top  = divPageY;
		
			obj.offset(divOffset);

			// 保存新坐标
			pageX = e.pageX;
			pageY = e.pageY;
			opts.drogDuringMethod();	
		});

		// 移动结束
		obj.mouseup(function(e){
			moveEnable = false;
			$(document).mousemove = null;
			opts.drogFinishMethod();	
		});
	}

	/**
	 * 添加插件事件
	 */
	$.fn.addGesture = function(options){
		// 获取参数
		var opts = $.extend({}, $.fn.addGesture.defaults, options);

		return this.each(function() { 
			// 获取对象
			var obj = $(this);

			// 绑定事件
			bindEvent(obj, opts);
		});
	};
	$.fn.addGesture.defaults = {
		// 事件类型
		eventType   : '',
		
		//默认点击事件
		touchMethod : function(){ alert('默认点击');},
		
		// 默认鼠标移入移出时间
		mouseEnterMethod : function(){ alert('默认鼠标移入');},
		mouseLeaveMethod : function(){ alert('默认鼠标移出');},
		
		// 默认鼠标拖拽事件
		drogBegainMethod : function(){ console.log('开始拖拽');},
		drogDuringMethod : function(){ console.log('进行拖拽');},	
		drogFinishMethod : function(){ console.log('结束拖拽');}
	};
})(jQuery);