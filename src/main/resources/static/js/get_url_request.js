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
var topic_id=url['topic_id'];
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
//get_topic(topic_id);
var test=get_topic(topic_id);
console.log(test);