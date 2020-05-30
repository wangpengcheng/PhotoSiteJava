
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
var get_topic=function(topic_id) {
    var return_result=new Object();
    $.ajax({
        url:"./get_topic.php",
        type:"post",
        timeout: 1000,
        data:{"topic_id":topic_id},
        async : false,
        dataType:"json",
        success:function(result){
            return_result=result;
        },
        error:function(xhr,state,errorThrown){
            requesFail(xhr);
        }
    });
    return return_result;
};
var url=GetRequest();
var topic_id=url['topic_id'];
var user_id=url['user_id'];
//get_topic(topic_id);
var topic=get_topic(topic_id);
var photo_list=topic['photo_list'];
var topic_message=topic['topic_message'];
var show_array = []; // 显示的所有pids
var send_status = 1; // 发送状态 默认允许发
//更改标题和其它状态
var change_title=function (topic_message) {
    //$(".txt>h2>small")[0].innerText=topic_message['topic_message'];
    $(".txt>h2")[0].innerHTML=topic_message['topic_name']+"    "+"\n"+"<small>"+topic_message['topic_message']+"</small>";
    $(".bgimg")[0].style.backgroundImage="url(\""+topic_message['display_photo_url']+"\")";
    console.log('\'url("'+topic_message['display_photo_url']+'")\'');
}
change_title(topic_message);
function getSearchIds() {
    var items = $(".imgList").find(".imgItem");
    var len = items.length;
    var start = 0;
    for (var i = start; i < len; i++) {
        var elem = items[i];
        if ($(elem).offset().top <= $(window).height() + $(window).scrollTop() && $(elem).offset().top + $(elem).outerHeight() > $(window).scrollTop()) {

            var img = $(elem).find("img");
            var pid = $(img).parent().attr("data-id");
            var is_has = show_array.indexOf(pid);
            if (is_has < 0) {
                show_array.push(pid);
            }
            start = i;
            send_status = 0;
        }
        else {
            if ($(elem).offset().top > $(window).height() + $(window).scrollTop()) {
                send_status = 1;
                break;
            }
        }
    }
    // 解决只有一排数据不发送的问题
    if (len <= 5 && len > 0) {
        send_status = 1;
    }
}
//显示图片
function showItems(photo_list) {
    var list_len=photo_list.length;
    var items = $(".imgList").find(".imgItem");
    var len = items.length;
    var start = 0;
    for (var i = start; i < len; i++) {
        if (i <list_len) {
            var elem = items[i];
            if ($(elem).offset().top < $(window).height() + $(window).scrollTop() && $(elem).offset().top + $(elem).outerHeight() > $(window).scrollTop()) {

                var img = $(elem).find("img");
                if (!$(img).attr("src")) {
                    $(img).attr("src", photo_list[i]['photo_big_address']).fadeIn();
                    start = i;
                }
                //更改连接
                var a=$(elem).find("a")[0];
                a.href="./photo.php?photo_id="+photo_list[i]['photo_id']+"&user_id="+user_id;
            }
            else {
                if ($(elem).offset().top > $(window).height() + $(window).scrollTop()) {
                    break;
                }
            }
        }else {
            items[i].style.display="none";
        }
    }
}

function setPiclistSize() {
    $(".imgList").Huiphoto({
        wraperWidth: "auto",
        item: ".imgItem",
        margin: 50,
        extra: 0
    });
}

$(function () {
    setPiclistSize();
    showItems(photo_list);
    $(window).resize(function () {
        setPiclistSize();
    });
    $('.collect-topic').on('click', function (e) {
        var topic_id = $(this).attr('data-topic-id');
        $.ajax({
            url: 'http://meisupic.com/collect_topic.php?id=' + topic_id,
            type: 'get',
            success: function (returndata) {
                var data = jQuery.parseJSON(returndata);
                switch (parseInt(data["code"])) {
                    case -4:
                        dialog('您已收藏该专辑', 1);
                        break;
                    case -3:
                        dialog('系统错误，缺少id', 1);
                        break;
                    case -2:
                        dialog('请先登录', 1);
                        break;
                    case 1:
                        layer.closeAll();
                        dialog(data["message"], 1);
                        location.reload();
                        break;
                    default:
                        layer.closeAll();
                        dialog('系统错误', 1);
                }
            },
            error: function () {
                layer.closeAll();
                dialog('系统错误', 1);
            }
        })
    });
});
window.onscroll = function () {
    getSearchIds();
    showItems(photo_list);
};