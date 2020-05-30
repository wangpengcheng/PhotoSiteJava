//弹窗js
$(function(){

	//  新建
	$('#xj').click(function(){
		layer.open({
		  type: 0,
		  title: '新建',
		  area: ['600px', '260px'], //宽高
		  content: $('#xj_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		  	//by gy
		var class_title= $('.layui-layer-dialog input').val();
		loading(1);
		$.post("user_api_collection.php?act=add",
			{
				title:class_title
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
	})
	
	//转发
	$('#share').click(function(){
		layer.open({
		  type: 0,
		  title: '转发',
		  anim:0,
		  area: ['740px', '445px'], //宽高
		  content: $('#share_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//重命名
	// $('#cmm').click(function(){
	// 	layer.open({
	// 	  type: 0,
	// 	  title: '重命名',
	// 	  anim:1,
	// 	  area: ['600px', '270px'], //宽高
	// 	  content: $('#cmm_wrp').html(),
	// 	  btn: ['确定', '取消'],
	// 	  yes: function(index){
	// 	    layer.close(index);
	// 	  }
	// 	});
	//    return false;
	// })
	
	//删除弹窗
	// $('#del').click(function(){
	// 	layer.open({
	// 	  type: 0,
	// 	  title: '删除',
	// 	  anim:2,
	// 	  area: ['510px', '260px'], //宽高
	// 	  content: $('#del_wap').html(),
	// 	  btn: ['确定', '取消'],
	// 	  yes: function(index){
	// 	    layer.close(index);
	// 	  }
	// 	});
	//    return false;
	// })
	
	
	//收藏到-无自建
	// $('#transfer_n').click(function(){
	// 	layer.open({
	// 	  type: 1,
	// 	  title: '收藏到',
	// 	  content: $('#transfer_wap_n'),
	// 	  btn: ['确定', '取消'],
	// 	  yes: function(index){
	// 	    layer.close(index);
	// 	  },
	// 	    success: function(layero, index){
				
	// 			$('#cont').niceScroll({
	// 		        cursorcolor: "#aba9a9",//#CC0071 光标颜色
	// 		        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
	// 		        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
	// 		        cursorwidth: "5px", //像素光标的宽度
	// 		        cursorborder: "0", // 	游标边框css定义
	// 		        cursorborderradius: "0",//以像素为光标边界半径
	// 		        autohidemode: false //是否隐藏滚动条
	// 		    });
	// 		  }
	// 	});
	//    return false;
	// })
	
	
	
	// $('.label_wrap ul li').click(function(){
	// 	$('.label_wrap ul li').removeClass('on');
	// 	$(this).addClass('on');
	// })
	
	//收藏到-有自建
	$('#transfer').click(function(){
		layer.open({
		  type: 0,
		  title: '收藏到',
		  anim:4,
		  content: $('#transfer_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//文件转移到
	$('#transf').click(function(){
		layer.open({
		  type: 1,
		  title: '文件转移到',
		  anim:2,
		  content: $('#transf_wap').html(),
		  btn: ['确定', '取消'],
		  shadeClose:true,
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//取消下载图片
	$('#cancel').click(function(){
		layer.open({
		  type: 0,
		  title: '取消下载',
		  anim:6,
		  area: ['510px', '260px'], //宽高
		  content: $('#cancel_wap').html(),
		  btn: ['确定', '再考虑考虑'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
//	发票申请提交成功
	$('#invoice').click(function(){
		layer.open({
		  type: 0,
		  title: '提交成功',
		  area: ['700px', '240px'], //宽高
		  content: $('#invoice_wap').html(),
		  btn: ['确定'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
//	图片上传提交成功
	$('#imgupload').click(function(){
		layer.open({
		  type: 0,
		  title: '上传成功',
		  area: ['700px', '270px'], //宽高
		  content: $('#imgupload_wap').html(),
		 btn: ['继续上传', '查看已上传图片'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	
//提现申请成功	
	$('#withdrawal').click(function(){
		layer.open({
		  type: 0,
		  title: '提现申请成功',
		  area: ['700px', '270px'], //宽高
		  content: $('#withdrawal_wap').html(),
		 btn: ['确定'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
//已购买过的图重复加入购物车提示	
	$('#repeat').click(function(){
	layer.open({
		  type: 0,
		  title: '提示',
		  area: ['700px', '240px'], //宽高
		  content: $('#repeat_wap').html(),
		  btn: ['确定','取消'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
//取消订单	
	$('#cancelorder').click(function(){
		layer.open({
		  type: 0,
		  title: '取消订单',
		  area: ['510px', '260px'], //宽高
		  content: $('#cancelorder_wap').html(),
		  btn: ['确定', '再考虑考虑'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
//图片标题标签撰写参考标准
	$('#picture').click(function(){
		layer.open({
		  type: 0,
		  scrollbar: true,
		  title: '图片标题标签撰写参考标准',
		  area: ['660px', '620px'], //宽高
		  content: $('#picture_wap').html(),
		  btn: false,
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})

//关注点击 弹窗出现
	$('.focus_no').click(function(){
		layer.msg('此用户非供图用户，暂时不能被关注！', {
		icon: 1,
		time: 2000
		
		});
	})    
    $('.btn1').click(function(){
		layer.msg('加入购物车失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn2').click(function(){
		layer.msg('保存失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn3').click(function(){
		layer.msg('收藏失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn4').click(function(){
		layer.msg('提交失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn5').click(function(){
		layer.msg('上传失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn6').click(function(){
		layer.msg('下载失败', {
		icon: 1,
		time: 2000		
		});
	})
    $('.btn15').click(function(){
		layer.msg('登录失败', {
		icon: 1,
		time: 2000	
		});
	})
    
    $('.btn7').click(function(){
		layer.msg('加入购物车成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn8').click(function(){
		layer.msg('保存成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn9').click(function(){
		layer.msg('收藏成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn10').click(function(){
		layer.msg('提交成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn11').click(function(){
		layer.msg('上传成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn12').click(function(){
		layer.msg('下载成功', {
		icon: 2,
		time: 2000		
		});
	})
     $('.btn14').click(function(){
		layer.msg('登录成功', {
		icon: 2,
		time: 2000		
		});
	})
    $('.btn13').click(function(){
		layer.msg('此用户非供图用户，暂时不能被关注', {
		icon: 1,
		time: 2000		
		});
	})
    
	
	//下载授权书弹窗
    /*
	$('.user_record table .xiazai').click(function(e){
		var rec_id = $(this).attr('rec_id');
		var _this = $(this);
		layer.open({
		  type: 1,
		 title: '选择授权用户',
		  content: $('#select_wrap'),
		  btn: ['确定', '取消'],
		  area: ['485px', '453px'], //宽高
		  move: false,
		  btn: ['确定', '取消'],
		  yes: function(index){
		  	var a_id=0;
		  	var new_name = $('.layui-layer-content .select_wrap .ui_input').val();
			$('.layui-layer-content ul#select li').each(function(index,ele){
				 if($(ele).is('.on')){
			                a_id=$(ele).attr('id');
			          	}
			});
			if(a_id==0 && new_name==''){
				dialog('请选择一个需要授权的用户',2);return false;
			}
				loading(1);
				$.post("http://www.meisupic.com/user.php?act=ajax_pdf",
					{
						title:new_name,a_id:a_id,rec_id:rec_id
					},
				    function(data){
				    loading(2);	
				      if(data.error=='0'){
				      		layer.close(index);
				      		var html = '<p class="xiazai_redown" rec_id="'+rec_id+'"><a href="javascript:void(0)">'+data.authorized_name+'</a></p>';
				      		_this.parent().html(html);
				      		windows_url('http://www.meisupic.com/pdf.php?id='+data.content);
					  }else{
					  	dialog(data.message,1);
					  }
				    },"json");
		  }
		});
	   return false;
	})
		//下载授权书弹窗
		$(".user_record table .xiazai_redown").on("click",function(e){
		var rec_id = $(this).attr('rec_id');
		loading(1);
		$.post("http://www.meisupic.com/user.php?act=ajax_pdf",
			{
				rec_id:rec_id
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		windows_url('http://www.meisupic.com/pdf.php?id='+data.content);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
	   return false;
	})
	*/
	//	登录弹窗
   $('#login').click(function(){
   	    var index = layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  area: ['520px', '470px'], //宽高
		  content: $('#login_wrap'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
//		layer.open();
	   return false;
	})
   
   //登录地方点击注册
   	$('.zhuce').click(function(){
   		layer.closeAll();
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  //area: ['520px', '395px'], //宽高   带滑块的注册条
		  //content: $('#register_wrap'),
		  area: ['515px', '610px'], //宽高
		  content: $('#reg_wrap'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
   
  //注册
   	$('#register').click(function(){
		layer.open({
		  type: 1,
		  anim: 0,
		  title: false,
		  closeBtn: 1,
		  area: ['515px', '610px'], //宽高
		  content: $('#reg_wrap'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
   
//注册地方点击登录
	$('.denglu').click(function(){
		layer.closeAll();
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  area: ['520px', '470px'], //宽高
		  content: $('#login_wrap'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//注册2
	$('#regs').click(function(){
		$("#reg_mobile_drag").val('');
		$('#drag').html('');
		$("#div_regs").hide();
		$('#drag').drag();
		layer.closeAll();
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  area: ['515px', '610px'], //宽高
		  content: $('#reg_wrap'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})


	//新增授权用户
	$('#auth').click(function(){
		layer.open({
		  type: 0,
		  title: '新增授权用户',
		  anim:0,
		  content: $('#authorization').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		   var authorized_name= $('.layui-layer-dialog input').val();
		loading(1);
		$.post("user.php?act=authorized_add",
			{
				title:authorized_name
			},
		    function(data){
		    loading(2);	
		      if(data.error=='0'){
		      		layer.close(index);
		      		dialog(data.message,2);
		      		windows_url('',1000);
			  }else{
			  	dialog(data.message,1);
			  }
		    },"json");
		  }
		});
	   return false;
	})

   
	//登录之前弹窗  
    $('.ui_icos .btn1,.ui_icos .btn2').click(function(){
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  shade:0.5, 
		  area: ['520px', '470px'], //宽高
		  content: $('#login_wrap_bf'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
//	微信支付弹窗
	$('#pay').click(function(){
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  area: ['550px', '470px'], //宽高
		  content: $('#pay_wrap_zf'),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})


	
	//扩展授权弹窗
	$('#lool').click(function(){
		layer.open({
		  type: 1,
		  title: '扩展授权',
		  closeBtn: 1,
		  shade:0.8, 
		  area: ['720px', '550px'], //宽高
		  content: $('#picture_dialog').html(),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	
	
	
	//查看大图片
	$('#img_p').click(function(){
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  shade:0.8,
		  shadeClose: true,
		  content: $('#big_img').html(),
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//以图搜图弹窗
	$('#srch_img').click(function(){
		layer.open({
		  type: 1,
		  title: '以图搜图',
		  closeBtn: 1,
		  shade:0.8, 
		  area: ['850px', '340px'], //宽高
		  content: $('#srchimg_wrap'),
		  yes: function(index){
		    layer.close(index);
		  },
		  success: function(layero, index){
			 
		  }
		});
	   return false;
	})
	
	//文件转移到
	$('#zy').click(function(){
		layer.open({
		  type: 0,
		  title: '文件移动到',
		  area: ['600px', '350px'], //宽高
		  content: $('#transfer').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	
	//转发分享
	$('#zf').click(function(){
		layer.open({
		  type: 0,
		  title: '转发',
		  area: ['730px', '440px'], //宽高
		  content: $('#share_wap').html(),
		  btn: ['确定', '取消'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	
	//重命名
	// $('#cmm').click(function(){
	// 	layer.open({
	// 	  type: 0,
	// 	  title: '重命名',
	// 	  area: ['500px', '260px'], //宽高
	// 	  content: $('#cmm_wrp').html(),
	// 	  btn: ['确定', '取消'],
	// 	  yes: function(index){
	// 	    layer.close(index);
	// 	  }
	// 	});
	//    return false;
	// })
	//敬请期待
	$('#forward_buy').click(function(){
		layer.open({
		  type: 0,
		  title: '敬请期待',
		  area: ['545px', '470px'], //宽高
		  content: $('#forward_wap').html(),
		  btn: ['提交'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	//支付提示
	$('#reminders').click(function(){
		layer.open({
		  type: 0,
		  title: '提示',
		  anim:2,
		  area: ['510px', '260px'], //宽高
		  content: $('#reminders_wap').html(),
		  btn: ['支付成功', '支付遇到问题'],
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
//选择授权用户
	$('#select-man').click(function(){
		layer.open({
		  type: 1,
		  title: '选择授权用户',
		  content: $('#select_wrap'),
		  btn: ['确定', '取消'],
		  area: ['485px', '453px'], //宽高
		  move: false,
		  yes: function(index){
		    layer.close(index);
		  }
		});
	   return false;
	})
	$('.select ul li').click(function(){
		$('.select ul li').removeClass('on');
		$(this).addClass('on');
	})
	// //滚动条美化
	// $('#select').niceScroll({
 //        cursorcolor: "#b7b8b8",//#b7b8b8 光标颜色
 //        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
 //        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
 //        cursorwidth: "8px", //像素光标的宽度
 //        cursorborder: "0", // 	游标边框css定义
 //        cursorborderradius: "8px",//以像素为光标边界半径
 //        autohidemode: false //是否隐藏滚动条
 //    });
 //    //滚动条美化
	// $('#cont').niceScroll({
 //        cursorcolor: "#b7b8b8",//#b7b8b8 光标颜色
 //        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
 //        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
 //        cursorwidth: "8px", //像素光标的宽度
 //        cursorborder: "0", // 	游标边框css定义
 //        cursorborderradius: "8px",//以像素为光标边界半径
 //        autohidemode: false //是否隐藏滚动条
 //    });
})
