<%--
  Created by IntelliJ IDEA.
  User: 宇宙无敌大帅比槑槑
  Date: 2019/6/28
  Time: 11:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">
    <title>井井</title>
    <link rel="stylesheet" href="static/layui/css/layui.css">
    <link rel="stylesheet" href="LoginPage.css">
</head>

<body>



    <div class="div1">
        <div class="content2" id="login-part">
            <div class="login-part">
                <div class="welcome">欢迎来到井井</div>
                <div class="layui-form-items">
                    <!--                <label class="layui-form-labels">账号</label>-->
                    <div class="layui-input-inlines">
                        <input type="text" placeholder="请输入账号" id="account" lay-verify="required" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-items">
                    <!--                <label class="layui-form-labels">密码</label>-->
                    <div class="layui-input-inlines">
                        <input type="password" placeholder="请输入密码" id="password" lay-verify="required" autocomplete="off" class="layui-input">
                    </div>
                </div>
            </div>
            <div class="loginbtn">
                <button type= button" onclick="loginin()" class="layui-btn" style="width: 60%;background-color:	#778899;">确认登录</button>
            </div>
              <div class="signup"><a href="signin.jsp">还没有账号？点击注册</a> </div>
<%--            <label class="signin"><a href="signin.jsp">还没有账号？点击注册</a> </label>--%>
        </div>
    </div>


<%--<form name="login">--%>
<%--    <div class="content2" id="login-part">--%>
<%--        <div class="account-part">--%>
<%--            <div class="layui-form-item">--%>
<%--                <label class="layui-form-label">账号</label>--%>
<%--                <div class="layui-input-inline">--%>
<%--                    <input type="text" name="account" lay-verify="required" autocomplete="off" class="layui-input">--%>
<%--                </div>--%>
<%--            </div>--%>
<%--            <div class="layui-form-item">--%>
<%--                <label class="layui-form-label">密码</label>--%>
<%--                <div class="layui-input-inline">--%>
<%--                    <input type="password" name="password" lay-verify="required" autocomplete="off" class="layui-input">--%>
<%--                </div>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--        <div class="loginbtn">--%>
<%--            <button type="button" onclick="loginin()" class="layui-btn layui-btn-radius">确认登录</button>--%>
<%--        </div>--%>
<%--        <div class="signup"><a href="PhotosPage.html">还没有账号？点击注册</a> </div>--%>
<%--    </div>--%>
<%--</form>--%>
    <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"井井，让你的相册井井有条","bdMini":"2","bdMiniList":["qzone","tsina","weixin","tieba","douban","bdhome","sqq","huaban","duitang","iguba","copy","print"],"bdPic":"","bdStyle":"1","bdSize":"16"},"slide":{"type":"slide","bdImg":"3","bdPos":"right","bdTop":"190.5"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
<script src="static/layui/layui.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="LoginPage.js"></script>
</body>
</html>
