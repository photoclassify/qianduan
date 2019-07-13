<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2019/6/29
  Time: 8:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
    <title>井井</title>
    <link rel="stylesheet" href="static/layui/css/layui.css">
    <link rel="stylesheet" href="signin.css">
</head>

<body>
<div class="div1">
    <div class="content2" id="login-part">
        <div class="login-part">
            <div class="welcome">欢迎来到井井</div>
            <div class="layui-form-items">
                <div class="layui-input-inlines">
                    <input type="text" id="user" name="account" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-form-items">
                <div class="layui-input-inlinea btn">
                    <button class = "layui-btn layui-btn-primary" onclick="codeInput()">发送验证码</button>
                </div>
                <div class="layui-input-inlines">
                    <input type="text" id="em" name="email" required  lay-verify="required" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-form-items">
                <div class="layui-input-inlines">
                    <input type="text" id="code" name="code" required  lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input" onkeyup="validate()">
                    <span id="tishi"></span>
                </div>
            </div>
            <div class="layui-form-items">
                <div class="layui-input-inlines">
                    <input type="password" id="pwd" name="password" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-items">
                <div class="layui-input-inlines">
                    <input type="password" id="rpwd" name="repassword" required  lay-verify="required" placeholder="请确认密码" autocomplete="off" class="layui-input">
                </div>
            </div>
        </div>

        <div class="loginbtn">
            <div class="layui-btn" style="background-color: #778899;width:60%;" onclick=signIn()> 注册</div>
        </div>
    </div>
</div>

<script src="static/layui/layui.js"></script>
<script src="signin.js"></script>
<script type="text/javascript" src="http://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
</body>
</html>