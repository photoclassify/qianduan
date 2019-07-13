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
    <meta name="referrer" content="no-referrer" />
  <title>Title</title>

  <link rel="stylesheet" href="static/layui/css/layui.css">
    <link rel="stylesheet" href="ShowWebPhoto.css">
  <script src="static/layui/layui.js"></script>
  <style>

    /*div.img {*/
    /*  margin: 20px;*/
    /*  float: left;*/
    /*  width: 600px;*/
    /*}*/

    /*div.img:hover {*/
    /*  border: 1px solid #ffffff;*/
    /*}*/

    /*div.img img {*/
    /*  margin: 0 auto;*/
    /*  width: 100%;*/
    /*  height: 40%;*/
    /*}*/
      body{
          width: 100%;
          /*background-color: #F5FFFA;*/
          background-color: white;
      }

      .label{
          text-align: center;
          margin-top: 5%;
          margin-left:10%;
          margin-right:10%;
          border: 1px #E8E8E8 solid;
      }
      .showTag{
          font-family:"楷体";
          color: #778899;
      }


  </style>
</head>
<body onload="load()">


<div class="label" id="searchTag">
</div>

<div class="container">
    <div class="grid" id="test-list" >
    </div>
</div>

<!-- /preview -->

<%--<script src="layui/css/layui.css"></script>--%>
<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="ShowWebPhoto.js"></script>
</body>
</html>