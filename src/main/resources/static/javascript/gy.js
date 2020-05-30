/*
新增自定义js
 */

//搜索
function changeSearch(name,value){
	//人物
	if($('#people_only').is(':checked')) { 
		$("#s_"+name).val(1);
	}else{
		$("#s_"+name).val('');
	}

	if(name=='sort'){
		$("#s_"+name).val(value);
		submitForm();
	}
	if(name=='orientation'){
		$("#s_"+name).val(value);
		submitForm();
	}
	if(name=='phototype'){
		$("#s_"+name).val(value);
		submitForm();
	}
	if(name=='phototypesearch'){
		$("#s_phototype").val(value);
	}
	if(name=='race'){
		$("#s_"+name).val(value);
	}
	if(name=='age'){
		$("#s_"+name).val(value);
	}
	if(name=='gender'){
		$("#s_"+name).val(value);
	}
	if(name=='quantity'){
		$("#s_"+name).val(value);
	}
	//颜色
	if(name=='color'){
		$("#s_"+name).val(value);
		submitForm();
	}
	//更多条件
	//分类
	if(name=='categories'){
		$("#s_"+name).val(value);
	}
	    //用途
	    if(name=='editorial'){
	        $("#s_"+name).val(value);
	    }
    

	
}
function submitFormNextPageSimilar(offset){
	dialog('搜索结果加载中...',2);
	$("#s_offset_similar").val(offset);
	$("#myformsimilar").submit();
}
function submitFormNextPage(offset){
	dialog('搜索结果加载中...',2);
	$("#s_offset").val(offset);
	if($("#exclude_keyword").val()){
		$("#s_exclude_keyword").val($("#exclude_keyword").val());
	}
	$("#myform").submit();
}
function submitFormPage(offset){
	dialog('搜索结果加载中...',2);
	$("#s_offset").val(offset);
	if($("#exclude_keyword").val()){
		$("#s_exclude_keyword").val($("#exclude_keyword").val());
	}
	$("#myform").submit();
}
function submitForm(){
	// if($("#keyword").val()==''){
	// 	alert("关键字不能为空");
	// 	return false;
	// }
	dialog('搜索结果加载中...',2);
	$("#s_offset").val('');
	if($("#username").val()){
		$("#s_username").val($("#username").val());
	}
	$("#s_exclude_keyword").val($("#exclude_keyword").val());
	$("#myform").submit();
}
//修改要下载的图片尺寸 by gy 2017/8/31 23:28:01
function change_size(value){
	if(value !== null || value !== undefined || value !== ''){
		loading(1);
		$.post("flow.php?step=change_size",
		    {
		      value:value
		    },
		    function(data){
		      	loading(2);
		      if(data.error=='0'){
		      		dialog("更改下载尺寸成功",2);
			  }else{
			  	//alert(data.content);
			  	dialog(data.content,1);
			  }
		    },"json");
	}
}
function signIn(){
	var user = '';
	username = $("#login_username").val();
	password = $("#login_password").val();
	remember = $("#login_remember").val();
	loading(1);
	$.post("user.php?act=signin",
	    {
	      username:username,password:encodeURIComponent(password),remember:remember
	    },
	    function(data){
	      	loading(2);
	      if(data.error=='0'){
	      		$("#ECS_MEMBERZONE").html(data.content);
	      		$(".layui-layer-shade").remove();
	      		$("#login_wrap").parent().fadeOut(500);
	      		$("#login_wrap").fadeOut(1200);
	      		setTimeout(function(){
				$("#login_wrap").parent().parent().remove();
			},
			600)
	      		dialog("登录成功",2);
		  }else{
		  	//alert(data.content);
		  	dialog(data.content,1);
		  }
	    },"json");
}
function ajax_signIn(){
	var user = '';
	username = $("#login_wrap #login_username,.login_form #login_username").val();
	password = $("#login_wrap #login_password,.login_form #login_password").val();
	remember = $("#login_remember").val();
	if($("#is_page").length > 0){
		var is_page = $("#is_page").val();
	}else{
		var is_page='';
	}
	if($("#is_index").length > 0){
		var is_index = $("#is_index").val();
	}
	loading(1);
	$.post("user.php?act=signin",
	    {
	      username:username,password:encodeURIComponent(password),remember:remember,is_index:is_index
	    },
	    function(data){
	      	loading(2);
	      if(data.error=='0'){
	      		$("#ECS_MEMBERZONE").html(data.content);
	      		$(".layui-layer-shade").remove();
	      		$("#login_wrap").parent().fadeOut(500);
	      		$("#login_wrap").fadeOut(1200);
	      		setTimeout(function(){
				$("#login_wrap").parent().parent().remove();
			},
			600)
		 	dialog("登录成功",2);
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

		 	if(is_page!=''){
		 		windows_url(is_page);	
		 	}
		 	
		  }else{
		  	//alert(data.content);
		  	dialog(data.content,1);
		  }
	    },"json");
}
function ajax_register(){
  var username  = $("#extend_field5").val();
  var username_html = $(".hidden_reg_mobile_drag").val();

  if(username==''){
  	username=username_html;
  }
  var password  = $("#password").val();
  var confirm_password = $("#confirm_password").val();
  var sms_code = $("#sms_code").val();

  var msg = "";
  // 检查输入
 //  var msg = '';
 //  if (username.length == 0)
 //  {
 //    msg += username_empty + '\n';
 //  }
 //  else if (username.match(/^\s*$|^c:\\con\\con$|[%,\'\*\"\s\t\<\>\&\\]/))
 //  {
 //    msg += username_invalid + '\n';
 //  }
 //  else if (username.length < 3)
 //  {
 //    //msg += username_shorter + '\n';
 //  }

 //  if (password.length == 0)
 //  {
 //    msg += password_empty + '\n';
 //  }
 //  else if (password.length < 6)
 //  {
 //    msg += password_shorter + '\n';
 //  }
 //  if (/ /.test(password) == true)
 //  {
	// msg += passwd_balnk + '\n';
  // }
  // if (confirm_password != password )
  // {
  //   msg += confirm_password_invalid + '\n';
  // }


  var myreg = /^(((13[0-9]{1})||(14[0-9]{1})(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if(myreg.test(username) && !sms_code){
     //msg += '- ' + '短信验证码不能为空' + '\n';
     dialog('短信验证码不能为空',1);
  }
  $.post("user.php?act=ajax_register",
			{
				username:username,password:encodeURIComponent(password),confirm_password:encodeURIComponent(confirm_password),sms_code:sms_code
			},
		    function(data){
		    loading(2);	
		      if(data.content=='SUCC'){
		      		dialog("注册成功",2);
			      	setTimeout(function(){
					window.location.reload();
				},
				1000)
			  }else{
			  	dialog(data.content,1);
			  }
		    },"json");
}
function dialog(text,icon,time){
	if(!time){
		time=1500;
	}
	layer.msg(text, {
		icon: icon,
		time: time		
		});
}
//waiting
function loading(type){
	if(type=='1'){
		$('.loader').show();
		setTimeout(function(){
				$('.loader').hide();
			},
			1000)
	}else{
		$('.loader').hide();
	}
}
function windows_url(url,time){
	if(!time){
		time=500;
	}
	setTimeout(function(){
		if(url==''){
			window.location.reload();
		}else{
			window.location.href=url;
		}
	},
	time)
}
function checkMobile(mobile){
    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile))){
        return false;
    } else {
    	return true;
    }
} 
function checkcode(){
	var code = $("#paswcode").val();
	if(code.length !=6){
		dialog("验证码至少为6位",1,1000);
		return false;
	}
}
function checkpas(){
	var newpas = $("#newpas").val();
	var newpasre = $("#newpasre").val();
	if(newpas.length<6){
		dialog("验证码至少为6位",1,1000);
		return false;
	}
	if(newpas!=newpasre){
		dialog("请输入两次一样的密码",1,1000);
		return false;
	}
}
function submitFormOrder(offset){
	$("#theForm").submit();
}
function gy_checkc(type){
	var realname = $("#realname").val();
		var cimgzheng = $("#cimgzheng").val();
		var cimgfan = $("#cimgfan").val();
		var cimg1 = $("#cimg1").val();
	if(type=='1'){
		if(realname=='' || realname.length<1){
			dialog("真实姓名不能为空",1);return false;
		}
		if(cimgzheng=='' || cimgzheng.length<1){
			dialog("请上传身份证正面照片",1);return false;
		}
		if(cimgfan=='' || cimgfan.length<1){
			dialog("请上传身份证反面照片",1);return false;
		}
	}else if(type=='2'){
		var cname = $("#cname").val();
		var cnumber = $("#cnumber").val();
		var ccontact = $("#ccontact").val();
		if(cname=='' || cname.length<1){
			dialog("公司名称不能为空",1);return false;
		}
		if(cnumber=='' || cnumber.length<1){
			dialog("营业执照号码不能为空",1);return false;
		}
		if(ccontact=='' || ccontact.length<1){
			dialog("联系人不能为空",1);return false;
		}
	}else if(type=='3'){
		var i=0;
		 $(".c_authen02 ul li input").each(function(){
		    var iv=$(this).val();
		    if(iv!=''){
		    	i++;
		    }
		  });
		 if(i<5){
			dialog("请至少上传5张您的图片作品！",1);return false;
		}
		 
	}
}
function showPreview(source) {  
            var file = source.files[0];  
            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  
                    document.getElementById("portrait").src = e.target.result;  
                    document.getElementById("portrait").style.display='block';
                    $("#a_zheng").hide();
                };  
                fr.readAsDataURL(file);  
            }  
        }  
 function showPreview2(source) {  
            var file = source.files[0];  
            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  
                    document.getElementById("portrait2").src = e.target.result;  
                    document.getElementById("portrait2").style.display='block';
                    $("#a_fan").hide();
                };  
                fr.readAsDataURL(file);  
            }  
        }  
 function showPreviewCimg(source,num) {  
            var file = source.files[0];  
            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  
                    document.getElementById("portrait"+num).src = e.target.result;  
                    document.getElementById("portrait"+num).style.display='block';
                    $("#a_cimg"+num).hide();
                };  
                fr.readAsDataURL(file);  
            }  
        }  
 function showUploadFp(source,num) {  
            var file = source.files[0];  
            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  
                    document.getElementById("portrait"+num).src = e.target.result;  
                    document.getElementById("portrait"+num).style.display='block';
                };  
                fr.readAsDataURL(file);  
            }  
        }  
        //判断上传图片 by gy 2017/9/29 7:19:23
        var is_300=false;
 function showDesUp(source) {  
            var file = source.files[0];  
            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  

                	var input = document.getElementById("upload_file1");  
if(input.files){  
                //读取图片数据  
  var f = input.files[0];  
  var reader = new FileReader();  
  reader.onload = function (e) {  
      var data = e.target.result;  
      //加载图片获取图片真实宽度和高度  
      var image = new Image();  
      image.onload=function(){  
          var width = image.width;  
          var height = image.height;  
          //alert(width+'======'+height+"====="+f.size);  
          if (width*height<3000000){
                	 	dialog("图片像素不能低于300万",2);
                	 }else{
                	 	document.getElementById("design_upload").src = e.target.result;  
                    document.getElementById("design_upload").style.display='block';
                    var newPreview = document.getElementById("design_upload");
				
                    $("#design_upload_div").hide();
                    $("#design_upload_re").show();
                    $("#design_upload_re").on('click', '', function(event) {
                    	$("#design_upload").attr("src","");
                    	$("#design_upload").hide();
                    	$("#design_upload_re").hide();
                    	$("#design_upload_div").show();
                    });
                	 }
      };  
      image.src= data;  
  };  
      reader.readAsDataURL(f);  
  }else{  
      var image = new Image();   
      image.onload =function(){  
          var width = image.width;  
          var height = image.height;  
          var fileSize = image.fileSize;  
          //alert(width+'======'+height+"====="+fileSize);  
          if (width*height<3000000){
                	 	dialog("图片像素不能低于300万",2);
                	 }else{
                	 	document.getElementById("design_upload").src = e.target.result;  
                    document.getElementById("design_upload").style.display='block';
                    var newPreview = document.getElementById("design_upload");
				
                    $("#design_upload_div").hide();
                    $("#design_upload_re").show();
                    $("#design_upload_re").on('click', '', function(event) {
                    	$("#design_upload").attr("src","");
                    	$("#design_upload").hide();
                    	$("#design_upload_re").hide();
                    	$("#design_upload_div").show();
                    });
                	 }
      }  
      image.src = input.value;  
  }  

                    
                };  
                fr.readAsDataURL(file);  
            }  
        }  
       
 function showDesUpFile(source) {  
 	console.log(source.files);
            var file = source.files[0];  

            if (window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) {  console.log(e);
                	            var filepath = document.getElementById("upload_file2").value;
	//为了避免转义反斜杠出问题，这里将对其进行转换
	var re = /(\\+)/g;
	var filename=filepath.replace(re,"#");
	//对路径字符串进行剪切截取
	var one=filename.split("#");
	//获取数组中最后一个，即文件名
	var two=one[one.length-1];
	//再对文件名进行截取，以取得后缀名
	var three=two.split(".");
	 //获取截取的最后一个字符串，即为后缀名
	var last=three[three.length-1];
	var tp ="psd,ai,eps,pdf,cdr,svg";
	var rs=tp.indexOf(last);
	//如果返回的结果大于或等于0，说明包含允许上传的文件类型
	if(rs>=0){
	 }else{
	 dialog("您选择的上传文件不是有效的源文件！",1);
	 return false;
	  }
                    document.getElementById("design_upload_file").style.backgroundImage = "url(/themes/meisu2017/imgs/pictype/"+last+".png)";  
                    document.getElementById("design_upload_file").style.display='block';
                    //$("#design_upload_div").hide();
                };  
                fr.readAsDataURL(file);  
            }  
        }  
 //需要用户信息
 function userEdit()
{
  var frm = document.forms['formEdit'];
  var extend_field102 = $("#extend_field102").val();
  var msg = '';
  var reg = null;

  if (extend_field102.length == 0)
  {
    msg += '昵称不能为空' + '\n';
  }




  if (msg.length > 0)
  {
    dialog(msg,1);
    return false;
  }
  else
  {
    return true;
  }
}
//百度统计
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?dd2c23378317d9b8298fa322e6fbe506";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();
//百度商桥
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e9fe99c2267a6f7a9215a8724ce995b4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


