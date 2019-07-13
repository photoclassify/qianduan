<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2019/6/28
  Time: 16:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <link rel="stylesheet" href="static/layui/css/layui.css">
    <script src="static/layui/layui.js"></script>
    <link rel = "stylesheet" href = "showphotos.css">
    <style>
        html,body,div,img,button{margin:0;padding:0;box-sizing:border-box;}
        img{border:0;}
        li{list-style:none;}
        #imgModule{display:none;}
        #imgDefault{cursor:pointer;}
        .imgItem{width:100px;height:80px;}
        .mask{background:#000;opacity:.8;filter:alpha(opacity=80);position:absolute;left:0;top:0;width:100%;height:100%;}
        .lightBoxContent{width:800px;height:530px;position:absolute;left:50%;top:50%;background:#fff;margin:-265px 0 0 -400px;}
        #imgLoader{width:32px;height:32px;position:absolute;left:50%;top:50%;margin:-16px 0 0 -16px;display:none;}
        #imgLight{width:800px;height:530px;-webkit-animation:change 1s;animation:change 1s;}
        #imgModule .btn{width:40px;height:50px;position:absolute;top:50%;margin-top:-25px;cursor:pointer; border-color: #E9E7E7}
        .lightBoxSprite{background-image:url(image/imgIcons.png);background-repeat:no-repeat;}
        .lightBoxSprite2{background-repeat:no-repeat;}
        .lightBoxSprite3{background-repeat:no-repeat;}
        #lightBoxPrev{left:10px;background-position:2px center;}
        #lightBoxNext{right:10px;background-position:-42px center;}
        .closeBtn{width:35px;height:35px;background-position:-100px center;position:absolute;top:15px;right:15px;cursor:pointer;}
        .deleteBtn{width:64px;height:64px;background-position:-100px center;position:absolute;bottom:14px;right:15px;cursor:pointer;}
        .editBtn{width:64px;height:64px;background-position:-100px center;position:absolute;bottom:15px;right:75px;cursor:pointer;}
        .lightBoxPagination{position:absolute;left:0;bottom:50px;width:100%;text-align:center;}
        .lightBoxPagination span{display:inline-block;width:10px;height:10px;border:1px solid #fff;-webkit-border-radius:50%;border-radius:50%;margin-right:8px;}
        .lightBoxPagination span.current{background:#fff;}
        #text{height:300px;width:500px;top:300px;border-color:#E9E7E7;text-align: center;position:relative}
        #text p{position:absolute;bottom: 0px;padding:0px;margin:0px}
        @keyframes change{ 0%{opacity:0;} 100%{opacity:1;} }
        div.img {margin: 30px;left: 30px;float:left;width:100%;}
        div.img img:hover {border:12px solid #E9E7E7;}
        div.img img {margin: 0 auto;margin-left: 30px;;margin-top: 40px;position: relative;border:10px solid #FFFFFF;width: 100%;height: 30%;}
    </style>
</head>
<body onload="load()" >
<div class="img" id="imgDefault" width="30px">

</div>

<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"井井，让你的相册井井有条","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"image":{"viewList":["tsina","qzone","sqq","weixin","duitang","huaban"],"viewText":"分享到：","viewSize":"16"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
<%--<script src="layui/css/layui.css"></script>--%>
<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="show.js"></script>
</body>
</html>