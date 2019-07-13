<%--
  Created by IntelliJ IDEA.
  User: 宇宙无敌大帅比槑槑
  Date: 2019/7/11
  Time: 9:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>photofilter</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="static/edit/htmleaf-demo.css">

    <link rel="stylesheet" href="static/layui/css/layui.css">

    <link href="https://cdn.bootcss.com/cropper/3.1.3/cropper.min.css" rel="stylesheet">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .row{
            margin-top: 30px;
            margin-left:80px;
            margin-bottom: 80px;
            width:1000px;
            height:600px;
            border:5px solid #E9E7E7;
        }

        .btn-success{
            background-color: #008B8B;
            border: 2px solid #7F7F7F;
        }
        .btn-success:hover{
            background-color:#528B8B;
        }

        .col-sm-12{
            margin-left: 15px;
        }
        /*#photo {*/
        /*    max-width: 100%;*/
        /*}*/
        .img-preview {
            width: 100px;
            height: 100px;
            overflow: hidden;
        }
        .image{
            height: 400px;
            width: 400px;
        }
        button {
            margin-top:10px;
        }
        #result {
            width: 150px;
            height: 150px;
        }
        #savebtn{
            display: none;
        }
        .button{
            margin-left:43%;
            margin-top: 5%;
        }
        .btn-info{
            background-color:#778899;!important;
        }
    </style>


    <!--[if IE]>
    <script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
    <![endif]-->
</head>
<body>


<div class="button">
    <button class="layui-btn" onclick="backto()">退出编辑</button>
    <button class="layui-btn" id="savebtn" onclick="downloadImage()">保存图片</button>
    <button class="layui-btn" id="editbtn" onclick="download()">确认裁剪</button>
</div>

<div class="container1" style="margin-top: 30px;margin-left: 15%;" id="editpic">
<%--    <div class="row">--%>
        <div class="col-sm-6 col-sm-offset-2">
            <img class="image" id="photo">
        </div>
<%--        <div class="col-sm-2">--%>
<%--            <div>--%>
<%--                <div class="img-preview">--%>
<%--                </div>--%>
<%--            </div>--%>
<%--            <button class="btn btn-primary" onclick="download()">Next</button>--%>
<%--        </div>--%>
<%--    </div>--%>
</div>


<div class="htmleaf-container" id="lvjing">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">

<%--                <button class="btn btn-info" onclick="downloadImage()">保存图片</button>--%>
<%--                <button class="btn btn-info" onclick="backto()">退出编辑</button>--%>


                <hr>
                <div class="btn-group" id="filters" style="display:none;">
                    <button class="btn btn-success" onclick="loadUrlToCanvas()">重置</button>
                    <button class="btn btn-success" onclick="filter(0)">黑白</button>
                    <button class="btn btn-success" onclick="filter(10)">黑白2</button>
                    <button class="btn btn-success" onclick="filter(1)">深褐</button>
                    <button class="btn btn-success" onclick="filter(2)">底片</button>
                    <button class="btn btn-success" onclick="filter(3)">古老</button>
                    <button class="btn btn-success" onclick="filter(4)">负片冲印</button>
                    <button class="btn btn-success" onclick="filter(9)">喧嚣</button>
                    <button class="btn btn-success" onclick="filter(5)">亮度+ 1</button>
                    <button class="btn btn-success" onclick="filter(6)">亮度-1</button>
                    <button class="btn btn-success" onclick="filter(7)">明暗+1</button>
                    <button class="btn btn-success" onclick="filter(8)">明暗 -1</button>
                    <button class="btn btn-success" onclick="filter(11)">蜡笔</button>
                    <button class="btn btn-success" onclick="filter(12)">卡通</button>
                    <button class="btn btn-success" onclick="filter(13)">晕映</button>
                    <%--          <button class="btn btn-warning" onclick="myFilter()">自定义滤镜</button>--%>
                </div>
            </div>
            <div class="col-sm-12">
                <input type="file" id="image-chooser" style="display:none" onchange="loadImage(this)">
                <canvas id="canvas" class="well" style="margin-left:15px;width:900px;height:500px;"></canvas>

            </div>
        </div>
    </div>

</div>


<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/cropper/3.1.3/cropper.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
    // 修改自官方demo的js
    // var initCropper = function (img){
    //     var $image = img;
    //     var options = {
    //         //aspectRatio: 1, // 纵横比
    //         viewMode: 2,
    //     };
    //     //$image.cropper(options);
    //     $image.cropper('destroy').attr('src', "image/lake.jpeg").cropper(options);
    //
    // };
    var src;
    var from;

    // function load(){
    //     src = 'image/lake.jpeg';
    //     document.getElementById("photo").src = src;
    // }
    function backto(){
        window.location.href = from;
    }

    // function editpic() {
    //修改自官方demo的js
    var initCropper = function (img){
        from = document.referrer;
        var url = window.location.search;
        var result;
        if (url.indexOf("?") != -1) {
            result = url.substr(url.indexOf("=") + 1);
        }
        src = decodeURI(result);
        console.log(src);



        // src = 'image/lake.jpeg';
        var $image = img;
        var options = {
            //aspectRatio: 1, // 纵横比
            viewMode: 2,
        };
        //$image.cropper(options);
        $image.cropper('destroy').attr('src', src).cropper(options);

    };
    // }

    var download=function(){
        var photo = $('#photo').cropper('getCroppedCanvas', {
        }).toDataURL('image/png');
        console.log(photo);

        src = photo;
        document.getElementById('editpic').style.display = 'none';
        document.getElementById('editbtn').style.display = 'none';
        document.getElementById('lvjing').style.display = 'inline';
        document.getElementById('savebtn').style.display='inline';

        imgObj = new Chobi(src);
        imgObj.ready(function(){
            // backupImg = imgObj.getImage();
            imgObj.canvas = document.getElementById("canvas");
            imgObj.loadImageToCanvas();
            document.getElementById("filters").style.display = "block";
        });


        // var $photo =$('#photo').cropper('getCroppedCanvas',{
        //
        // }).toBlob(function(blob){
        //     // 裁剪后将图片放到指定标签
        //     var a = document.createElement("a");
        //     a.download = name;
        //     a.href = URL.createObjectURL(blob);
        //     a.click();
        // });
    }
    $(function(){
        initCropper($('#photo'));
    });







    //custom filter
    function myFilter(){
        var height = imgObj.imageData.height;
        //orange
        for(var i=0;i<imgObj.imageData.width;i++){
            for(var j=0;j<Math.floor(height/3);j++){
                var pixel = imgObj.getColorAt(i,j);
                pixel.red = (255+pixel.red)/2;
                pixel.green = (165+pixel.green)/2;
                pixel.blue /= 2;
                imgObj.setColorAt(i,j,pixel);
            }
        }
        //white
        for(var i=0;i<imgObj.imageData.width;i++){
            for(var j=Math.floor(height/3);j<Math.floor(2*(height/3));j++){
                var pixel = imgObj.getColorAt(i,j);
                pixel.red = (255+pixel.red)/2;
                pixel.green = (255+pixel.green)/2;
                pixel.blue = (255+pixel.blue)/2;
                imgObj.setColorAt(i,j,pixel);
            }
        }
        //green
        for(var i=0;i<imgObj.imageData.width;i++){
            for(var j=Math.floor(2*(height/3));j<Math.floor(height);j++){
                var pixel = imgObj.getColorAt(i,j);
                pixel.red = (0+pixel.red)/2;
                pixel.green = (255+pixel.green)/2;
                pixel.blue = (0+pixel.blue)/2;
                imgObj.setColorAt(i,j,pixel);
            }
        }
        imgObj.loadImageToCanvas();
    }

    var imgObj = null; //global Chobi object
    function loadImage(elem){
        //you should probably check if file is image or not before passing it
        imgObj = new Chobi(elem);
        imgObj.ready(function(){
            this.canvas = document.getElementById("canvas");
            this.loadImageToCanvas();

            //show filters to users
            document.getElementById("filters").style.display = "block";
        });
    }

    function downloadImage(){
        if(imgObj == null){
            document.getElementById("error").style.display="block";
            setTimeout(function(){
                document.getElementById("error").style.display="none";
            }, 4000);
            return;
        }
        imgObj.download('demo-image');
    }

    function loadFileToCanvas(){

        //pass input type=file element to Chobi constructor
        imgObj = new Chobi(document.getElementById("image-file"));
        imgObj.ready(function(){
            // backupImg = imgObj.getImage();
            imgObj.canvas = document.getElementById("canvas");
            imgObj.loadImageToCanvas();
        });
    }
    function loadUrlToCanvas(){
        imgObj = new Chobi(src);
        imgObj.ready(function(){
            // backupImg = imgObj.getImage();
            imgObj.canvas = document.getElementById("canvas");
            imgObj.loadImageToCanvas();
            document.getElementById("filters").style.display = "block";
        });
    }

    //0 -> Black and white
    //10 -> Black and white2
    //1 -> sepia
    //2 -> negative
    //3 -> vintage
    //4 -> crossprocess
    //5 -> Brightness increase
    //6 -> Brightness decrease
    //7 -> Contrast increase
    //8 -> Contrast decrease
    //9 -> Noise Effect
    //11 -> Crayon effect
    //12 -> Cartoonify
    //13 -> Vignette
    //filter chaining is also possible, like imgObj.brightness(-5).sepia().negative();
    function filter(id){
        if(imgObj == null){
            alert("Choose an image first!");
            return;
        }
        if(id==0){
            imgObj.blackAndWhite();
        }
        else if(id==1){
            imgObj.sepia();
        }
        else if(id==2){
            imgObj.negative();
        }
        else if(id==3){
            imgObj.vintage();
        }
        else if(id==4){
            imgObj.crossProcess();
        }
        else if(id==5){
            imgObj.brightness(1);
        }
        else if(id==6){
            imgObj.brightness(-1);
        }
        else if(id==7){
            imgObj.contrast(1);
        }
        else if(id==8){
            imgObj.contrast(-1);
        }
        else if(id==9){
            imgObj.noise();
        }
        else if(id==10){
            imgObj.blackAndWhite2();
        }
        else if(id==11){
            imgObj.crayon();
        }
        else if(id==12){
            imgObj.cartoon();
        }
        else if(id==13){
            imgObj.vignette();
        }



        imgObj.loadImageToCanvas();
    }
</script>
<script type="text/javascript" src="static/edit/Chobi.min.js"></script>
</body>
</html>

