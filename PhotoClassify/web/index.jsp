<%--
  Created by IntelliJ IDEA.
  User: 宇宙无敌大帅比槑槑
  Date: 2019/6/25
  Time: 9:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>我的相册</title>
  <link rel="stylesheet" href="static/layui/css/layui.css">
  <link rel="stylesheet" href="PhotosPage.css">

</head>
<body onload="load()">

<div class="header">

<div class="head-part">
  <div class="control">
    <div class="create">
      <button type="button" id="test" class="layui-btn layui-btn-primary">单图上传</button>
    </div>
    <div class="uploadphoto">
      <button class="layui-btn" id="testListAction" style="background-color:#778899">确认上传</button>
    </div>
    <div class="layui-upload">
      <button type="button" class="layui-btn" id="test2" style="margin-left:20px;background-color:#778899">选择多图</button>
    </div>
  </div>
    <ul class="layui-upload-list" id="demo2"></ul>
  <div class="part2">
    <label class="lab">井井，让你的相册井井有条</label>
  <div class="layui-input-block">
    <input type="text" id="title" lay-verify="title" autocomplete="off" placeholder="请输入标签" class="layui-input" style="width:50%;margin-left: 16%">
    <button type="button" onclick="search()" class="layui-btn layui-btn-primary" style="margin-left: 10px;">本地搜索</button>
    <button type="button" onclick="searchfor()" class="layui-btn" style="background-color:#778899;">网络搜索</button>
  </div>
  </div>
</div>

</div>

<div class="page">
<div class="photos" id="showphoto">

</div>
</div>


<%--<div class="control">--%>
<%--  <div class="create">--%>
<%--    <button type="button" onclick="addphoto()" class="layui-btn layui-btn-primary">创建相册</button>--%>
<%--  </div>--%>
<%--  <div class="uploadphoto">--%>
<%--    <button class="layui-btn" id="testListAction" >确认上传</button>--%>
<%--  </div>--%>
<%--  <div class="layui-upload">--%>
<%--    <button type="button" class="layui-btn" id="test2" style="margin-left: 20px">选择多图</button>--%>
<%--    <div class="layui-upload-list" id="demo2"></div>--%>
<%--  </div>--%>
<%--</div>--%>

<%--<div class="photos" id="showphoto">--%>

<%--</div>--%>

<script src="static/layui/layui.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="PhotosPage.js"></script>
</body>
</html>
