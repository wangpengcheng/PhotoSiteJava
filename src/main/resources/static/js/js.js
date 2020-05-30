//响应式js
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  //alert(navigator.userAgent);

  //add a new meta node of viewport in head node
  head = document.getElementsByTagName('head');
  viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = 'target-densitydpi=device-dpi, width=' + 1220
      + 'px, user-scalable=no';
  head.length > 0 && head[head.length - 1].appendChild(viewport);

}

$(function () {
  /*触屏*/
  $(".slider .inner").bind("swipeleft", function () {

  });

  $(".slider .inner").bind("swiperight", function () {

  });

  $(".header .right .user").hover(function () {
    var user_bd = $(this).parent().find(".user-bd");
    $(this).addClass("on");
    user_bd.slideDown();
  }, function () {
    var user_bd = $(this).parent().find(".user-bd");
    user_bd.slideUp();
    $(this).removeClass("on");
  });

  if($(".f-rule input[type=checkbox]").length>0){
    $(".f-rule input[type=checkbox]").ionCheckRadio();
  }
})