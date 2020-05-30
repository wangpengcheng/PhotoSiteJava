var E = window.wangEditor;
var editor = new E('#editor');
// 自定义菜单配置
editor.customConfig.menus = [
    'code', // 插入代码
    //      'head', // 标题
    'bold', // 粗体
    'italic', // 斜体
    'underline', // 下划线
    //      'strikeThrough', // 删除线
    //      'foreColor', // 文字颜色
    //      'backColor', // 背景颜色
    'image', // 插入图片
    'link', // 插入链接
    'list', // 列表
    //      'justify', // 对齐方式
    'quote', // 引用
    'emoticon', // 表情
    //      'table', // 表格
    //      'video', // 插入视频
    //      'undo', // 撤销
    //      'redo' // 重复
];
// debug模式下，有 JS 错误会以throw Error方式提示出来
editor.customConfig.debug = true;

// 关闭粘贴样式的过滤
editor.customConfig.pasteFilterStyle = false;
// 自定义处理粘贴的文本内容
editor.customConfig.pasteTextHandle = function (content) {
    // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
    return content + '<p>在粘贴内容后面追加一行</p>'
};
// 插入网络图片的回调
editor.customConfig.linkImgCallback = function (url) {
    console.log(url) // url 即插入图片的地址
};
editor.customConfig.zIndex = 100;
editor.create();
E.fullscreen.init('#editor');
//    editor.txt.clear(); //清空编辑器内容
//    editor.txt.html('<p>用 JS 设置的内容</p><strong>hello</strong><script>alert(/xss/);<\/script>');
//    editor.txt.append('<p>追加的内容</p>');
// 读取 html
//console.log(editor.txt.html());
// 读取 进行 xss 攻击过滤后的html
console.log(filterXSS(editor.txt.html()));
// 读取 text
console.log(editor.txt.text());
// 获取 JSON 格式的内容
console.log(editor.txt.getJSON());
//设置样式
$("#my_change").css("display", "inherit");

$("#look_comments").click(function () {
    var container=$(".container")[0];
    if(container.style.display=="none"){
        container.style.display==""
        $("#look_comments").text="隐藏评论";
    }else{
        container.style.display=="none"
        $("#look_comments").text="查看评论";
    }
});