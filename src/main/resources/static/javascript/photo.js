!function($) {
	$.fn.Huiphoto = function(options){
		var defaults = {
			wraperWidth:"auto",
			minHeight: 280,
			minWeight: 200,
			border:0,
			padding:5,
			margin:0,
			item:'.item',
			extra:100,
		}
		var options = $.extend(defaults, options);
		this.each(function(){
			var that = $(this);
			var $imgItems;
			var index = 1;
			var $item = that.find(options.item);
			var itemsLen = $item.length||0;
			var widths = [];
			var heights = [];
			var rowWidthArray = [];
			var widthAry = [];
			var heightAry = [];
			var border_width = (options.padding + options.border) * 2;
			var container = 0;

			if(options.wraperWidth=="auto"){
				container = parseInt($(window).width() - options.margin*2 + border_width);
			}else{
				container = parseInt(options.wraperWidth - options.margin*2 + border_width);
			}
			that.css({
				"margin-left":-(options.padding + options.border)+"px",
				"margin-right":-(options.padding + options.border)+"px",
			});
			var sHeight =  new Number(container*0.3);
			if (sHeight > options.minHeight){
				sHeight = options.minHeight;
			}
			if(itemsLen==0){
				that.html("没有图片");
				$("#nopic").show();
			}else{
				$("#nopic").hide();
				var row_i=0;
				var row_width=0;
				var row_rate=0;
				var row_height = sHeight;

				$item.each(function(key,val){
					widths[key] = parseInt($(this).attr("data-width"));
					heights[key] =parseInt($(this).attr("data-height"));
				});
				for(var i = 0; i < itemsLen ; i++){
					var tmpWidth = 0 ;
					if(heights[i] >= sHeight){
						tmpWidth = Math.round(widths[i]*(row_height/heights[i]));
					}else{
						tmpWidth = widths[i];
					}
					row_width += tmpWidth + border_width;

					if (row_width >= container || (container - row_width) <= 100){
						rowWidthArray[row_i] = tmpWidth;
						row_i++;						
						var row_len =  rowWidthArray.length;
						
						row_rate = (container-row_len*border_width)/(row_width-row_len*border_width);
						
						for(var m = 0; m < row_len ; m++){
							widthAry[i-row_len+1+m] = parseInt(rowWidthArray[m] * row_rate);
							heightAry[i-row_len+1+m] = parseInt(sHeight*row_rate);
						}
						row_i=0;
						row_width = 0;
						row_rate = 0;
						row_height = sHeight;
						rowWidthArray = new Array();
					}
					else{
						rowWidthArray[row_i] = tmpWidth;
						row_i++;
					}
				}
				
			}
			
			if (row_width > 0 && rowWidthArray.length > 0){
				var row_rate = 0.9;  //为了保持一致，最后一排使用0.9的比例
				var row_len =  rowWidthArray.length;
				for(var m = 0; m < row_len ; m++){
					widthAry[itemsLen-row_len+m] = parseInt(rowWidthArray[m]*row_rate);
					heightAry[itemsLen-row_len+m] = parseInt(sHeight * row_rate);
				}
			}
			$item.each(function(key,val){
				var photoHeight = parseInt(heights[key]*widthAry[key]/widths[key]);
				$(this).css({"width":widthAry[key],"height":heightAry[key]+options.extra,"margin":options.padding});
				$(this).find(".pic-box").css({"height": photoHeight});			
				if (photoHeight < heightAry[key]){
					$(this).find(".pic-box").css({"padding-top":(heightAry[key] - photoHeight )/2});
				}				
				var $img = $(this).find("img");
				$img.css({"width":widthAry[key]});				
				$(this).fadeIn();
			});
		});
	}	
} (window.jQuery);