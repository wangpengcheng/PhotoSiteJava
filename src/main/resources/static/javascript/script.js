if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {

	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 1366 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
 
}
$(function(){
	$.ajaxSetup({  
	    async : false //取消异步  
	});   
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
	if($('.glide').size()>0){
		var glide = $('.glide').glide({
			autoplay:glide_autoplay,//是否自动播放 默认值 true如果不需要就设置此值
			animationTime:500, //动画过度效果，只有当浏览器支持CSS3的时候生效
			arrows:false, //是否显示左右导航器
			arrowRightText:"",//定义左右导航器文字或者符号也可以是类
			arrowLeftText:"",
			nav:true, //主导航器也就是本例中显示的小方块
			navCenter:true, //主导航器位置是否居中
			navClass:"slider-nav",//主导航器外部div类名
			navItemClass:"slider-nav__item", //本例中小方块的样式
			navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
			
			//
		});
	}
	
	
	//
	$('.que_list dl dd').each(function(){
		var f = $(this);
		$(this).find('.hd .ico').click(function(){
			if(f.hasClass('selected')){
				f.removeClass('selected');					
			}
			else{
				f.addClass('selected');							
			}	
		})
		
	})
	
	//输入框历史记录

	$('.h_slide .form .txt,.toper .form .input .txt').focus(function(){		
		$('.datalist').slideDown();	
	})
	//输入框赋值
	$('.datalist li').click(function(){	
		var a=$(this).html();
		//$('.datalist').slideUp();
		$('.h_slide .form .txt,.toper .form .input .txt').val(a);
		
	})
		//阻止冒泡
	$(document).bind("click",function(e){
		var target = $(e.target);
			if(target.closest(".input-wrap,input").length == 0){
			$(".datalist").slideUp();
		}
	})
	//首页阻止冒泡
	$(document).bind("click",function(e){
		var target = $(e.target);
			if(target.closest(".header .nav_af").length == 0){
			$(".header .nav_af .le4 .hdn").slideUp();
			$(".header .nav_af .le4").removeClass('selected');
		}
	})
	
	//关注 取消关注
	$('.picture_head .txt .hd .sub').click(function(){
		var f = $(this);
		if(f.hasClass('c1')){
			f.removeClass('c1');
			f.html('关注');	
		}
		else{
			f.addClass('c1');
			f.html('已关注');
		}	
	})
	
//	表格收起
	$('.user_invoice .tab table tr').each(function(){
		var f = $(this);
		$(this).find('.sq').click(function(){
			
			if(f.next().is(':visible')){
				f.next().hide();
				$(this).html('查看');
			}
			else{
				f.next().show();
				$(this).html('收起');
			}			
		})
		
	})
	



	
	
	$('#srchimg_wrap input[type=radio]').click(function(){
		
		if($(this).attr('id')=='searchtype_1'){
			var n = 0;
		}
		else{
			var n = 1;
		}
		$('#srchimg_wrap li').removeClass('selected').eq(n).addClass('selected');
		$('#srchimg_wrap .body').hide().eq(n).show();
		
	})
	
	

	
	//图片管理 删除
	$('.c_income_tab table tr').each(function(){
		var f = $(this);
		$(this).find('.del').click(function(){			
				f.hide();							
			 return false;	
		})
		
	})
	//购物车页面删除商品
	$('.s_cart table tr').each(function(){
		var f = $(this);
		$(this).find('.del').click(function(e){	
			layer.open({
			  type: 0,
			  title: '删除',
			  area: ['510px', '260px'], //宽高
			  content: $('#del_cart_good').html(),
			  btn: ['确定', '取消'],
			  yes: function(index){
			   	var id = $(e.target).attr("rec_id");
		  		loading(id);
				$.get("flow.php?step=drop_goods",{id:id},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		f.hide();	
						dialog('删除成功',2);
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
			  }
			});
		   return false;
		})
		
	})
	
	//购物车页面全部删除
	$('.all_del').click(function(e){		
		var ids='';
		$(".ui_table input[class*='checkItem']").each(function(){
			if($(this).get(0).checked){
			　　ids += $(this).val()+',' 
			}
		});
        if(ids == ''){
            dialog("请选择需要删除的素材",1);
            return;
        }
		layer.open({
			  type: 0,
			  title: '删除',
			  area: ['510px', '260px'], //宽高
			  content: $('#del_cart_goods').html(),
			  btn: ['确定', '取消'],
			  yes: function(index){
			   	loading(1);
			$.post("flow.php?step=clear",
			{
				ids:ids
			},
			    function(data){
			    loading(2);	
			      if(data.error=='0'){
			      		//$(e.target).parent().siblings().hide();
			      		dialog('删除所选素材成功',2);
			      		setTimeout(function(){
						windows_url('');
					},
					200)
				  }else{
				  	dialog(data.message,1);
				  }
			    },"json");
			  }
			});
		   return false;
	})

	
	//色调删除
	$('.c_edit .wrap .body ul li dl dd').each(function(){
		var f = $(this);
		$(this).find('em').click(function(){			
				f.hide();							
			 return false;	
		})
		
	})

 	//选择线下支付方式
 	$('.package .pay ul li').each(function(){
 			
 		$(this).find('input[type=radio]').click(function(){
 			if($(this).val()==6){
 				$('.offline').show();
 				
 			}
 			else{
 				$('.offline').hide();
 			}
 		})
 	});
	
	//选择银行
	$('.e_bank dl dd').click(function(){
		$('.e_bank dl dd').removeClass('c1')
		$(this).addClass('c1')
	})
	
	//选择图片分类
	$('.c-upload ul li').click(function(){
		$('.c-upload ul li').removeClass('selected')
		$(this).addClass('selected')
	})
	
//	//日期插件调用
//	$( "#datepicker" ).datepicker();
	
	
	//验证码 注册
	$('#getcode').on('click',function(event){
		if($(this).hasClass('disabled')){
				return false;
		}
		$(this).addClass('disabled');
		//by gy 18611706483
		var mobile;
  		var mobile_phone = $("#extend_field5").val();

  		console.log(mobile_phone);
  		if(mobile_phone='' || mobile_phone.length<11 || mobile_phone.length>11){
  			dialog('手机号不能为空',1);return false;
  		}
		loading(1);
		$.post("user.php?act=ajax_validate_sms",
			{
				mobile:$("#extend_field5").val()
			},
		    function(data){
		    loading(2);	
		      if(data.content=='succ'){
		      		dialog('短信验证码已发送',2);
			  }else{
			  	layer.closeAll();
			  	dialog(data.content,1);
			  }
		    },"json");
		
							 
		 var ths = $(this);
		 var val = $(event.target)[0].tagName == 'INPUT' ? ths.val() : ths.html();
		 var isinput = $(event.target)[0].tagName == 'INPUT' ? true : false;
		 var time = 60;
		 
		 if(isinput){
				ths.val(time+ '秒后可重发');		 
			}
			else{
				ths.html(time + '秒后可重发');
			}
			
		 _timeRun = setInterval(function(){
			if(time==1){
				ths.css('cursor','pointer');
				if(isinput){
				
					ths.val(val);		 
				}
				else{
				
					ths.html(val);
				}
				clearInterval(_timeRun);
				ths.removeClass('disabled');
			}
			if(time>1){
				time--;
				//console.log(time);
				ths.css('cursor','default');
				
				
				
				 //alert($(event.target)[0].tagName);
				 if(isinput){
					ths.val(time+ '秒后可重发');		 
				}
				else{
					ths.html(time + '秒后可重发');
				}
			}
			
			
		},1000);
								
		
		return false;											
	})
	//验证码 找回密码
	$('#getcodepasw').on('click',function(event){
		if($(this).hasClass('disabled')){
				return false;
		}
		$(this).addClass('disabled');
		//by gy 18611706483
		var mobile;
  		var mobile_phone = $("#paswtel").val();
  		if(mobile_phone='' || mobile_phone.length<11 || mobile_phone.length>11){
  			dialog('手机号不能为空',1);return false;
  		}
		loading(1);
		$.post("user.php?act=ajax_misspasw_sms",
			{
				mobile:$("#paswtel").val()
			},
		    function(data){
		    loading(2);	
		      if(data.content=='succ'){
		      		dialog('短信验证码已发送',2);
			  }else{
			  	layer.closeAll();
			  	dialog(data.content,1);
			  }
		    },"json");
		
							 
		 var ths = $(this);
		 var val = $(event.target)[0].tagName == 'INPUT' ? ths.val() : ths.html();
		 var isinput = $(event.target)[0].tagName == 'INPUT' ? true : false;
		 var time = 60;
		 
		 if(isinput){
				ths.val(time+ '秒后可重发');		 
			}
			else{
				ths.html(time + '秒后可重发');
			}
			
		 _timeRun = setInterval(function(){
			if(time==1){
				ths.css('cursor','pointer');
				if(isinput){
				
					ths.val(val);		 
				}
				else{
				
					ths.html(val);
				}
				clearInterval(_timeRun);
				ths.removeClass('disabled');
			}
			if(time>1){
				time--;
				//console.log(time);
				ths.css('cursor','default');
				
				
				
				 //alert($(event.target)[0].tagName);
				 if(isinput){
					ths.val(time+ '秒后可重发');		 
				}
				else{
					ths.html(time + '秒后可重发');
				}
			}
			
			
		},1000);
								
		
		return false;											
	})
	//鼠标点击变红
	$(".imgList,.container").on("click","dd.sp1",function(e){
	//$('.ui_cover .sp1').click(function(e){
		//by gy 加入购物车
		var goods        = new Object();
  		goods.goods_sn = $(this).parent().attr("sn");
  		goods.goods_title = $(this).parent().attr("title");
  		loading(1);
		$.post("flow.php?step=gy_add_to_cart",
		    {
		      goods:goods
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
		      	$(e.target).hide();
			$(e.target).next().show();
				dialog('加入购物车成功',2);
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
    	})
	//立即购买
    $('#forward').click(function(e){
        var goods        = new Object();
        goods.goods_sn = $(this).parent().attr("sn");
        goods.goods_title = $(this).parent().attr("title");
        $.ajax({
            url: './user.php?act=if_buy_this_img&sn=' + goods.goods_sn,
            type: 'GET',
            success: function (returndata) {
                var data = jQuery.parseJSON(returndata);
                switch (parseInt(data["code"])) {
                    case 1:
                        $.post("flow.php?step=gy_add_to_cart",
                            {
                                goods:goods,quick:1
                            },
                            function(data){
                                loading(2);
                                if(data.error=='0'){
                                    window.location.href="flow.php?step=cart&ok=1";
                                }else if(data.error=='10'){
                                    //window.location.href="user.php?act=login";
                                    $("#login").click();
                                }else{
                                    dialog(data.message,1);
                                }
                            },"json");
                        break;
                    case -3:
                        $("#login").click();
                        break;
                    case -1:
                        dialog( "缺少参数", 1);
                        break;

                    case -4:
                        layer.open({
                            type: 0,
                            title: '提示',
                            area: ['700px', '260px'], //宽高
                            content: $('#confirm_purchase').html(),
                            btn: ['继续购买'],
                            yes: function(index){
                                $.post("flow.php?step=gy_add_to_cart",
                                    {
                                        goods:goods,quick:1
                                    },
                                    function(data){
                                        loading(2);
                                        if(data.error=='0'){
                                            window.location.href="flow.php?step=cart&ok=1";
                                        }else if(data.error=='10'){
                                            //window.location.href="user.php?act=login";
                                            $("#login").click();
                                        }else{
                                            dialog(data.message,1);
                                        }
                                    },"json"
                                );
                            }
                        });
                        break;
                }
            },
            error: function (returndata) {
                dialog('系统错误', 1);
            }
        });


    });
	
	//鼠标点击变红
	$('#goodsinfo_add').click(function(e){
		//by gy 加入购物车
		var goods        = new Object();
  		goods.goods_sn = $(this).parent().attr("sn");
  		goods.goods_title = $(this).parent().attr("title");
  		loading(1);
		$.post("flow.php?step=gy_add_to_cart",
		    {
		      goods:goods
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
			dialog('加入购物车成功',2);
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
    	})
	//购买套餐 by gy
	$('#tc_buy').click(function(e){
        $('#tc_buy').attr("disabled","disabled");
		  var goods        = new Object();
		  var spec_arr     = new Array();
		  var number      = 1;
		  var quick	= 1;
  		  goods.quick    = quick;
		  goods.spec     = spec_arr;
		  goods.goods_id = $('input:radio:checked').val();
		  goods.number   = number;
  		loading(1);
		$.post("flow.php?step=add_to_cart",
		    {
		      goods:JSON.stringify(goods)
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
				window.location.href="flow.php?step=done";
			  }else if(data.error=='10'){
			  	dialog(data.message,1);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	})
	//双11活动 活动页面套餐直接加入购物车 by gy 2017-11-01T19:48:21+08:00
	$('.activity4').click(function(e){
		  var goods        = new Object();
		  var spec_arr     = new Array();
		  var number      = 1;
		  var quick	= 1;
  		  goods.quick    = quick;
		  goods.spec     = spec_arr;
		  goods.goods_id = $(this).attr('gid');
		  goods.number   = number;
  		loading(1);
		$.post("flow.php?step=add_to_cart",
		    {
		      goods:JSON.stringify(goods)
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
				window.location.href="flow.php?step=done";
			  }else if(data.error=='10'){
			  	dialog(data.message,1);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	})
	//购买免费活动套餐 by gy 2017-08-31T17:29:49+08:00
	$('#tcfree_buy').click(function(e){
		  var goods        = new Object();
		  var spec_arr     = new Array();
		  var number      = 1;
		  var quick	= 1;
  		  goods.quick    = quick;
		  goods.spec     = spec_arr;
		  goods.goods_id = 1;
		  goods.number   = number;
  		loading(1);
		$.post("flow.php?step=add_to_cart",
		    {
		      goods:JSON.stringify(goods)
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
		      		dialog('恭喜您抢购成功！有效期为：30天，请尽快使用！',1,5000);
		      		setTimeout(function(){
					window.location.href="flow.php?step=done";
				},
				2300)
				
			  }else if(data.error=='10'){
			  	$("#login").click();
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	})
	$(".imgList,.container").on("click","dd.sp2",function(e){
	//$('.ui_cover .sp2').click(function(e){	
		//by gy 收藏
		var goods        = new Object();
  		goods.goods_sn = $(this).parent().attr("sn");
  		goods.goods_title = $(this).parent().attr("title");
  		loading(1);
		$.get("user.php?act=collect",{goods_sn:goods.goods_sn,goods_title:goods.goods_title},
		    function(data){
		    loading(2);	
		      if(data.error=='0' || data.error=='11' ){
		      		$(e.target).hide();
				$(e.target).next().show();
				dialog('收藏成功',2);
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }
		    },"json");
	})
	
	 $(".imgList,.container").on("click","dd.sp2_1",function(e){
	//$('.ui_cover .sp2_1').click(function(e){	
		//by gy 取消收藏
		var goods        = new Object();
  		goods.goods_sn = $(this).parent().attr("sn");
  		goods.goods_title = $(this).parent().attr("title");
  		goods.class_id = $(this).parent().attr("class_id");
  		loading(1);
		$.get("user.php?act=delete_collection_bysn",{goods_sn:goods.goods_sn,goods_title:goods.goods_title,class_id:goods.class_id},
		    function(data){
		    	loading(2);
			var co = $(e.target).parent().attr("at");
		      if(data.error=='0' || data.error=='11' ){
		      		if(co=='co'){
		      			$(e.target).hide();
		      			$(e.target).parent().parent().parent().remove();
		      			//
		   //    			if($('.container').size()>0){
					// 	$(".container").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
					// }
					//
					setPiclistSize();
			      	}else{
			      		$(e.target).hide();
					$(e.target).prev().show();
					dialog('取消收藏成功',2);
			      	}
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }
		    },"json");
	})
	//搜索结果:查看相似图片 by gy
	$(".imgList,.container").on("click","dd.sp3",function(e){
	//$('.ui_cover .sp3').click(function(){	
		var goods        = new Object();
  		goods.goods_sn = $(this).parent().attr("sn");
  		goods.goods_title = $(this).parent().attr("title");
  		window.location.href="similar.php?media_id="+goods.goods_sn;
	})
	//收藏到-无自建 1》
	$('#transfer_n').click(function(){
		var sn='';
		$(".imgList input[name='checkbox']:checkbox:checked").each(function(){ 
			sn+=$(this).val()+",";
			
		})
		if(sn==''){
			dialog("请先选择需要移动的素材",1,1000);
			return false;
		}
		layer.open({
		  type: 1,
		  title: '移动到',
		  content: $('#transfer_wap_n'),
		  btn: ['确定', '取消'],
		  yes: function(index){
				var class_title= $('#collect_add_title_yd').val();
				var class_id= $('#cont .on').attr("cid");
				
				loading(1);
				$.post("user_api_collection.php?act=move",
					{
						title:class_title,cid:class_id,sn:sn
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})

	//删除收藏夹下的素材
	$('#del_goods').click(function(){
		var sn='';
		$(".imgList input[name='checkbox']:checkbox:checked").each(function(){ 
			sn+=$(this).val()+",";
			
		})
		if(sn==''){
			dialog("请先选择需要移动的素材",1,1000);
			return false;
		}
		layer.open({
		  type: 0,
		  title: '删除',
		  area: ['510px', '260px'], //宽高
		  content: $('#del_goods_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
				loading(1);
				$.post("user_api_collection.php?act=del",
					{
						sn:sn
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})
	//收藏到-无自建 2》
	$('#transfer_n .label_wrap ul li').click(function(){
		$('.label_wrap ul li').removeClass('on');
		$(this).addClass('on');
	})
	$('#transfer_wap_n .label_wrap ul li').click(function(){
		$('.label_wrap ul li').removeClass('on');
		$(this).addClass('on');
	})
	//收藏到-有自建
	$(".imgList,.container").on("click","dd.sp4",function(e){
	//$('.ui_cover .sp4').click(function(){
		var sn = $(this).parent().attr("sn");
		layer.open({
		  type: 1,
		  title: '收藏到',
		  content: $('#transfer_wap_n'),
		  btn: ['确定', '取消'],
		  yes: function(index){
		  	
		   	 var class_title= $('#collect_add_title_yd').val();
				var class_id= $('#cont .on').attr("cid");
				
				loading(1);
				$.post("user_api_collection.php?act=move",
					{
						title:class_title,cid:class_id,sn:sn
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		    

		  }
		});
	   return false;
	})
	// 删除弹窗
	$('#del').click(function(){
		layer.open({
		  type: 0,
		  title: '删除',
		  area: ['510px', '260px'], //宽高
		  content: $('#del_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		    		var class_id= $('#cont .on').attr("cid");
				loading(1);
				$.post("user_api_collection.php?act=delclass",
					{
						cid:class_id
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('user.php?act=collection_list');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})
	$('#cmm').click(function(){
		layer.open({
		  type: 0,
		  title: '重命名',
		  area: ['500px', '260px'], //宽高
		  content: $('#cmm_wrp').html(),
		  btn: ['确定', '取消'],
		  success:function(index){
		  	var class_title = $(".collection_item .c1").attr("class_title");
		  	$(".layui-layer-content .cmm_value").val(class_title);
		  },
		  yes: function(index){
		    var class_id= $('#cont .on').attr("cid");
				loading(1);
				var class_title = $(".layui-layer-content .cmm_value").val();
				var class_id = $(".collection_item .c1").attr("class_id");
				$.post("user_api_collection.php?act=cmm",
					{
						title:class_title,cid:class_id
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})

	 $('.ui_icos .btn').click(function(){
	    $(this).addClass('c1');
	    return false;
	})
	 
	//
	if($('.ui_cover').size()>0){
		
		$('.ui_cover dl dd').each(function(){
		
			var c = $(this).attr('data-title') == undefined ? $(this).attr('title') : $(this).data('title');
			$(this).poshytip({
//				content:function(updateCallback){
//					window.setTimeout(function() {
//						updateCallback(c);
//					}, 1000);
//					return c;
//				},
				className: 'tip-twitter',
				showTimeout:1000,
				alignTo: 'target',
				alignX: 'center',
				offsetY: 10,
				allowTipHover: true,
				fade: true,
				slide: true
				
			});
		})
		
	}
	
//	$('.ui_cover dl dd').poshytip({   
//		content: function(updateCallback) {    
//		 $('.ui_cover dl dd').click(function(){   
//		updateCallback('Tooltip content updated!');   }, 1000);    
//		return 'Loading...';   }  }
//		);
	
	//search-result.html  匹配度  热门
	$('.srch_head_l li').click(function(){
		$('.srch_head_l li').removeClass('selected')
		$(this).addClass('selected')
	})
	
	//标签删除
	$('.label_wrap dd').each(function(){
		var f = $(this);
		$(this).find('em').click(function(){
				f.remove();
				if($('.label_wrap dd').size()<=0){
					$('.label_wrap dl').hide();
				}
				//by gy
				var sname = f.attr("sname");
				$("#"+sname).val('');
				submitForm();
			 return false;	
		})
		
	})
	
	$('.label_wrap dt').click(function(){
		$(this).parent().hide();
		//by gy
		$(".s_clearall").val('');
		submitForm();
	})
	
	//清除所有选项
	$('.con_user_h .r').click(function(){
		var f = $(this).parent().parent();
		f.find('.con_user_b dl dd').removeClass('selected');
		//清除搜索项目
		$("#s_race").val('');
		$("#s_age").val('');
		$("#s_gender").val('');
		$("#s_quantity").val('');
	})
    //选择
    $('.con_user_b dl').each(function(){   	
		$(this).find('dd').click(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
		})
	})
   	
   	//色块
   	$('.con_color dd').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	})
    
    $('.con_color dt').click(function(){
		$(this).siblings().removeClass('selected');
		$("#s_color").val('');
	})
	 //色块2 供图者上传图片
	$('.sb .color dd').click(function(){
			
			var f = $(this);
			var color = f.children("span").css("backgroundColor");
		if(f.hasClass('selected')){
			f.removeClass('selected');
		}
		else{
			$('.sb .color dd').siblings(".selected").removeClass('selected');
			f.addClass('selected');
			$("#upload_color").val(color);
		}
	 	return false;	
	})

    //去掉供稿人
//  $('.con_more dd img').click(function(){
//		$(this).parent().find('#txt').value('1');
//	})
    
//  多标签下拉菜单出现滚动条
	$('.con_more .dropdown').easyDropDown({
		cutOff: 10,
		onChange: function(selected){
			// do something
		}
	});
	//供图者发布供图页面使用的 by gy  2017/9/22 9:08:13
	$('.editpage_input .dropdown').easyDropDown({
		cutOff: 10,
		onChange: function(selected){
			console.log(selected);
		}
	});
	//购物车结算页面选择尺寸
	
	$('#flow_default_tc .dropdown').easyDropDown({
		cutOff: 10,
		onChange: function(selected){
			change_size(selected.value);
		}
	});
	//输入内容出现×
	$('.con_more dd').each(function(){
   		var obj = $(this);
   		
   		//初始化
   		if(obj.find('.txt').val() != ''){
			obj.find('.em_img').show();
		}
		else{
			obj.find('.em_img').hide();
		}
   			
   		//输入
   		obj.find('.txt').keyup(function(){
   			
   			if($(this).val() != ''){
   				obj.find('.em_img').show();
   			}
   			else{
   				obj.find('.em_img').hide();
   			}
   		})
   		
   		//清除
   		obj.find('.em_img').click(function(){
   			obj.find('.txt').val('');
   			$(this).hide();
   		})
   	})
	
	//标签展开 收缩
	$('#more').click(function(){
		
		if($(this).hasClass('selected')){
			//收缩	
			$(this).removeClass('selected');
			$('.picture_body .item .nav ul').css('height',78);
		}
		else{
			//展开
			$(this).addClass('selected');
			$('.picture_body .item .nav ul').css('height','auto');
		}
		
		return false;
	})
	
	//变成已收藏
	$('.picture_head .img .btn li.n1').click(function(){
		
		if($(this).hasClass('c1')){
		
			$(this).removeClass('c1');
			$(this).find('a').html('收藏');
			var goods        = new Object();
  		goods.goods_sn = $(this).attr("sn");
  		goods.goods_title = $(this).attr("title");
  		goods.class_id = $(this).parent().attr("class_id");
  		loading(1);
		$.get("user.php?act=delete_collection_bysn",{goods_sn:goods.goods_sn,goods_title:goods.goods_title,class_id:goods.class_id},
		    function(data){
		    	loading(2);
		      if(data.error=='0' || data.error=='11' ){
		      		
					dialog('取消收藏成功',2);
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }
		    },"json");
		}
		else{
			$(this).addClass('c1');
			$(this).find('a').html('已收藏');
			var goods        = new Object();
  		goods.goods_sn = $(this).attr("sn");
  		goods.goods_title = $(this).attr("title");
  		loading(1);
		$.get("user.php?act=collect",{goods_sn:goods.goods_sn,goods_title:goods.goods_title},
		    function(data){
		    loading(2);	
		      if(data.error=='0' || data.error=='11' ){
				dialog('收藏成功',2);
			  }else if(data.error=='10'){
			  	//window.location.href="user.php?act=login";
			  	$("#login").click();
			  }
		    },"json");
		}
		
		
		return false;
	})
	
//	关注和取消关注
	$('.fans_page .body ul li').each(function(){
		var f = $(this);
		
		$(this).find('.focus_yes').click(function(){							
				if(f.hasClass('selected')){	
					f.removeClass('selected');
					f.find('.focus_yes').html('关注')
				}
				else{
					f.addClass('selected');
					f.find('.focus_yes').html('已关注')
				}
			 return false;	
		})
		
	})
	
	//复选框全选
	if($('.xcheck').size()>0){
		$.XCheck({
	        groupClass:".xcheck"
	    });
	}
	//购物车页面提交勾选 by gy
	$('#btn_cartcheck').click(function(event) {
		var ids ='';
		loading(1);
		$(".ui_table input[class*='checkItem']").each(function(){
			if($(this).get(0).checked){
			　　ids += $(this).val()+',' 
			}
		});
		$.post("flow.php?step=gy_move_to_cart",
			{
				ids:ids
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		//dialog('提交成功',2);
		      		setTimeout(function(){
					window.location.href="flow.php?step=cart&ok=1";
				},
				200)
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});
	
	$('.srch_head_l li').hover(function(){
		$(this).addClass('open');
		$(this).find('.con').show();
	},
	function(){
		$(this).removeClass('open');
		$(this).find('.con').hide();
	})
	
	//c_edit_illustration-01
//	//删除
//	$('.editpage_input ul li.bq dd').each(function(){
//		var f = $(this);
//		$(this).find('em').click(function(){			
//				f.hide();							
//			 return false;	
//		})
//		
//	})
	//添加
	$('.editpage_input ul li.bq a').click(function(){
		
		if($('.editpage_input ul li.bq dl dd').size()>=70){
			$('.editpage_input ul li.bq a').hide();
			//return false;
		}
	
			$('.editpage_input ul li.bq dl').append('<dd class="add">'+
				'<input type="text" name="upload_keywords[]" id="" value="" />'+
				'<em></em>'+
			'</dd>');
								
		return false;
	})
	
	$('.editpage_input ul li.bq dd em').on('click',function(){
		var f = $(this).parent();
		f.remove();											 
	})
	
	$('.editpage_input ul li.bq dd input').on('keyup',function(){
			var obj = $(this);
   		
	   		//初始化
	   		if(obj.val() == ''){
				obj.parent().find('em').hide();
			}
			else{
				obj.parent().find('em').show();
			}									 
	})
	
	
//	user_attention
//	关注和取消关注
	$('.user_attention .contain .by ul li dd').each(function(){
		var f = $(this);
		
		$(this).find('.focus_yes').click(function(){							
				if($(this).hasClass('selected')){	
					$(this).removeClass('selected');
					f.find('.focus_yes').html('关注')
				}
				else{
					$(this).addClass('selected');
					f.find('.focus_yes').html('已关注')
				}
			 return false;	
		})
		
	})
	
	 //一键关注
	 $('.user_attention .ui_btn').click(function(){
		$(this).parent().parent().parent().find('.by .focus_yes').addClass('selected');
		$(this).parent().parent().parent().find('.by .focus_yes').html('已关注');
		return false;
 	})
	
	$('.user_attention .contain .by02 ul li').each(function(){
		var f = $(this);
		
		$(this).find('.focus_q').click(function(){							
				if(f.hasClass('selected')){	
					f.removeClass('selected');
					f.find('.focus_q').html('取消关注')
				}
				else{
					f.addClass('selected');
					f.find('.focus_q').html('关注')
				}
			 return false;	
		})
		
	})
	
	//点击x删除图片
	$('.c_authen02 .c_two').each(function(){
		var f = $(this);
		$(this).find('em').click(function(){			
				f.hide();							
			 return false;	
		})
		
	})
	$('.illustration .bd').each(function(){
		var f=$(this);
	
		$(this).find('em').click(function(){			
				f.hide();
				//	c-edit-vector

			 return false; 
		})
	})
	
	$('.edit_upload .c1').each(function(){
		var f=$(this);
		$(this).find('em').click(function(){			
				f.hide();							
			 return false;
		})
	})

	/*瀑布流*/
	// if($('.container').size()>0){
	// 	$(".container").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
	// }
	//登录框中是否记住登陆状态
	// $('#login_remember').click(function() {
	// 	var labelID;
	// 	labelID = $(this).attr('for');
	// 		$('#'+labelID).trigger('click');
	// 	});
	//注册滑块
	 $('#drag').drag();
	 //个人中心修改密码
	 $('.xg_mm').click(function(){
	 	$(".edit_password").hide();
	 	$(".xg_mm_div").show();
	 })
	 //删除出现虚线框
	$('.illustration .pt em').click(function(){
		$('.illustration .pt').hide();
		return false;
	})

	//收藏页面批量管理
    	$('#batch a').click(function(){
    		var p=$(this);
    		var f= $('.user_collection label');
		f.addClass('on');
        		$(".gy_default").hide();
        		$(".gy_check").show();
        		return false;
	})
	//收藏页面批量管理
    	$('#batch_cancel a').click(function(){
    		var p=$(this);
    		var f= $('.user_collection label');
		f.removeClass('on');
        		$(".gy_check").hide();
        		$(".gy_default").show();
        		return false;
	})
    	//头部下拉菜单
	$('.header .nav_af .le4').each(function(){
		var f=$(this);
		$(this).find('.arr').click(function(){
			if(f.hasClass('selected')){
				f.removeClass('selected');
				f.find('.hdn').slideUp();
			}else{
				f.addClass('selected');
				f.find('.hdn').slideDown();
			}
		})
	})
	
	
	//	user_recored同一页面切换
	$('.user-recored06 .user_manage li').click(function(){
		$(this).addClass('c1');
		$(this).siblings('li').removeClass('c1');
	})
	//返回顶部
	$(".sidebar .n4").click(function(){
	   var sc=$(window).scrollTop();
	   $('body,html').animate({scrollTop:0},300);
	 })
	//by gy
	$(".dd_jingxuan dd").click(function(event) {
	});
	//默认选中
	$(".ms_checked").attr("checked","true"); 
	if ( $(".ms_checked").length > 0 ) {
		$(".ms_checked").attr("checked","true"); 
	} 
	//判断点击了回车
	$('#ECS_LOGINFORM').keypress(function(event){  
	    var keynum = (event.keyCode ? event.keyCode : event.which);  
	    if(keynum == '13'){  
	        ajax_signIn();
	    }  
	});  
	  //搜索下方输入页数
	  $("#pagenowb").keypress(function(event) {
	  	var keynum = (event.keyCode ? event.keyCode : event.which);  
		    if(keynum == '13'){  
		        submitFormPage($("#pagenowb").val());
		    } 
	  });
	$("#pagenowt").keypress(function(event) {
	  	var keynum = (event.keyCode ? event.keyCode : event.which);  
		    if(keynum == '13'){  
		        submitFormPage($("#pagenowt").val());
		    } 
	  });
	// $(document).keypress(function(event){  
	//     var keynum = (event.keyCode ? event.keyCode : event.which);  
	//     if(keynum == '13'){  
	//         alert('You pressed a "Enter" key in somewhere');      
	//     }  
	// });
	$("#radio_person").click(function(event) {
		$(".register_company").hide();
		$(".register_person").show();
	});
	$("#radio_company").click(function(event) {
		$(".register_person").hide();
		$(".register_company").show();
	});
	//修改头像
	$('#changeavatar').click(function(){
		layer.open({
		  type: 0,
		  title: '修改头像',
		  area: ['300px', '310px'], //宽高
		  content: $('#profile_avatar').html(),
		  btn: [],
		  success:function(index){
		  	var class_title = $(".collection_item .c1").attr("class_title");
		  	$(".layui-layer-content .cmm_value").val(class_title);
		  },
		  yes: function(index){
		    var class_id= $('#cont .on').attr("cid");
				loading(1);
				var class_title = $(".layui-layer-content .cmm_value").val();
				var class_id = $(".collection_item .c1").attr("class_id");
				$.post("user_api_collection.php?act=cmm",
					{
						title:class_title,cid:class_id
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		//dialog(data.message,2);
				      		windows_url('');
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})
	$("#ajax_done").click(function(e){
		var pid=$(this).attr("pid");
		var payid='';
		    $(".pay").find("input[type='radio']").each(function() {  
		        if ($(this).attr("checked")) {
		                   payid = $(this).val();
		                }
		    });  
		loading(1);
		$.post("user.php?act=ajax_buy_botton",
			{
				pid:pid,payid:payid
			},
		    function(data){
		    loading(2);

		      if(data.error=='0' || data.error == 0){
		      		$("#ajax_done_html").html(data.content);
		      		layer.open({
				  type: 0,
				  title: '提示',
				  area: ['510px', '260px'], //宽高
				  content: $('#reminders_wap').html(),
				  btn: ['支付成功', '支付遇到问题'],
				  yes: function(index){
				    	windows_url("http://www.meisupic.com/weixinredirect.php?order_id="+pid+"");
				  },
				  btn2:function(){
				  	window.location.href = "http://www.meisupic.com/about.php?action=questions";
				  }
				});
		      		if(payid=='5'){
		      			$("#llpaysubmit").submit();
		      		}else if(payid=='3'){
		      			 $("#alipaybotton").click();
		      		}else if(payid=='4'){
		      			var wx = "<input id=\"weixinbotton\" onclick=\"window.open('http://www.meisupic.com/user.php?act=pay_weixin&order_id="+pid+"')\" value=\"立即支付\" type=\"button\">";
		      				$("#ajax_done_html").html(wx);
		      			$("#weixinbotton").click();
		      		}
			  }else{
			  	dialog(data.massage,1);
			  }
		    },"json");
		return false;
	})
	//供图者
	//收款设置 支付宝
	$("#accountset_btn").click(function(event) {
		var extend_field100 = $("#extend_field100").val();
		var extend_field103 = $("#extend_field103").val();
		loading(1);
		$.post("design.php?act=ajax_accountset",
			{
				extend_field100:extend_field100,extend_field103:extend_field103
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		dialog(data.message,2);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});
	//验证码 设置银行卡信息
	$('#getcodebank').on('click',function(event){
		if($(this).hasClass('disabled')){
				return false;
		}
		$(this).addClass('disabled');
		//by gy 18611706483
		var mobile;
  		var mobile_phone = $("#extend_field107").val();
  		if(mobile_phone='' || mobile_phone.length<11 || mobile_phone.length>11){
  			dialog('手机号不能为空',1);return false;
  		}
		loading(1);
		$.post("design.php?act=ajax_bank_sms",
			{
				mobile:$("#extend_field107").val()
			},
		    function(data){
		    loading(2);	
		      if(data.content=='succ'){
		      		dialog('短信验证码已发送',2);
			  }else{
			  	layer.closeAll();
			  	dialog(data.content,1);
			  }
		    },"json");
		
							 
		 var ths = $(this);
		 var val = $(event.target)[0].tagName == 'INPUT' ? ths.val() : ths.html();
		 var isinput = $(event.target)[0].tagName == 'INPUT' ? true : false;
		 var time = 60;
		 
		 if(isinput){
				ths.val(time+ '秒后可重发');		 
			}
			else{
				ths.html(time + '秒后可重发');
			}
			
		 _timeRun = setInterval(function(){
			if(time==1){
				ths.css('cursor','pointer');
				if(isinput){
				
					ths.val(val);		 
				}
				else{
				
					ths.html(val);
				}
				clearInterval(_timeRun);
				ths.removeClass('disabled');
			}
			if(time>1){
				time--;
				//console.log(time);
				ths.css('cursor','default');
				
				
				
				 //alert($(event.target)[0].tagName);
				 if(isinput){
					ths.val(time+ '秒后可重发');		 
				}
				else{
					ths.html(time + '秒后可重发');
				}
			}
			
			
		},1000);
								
		
		return false;											
	})
	//收款设置 银行卡 267472
	$("#accountsetbank_btn").click(function(event) {
		var extend_field104 = $("#extend_field104").val();
		var extend_field105 = $("#extend_field105").val();
		var extend_field106 = $("#extend_field106").val();
		var extend_field107 = $("#extend_field107").val();
		var bankcode = $("#bankcode").val();
		loading(1);
		$.post("design.php?act=ajax_accountset",
			{
				extend_field104:extend_field104,extend_field105:extend_field105,extend_field106:extend_field106,extend_field107:extend_field107,bankcode:bankcode
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		dialog(data.message,2);
		      		windows_url('',1000);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});
	//开发票表单标签切换 by gy
	$("#invoice_radio1,#invoice_radio2").click(function(event) {
		var is_checked = $(this).val();
		if(is_checked=='1'){
			$(".invoice_type_2").hide();
			$(".invoice_type_1").show();
		}else if(is_checked=='2'){
			$(".invoice_type_1").hide();
			$(".invoice_type_2").show();　　
		}
	});
	//开发票动态变更总金额
	$(".goods_amount").click(function(){
		var goods_amount = parseFloat($(this).attr("amount")) * 10000000000;
		var is_checked = $(this).is(':checked');
		var amount = parseFloat($("#amount_money").html()) * 10000000000;
		if(is_checked){
			amount=amount+goods_amount;
		}else{
			amount=amount-goods_amount;
		}
		$("#amount_money").html(amount / 10000000000);
	})
	//提交发票信息
	$("#invoice_add_1,#invoice_add_2").click(function(){
			var amount_money=$("#amount_money").html();
			var type=$(this).attr("invoice_type");
			if(amount_money=='0' || amount_money==''){
				dialog('请先选择订单',1);
				return false;
			}
			if(Number(amount_money)<200){
				dialog('金额低于200不能开发票',1);
				return false;
			}
			if(type=='1'){
				if($("#invoice_title").val()==''){
					dialog('请填写发票抬头',1);
					return false;
				}
				if($("#invoice_num").val()==''){
					dialog('请填写纳税人识别号/统一社会信用代码',1);
					return false;
				}
				if($("#invoice_lianxiren").val()==''){
					dialog('请填写联系人',1);
					return false;
				}
				if($("#invoice_address").val()==''){
					dialog('请填写邮寄地址',1);
					return false;
				}
				if($("#invoice_mobile").val()==''){
					dialog('请填写电话/手机号',1);
					return false;
				}
			}else if(type=='2'){
				if($("#invoice_title2").val()==''){
					dialog('请填写发票抬头',1);
					return false;
				}
				if($("#invoice_num2").val()==''){
					dialog('请填写税号',1);
					return false;
				}
				if($("#bank_num").val()==''){
					dialog('请填写银行帐号',1);
					return false;
				}
				if($("#bank_name").val()==''){
					dialog('请填写开户行',1);
					return false;
				}
				if($("#company_address").val()==''){
					dialog('请填写公司注册地址、电话',1);
					return false;
				}
				if($("#company_yingye").val()==''){
					dialog('请上传营业执照(新版)',1);
					return false;
				}
				if($("#company_nashui").val()==''){
					dialog('请上传一般纳税人证明',1);
					return false;
				}
				if($("#invoice_lianxiren2").val()==''){
					dialog('请填写联系人',1);
					return false;
				}
				if($("#invoice_address2").val()==''){
					dialog('请填写邮寄地址',1);
					return false;
				}
				if($("#invoice_mobile2").val()==''){
					dialog('请填写电话/手机号',1);
					return false;
				}
			}else{
				return false;
			}
			// var ids='';
			// $(".goods_amount input:checkbox").each(function(){
			// 	var ids=
			// 	alert(1);
			// if (true == $(this).attr("checked")) {
			// ids += $(this).attr('value')+',';
			// }
			// }); 
			var goods_amount = $(".goods_amount");
		            var value = new Array();
		            var ids='';
		            for(var i = 0; i < goods_amount.length; i++){
		             if(goods_amount[i].checked)
		           
		         		ids += goods_amount[i].value+',';
		            }
		            $("#order_ids").val(ids);
		            $("#order_ids2").val(ids);
			document.invoice_addFORM.submit();
	})
	//我的收藏两边对齐js
	if($('.collection_item ul li').size()>6){
		$('.collection_item ul').addClass('justify')
	}
	//授权用户：设为默认
	$(".authorized_default").click(function(event) {
		loading(1);
		$.post("user.php?act=authorized_default",
			{
				id:$(this).attr("id")
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		dialog(data.message,2);
		      		windows_url('',1000);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});
	//授权用户：删除
	$(".authorized_del").click(function(event) {
		var aid=$(this).attr('id');
		layer.open({
		  type: 0,
		  title: '删除',
		  area: ['510px', '260px'], //宽高
		  content: $('#del_authorized').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
				loading(1);
				$.post("user.php?act=authorized_del",
					{
						id:aid
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		dialog(data.message,2);
				      		windows_url('',1000);
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	});
	//修改用户信息：取消
	$(".subm_cancel").click(function(event) {
		$(".xg_mm_div").hide();
		$(".edit_password").show();

	});
	//子账户：修改
	$(".subaccount_edit").click(function(event) {
		var sid=$(this).attr("id");
		var sinfo = [];
		//dialog('功能测试中，未开放',1);return false;
		$.get("user.php?act=subaccount_edit_info",{id:sid},
				    function(data){
				      if(data.error=='0'){
				      		$("#tc_goods_name").val(data.content.goods_name);
				      		$("#tc_points_max").val(data.content.max);
				      		$("#subaccounut_other_name").val(data.content.subaccounut_other_name);
				      		$("#tc_points_now").val(data.content.points_nodown);
				      		
				      		layer.open({
						  type: 0,
						  title: '修改子账户',
						  area: ['645px', '410px'], //宽高
						  content: $('#account-wrap').html(),
						   btn: ['确定', '取消'],
						  yes: function(index){
						    loading(1);
							$.post("user.php?act=subaccount_edit",
								{
									id:sid,subname:$(".layui-layer-content .subaccounut_other_name").val(),points:$(".layui-layer-content .points_max").val()
								},
							    function(data){
							    loading(2);	
							      if(data.error=='0'){
							      		dialog(data.message,2);
							      		windows_url('',1000);
								  }else{
								  	dialog(data.message,1);
								  }
							    },"json");
						  },
						    success: function(layero, index){
						    	$(".layui-layer-content .goods_name").val($("#tc_goods_name").val());
						    	$(".layui-layer-content .subaccounut_other_name").val($("#subaccounut_other_name").val());
						    	$(".layui-layer-content .points_max").attr("placeholder","最大:"+$("#tc_points_max").val()+",当前可用:"+$("#tc_points_now").val());
							}
						});
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
	   return false;
	});
	//tab切换 新版专辑列表切换
	$('.album_page01 .head .hd li').click(function(){
		$('.album_page01 .head .hd li').removeClass('selected');
		$(this).addClass('selected');
		$('.album_page .glide ul').hide().eq($(this).index()).show();
		
		return false;
	})
	//供图者 其他信息保存
	$('#designset_save').click(function(event) {
		var qq=$('#design_qq').val();
		var weixin=$('#design_weixin').val();
		var city=$('#design_city').val();
		loading(1);
		$.post("design.php?act=designset",
			{
				qq:qq,weixin:weixin,city:city
			},
		    function(data){
		    loading(2);	
		      if(data.content=='0'){
		      		dialog(data.message,2);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});
	//上传图片的时候增加loading by gy 2017/9/29 8:06:29
	$("#class_loading").on('click', '', function(event) {
		loading(1);
		//$("#class_loading").attr("disabled",true);
		$("#class_loading").attr("backgroundColor","#dddddd");
	});
	//举报图片 by gy
	$('.jubao').on('click', function(event) {
		var _this=$(this);
		var sn =_this.attr("sn");
		var page_url =_this.attr("page_url");
		loading(1);	
		$.post("jubao.php",
			{
				sn:sn,page_url:page_url
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		dialog(data.message,2);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	});

//下载小样图
    $("#down_sample_img").on("click", function () {
        var sn = $(this).attr("data-sn");
        $.ajax({
            url: './user.php?act=down_example_img_info&sn=' + sn,
            type: 'GET',
            success: function (returndata) {
                var data = jQuery.parseJSON(returndata);
                switch (parseInt(data["result"])) {
                    case -3:
                        dialog('样图点数不足', 1);
                        break;
                    case -2:
                        dialog('没有下载样图权限', 1);
                        break;
                    case 1:
                        $('#down_example_wap_coutent').text("您还剩余" + data["count"] + "张高清小样图可下载。高清样图没有获得授权，请不要用于任何商业用途、网络分享。");
                        layer.open({
                            type: 0,
                            title: '下载样图',
                            area: ['810px', '260px'], //宽高
                            content: $('#down_example_wap').html(),
                            btn: ['下载', '取消'],
                            yes: function(index){
                                window.open(data["next_url"], "_blank");
                                layer.closeAll();
                            }
                        });
                        break;
                    case 0:

                        window.open(data["next_url"], "_blank");
                        break;
                }
            },
            error: function (returndata) {
                dialog('系统错误', 1);
            }
        });
    });
})

$(function(){
	/*导航滑动*/
	function loadNavSlide(){
		if($('.srch_head_l1').size()<=0) return false;                                                                              
		var navSelected = $('.srch_head_l1 li.selected');
		$('.srch_head_l1 .f-line').css({left: navSelected[0].offsetLeft + 'px','width':navSelected.width()});
		
 		$('.srch_head_l1 li').hover(function(){
			$('.srch_head_l1 li').removeClass('selected');
			$(this).addClass('selected');
			$('.srch_head_l1 .f-line').stop().animate({left: $(this)[0].offsetLeft + 'px','width':$(this).width()},200);
		});
	}	
	/*load*/
	loadNavSlide();/*导航滑动*/	

	
})

window.onload = function(){ 
　　if($('.container').size()>0 && $('.container_no').size()<1){
		$(".container").rowGrid({itemSelector: ".item", minMargin: 10, maxMargin: 25, firstItemClass: "first-item"});
		}

} 
