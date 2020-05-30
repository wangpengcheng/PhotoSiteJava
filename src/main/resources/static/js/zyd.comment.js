/**
 * bootstrap版评论框
 * 
 * @date 2018-01-05 10:57
 * @author zhyd(yadong.zhang0415#gmail.com)
 * @link https://github.com/zhangyd-c
 */

function requesFail(xhr){
        var status = xhr.status;
        if (status) {
            console.log("error", "网络错误", "发生网络错误，错误码为：" + xhr.status);
        } else {
            console.log("error", "网络错误", "未知网络错误, 请确保设备处在联网状态");
        }
    }
//获取url参数
function GetRequest() {
    var url = this.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var url=GetRequest();
var photo_id=url['photo_id'];
var user_id=url['user_id'];
if((!user_id)||user_id==""){
	user_id=3;//游客
}

$.extend({
	comment: {
		submit: function(target) {
					var $this = $(target);
					$this.button('loading');
					//获取关键评论HTML字段
					var photo_comment=$(".w-e-text")[0].innerHTML;
					console.log("hello word");
					// 模态框抖动
					//		$('#detail-modal .modal-content').addClass("shake");
					$.ajax({
				        url:"./receive_comments.php",
				        type:"post",
				        timeout: 3000,
				        data:{"user_id":user_id,"photo_id":photo_id,"photo_comment":photo_comment},
				        dataType:"json",
				        success: function(result){
						               //$("#div1").html(result);
						               console.log(result);
						         
						            setTimeout(function() {
											$this.button('reset');
											window.location.reload();
										}, 1000);
				           			},
				        error: function(xhr,state,errorThrown){
				               requesFail(xhr);
				           }
				       	});
		},
		reply: function(pid, c) {
			console.log(pid);
			$('#comment-pid').val(pid);
			$('#cancel-reply').show();
			$('.comment-reply').show();
			$(c).hide();
			$(c).parents('.comment-body').append($('#comment-post'));
			//			$(c).parent().parent().parent().append($('#comment-post'));
		},
		cancelReply: function(c) {
			$('#comment-pid').val("");
			$('#cancel-reply').hide();
			$(c).parents(".comment-body").find('.comment-reply').show();
			//			$(c).parent().parent().parent().find('.comment-reply').show();
			$("#comment-place").append($('#comment-post'));
		}
	}
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$("#comment-form-btn").click(function() {
		$.comment.submit($(this));
	});
})