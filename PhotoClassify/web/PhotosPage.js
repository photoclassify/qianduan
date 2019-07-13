var ip1 = 'http://192.168.151.77:8080'
var sessionid = '';

var html = new Array();

//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
    var element = layui.element;

    //…
});

layui.use('upload', function(){
    var $ = layui.jquery
        ,upload = layui.upload;

    //图片上传
    upload.render({
        elem: '#test'
        ,url: ip1+'/file/upload/'
        ,dataType: 'json'
        ,done: function(res){
            console.log(res);
            alert("图片上传成功！");
            location.reload();
        }
        ,error: function(res){
            console.log("fail"+res);

        }
    });
});

//创建相册
function addphoto() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        skin: 'yourclass',
        content: '自定义HTML内容'
    });
}

layui.use('upload', function(){
    var $ = layui.jquery
        ,upload = layui.upload;
    //多图片上传
    var uploadListIns = upload.render({
        elem: '#test2',
        // xhrFields:{
        //     withCredentials:true
        // }
        url: ip1+'/file/upload?sessionId='+localStorage.getItem('session')
        ,multiple: true
        ,auto: false
        ,method: 'post'
        ,datatype:"json"
        ,bindAction: '#testListAction'
        // ,data: {sessionId:sessionid}
        ,choose: function(obj){
            var files = this.files = obj.pushFile();
            obj.preview(function(index, file, result){
                var htm=$(['<li class="responsive" id="upload-'+ index +'"> <li class="img1">'
                    ,'<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img" style="width: 100px;height: 100px;"> <div class="icon1">'
                    ,'<div class="icon"><button class="changebtn" onclick="changephoto()"><i class="layui-icon layui-icon-edit" style="font-size: 20px;"></i></button></div>'
                    ,'<div class="icon"><button class="deletebtn" onclick="deletephoto()"><i class="layui-icon layui-icon-delete" style="font-size: 20px;"></i></button></div></div> </li> </li>'].join(''));
                //删除
                htm.find('.deletebtn').on('click', function(){
                    delete files[index]; //删除对应的文件
                    htm.remove();
                    uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });
                $('#demo2').append(htm);
            });
        }
        ,done: function(res, index, upload){
            // if(res.code == 0){//上传成功
            console.log(sessionid);
            alert("上传成功！");
            location.reload();
            console.log(res);
            var uploaddiv = document.getElementById('upload-'+index+'');
            uploaddiv.remove();
            return delete this.files[index]; //删除文件队列已经上传成功的文件

            //}
            //this.error(index, upload);
        }
        ,error: function(index, upload){
            // var tr = $('#demo2').find('htm#upload-'+ index)
            //     ,tds = tr.children();
            // tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
            // tds.eq(3).html(''); //清空操作
            alert("上传失败！");
            var uploaddiv = document.getElementById('upload-'+index+'');
            uploaddiv.remove();
            return delete this.files[index];
        }
    });
});

function searchfor(){
    var key = document.getElementById('title').value;
    console.log(key);
    if(key == ""){
        alert("搜索关键字不能为空！")
    }
    else{
        console.log(key);
        window.location.href = "ShowWebPhoto.jsp?tag="+key;
    }
}

function search(){
    var key = document.getElementById('title').value;
    console.log(key);
    if(key == ""){
        alert("搜索关键字不能为空！")
    }
    else{
        console.log(key);
        window.location.href = "ShowWebPhoto.jsp?keyword="+key;
    }
}

function load() {
    $.ajax({
        xhrFields:{
            withCredentials:true
        },
        cache:true,
        // url : ip1+"/tag/findAll/"+userId,
        url:ip1+"/tag?operate=allFirstRoots",
        type : "get",
        datatype:"json",
        success : function(data) {
            //遍历拼接html
            console.log(data);
            var photopath = data.photoPath;
            var thpath = data.thPath;
            sessionid = data.message;
            if(sessionid.indexOf('error')!= -1){
                window.location.href = "LoginPage.jsp";
            }
            else {
                localStorage.setItem('session', data.message);
                console.log(localStorage.getItem('session'));
                console.log(sessionid);
                for (var key in data.data) {
                    console.log(key);
                    console.log(data.data[key]);
                }
                var htm = '';
                var photo = document.getElementById('showphoto');
                var src = new Array();
                var i = 0;
                for (var key in data.data) {
                    htm += '<div class="img">';
                    htm += '<img id=' + i + ' src=' + ip1 + photopath + data.data[key] + ' class="layui-anim" style="max-width:350px;min-width:350px;max-height:550px;vertical-align: middle;"> <div class="label"> <div class="desc">' + key + '</div><div class="icon1">';
                    htm += '<div class="icon"><button class="changetagbtn" id=' + i + '><i class="layui-icon layui-icon-edit" style="font-size: 20px;color: #696969;"></i></button></div>';
                    htm += '<div class="icon"><button class="deletetagbtn" id=' + i + ' onclick=""><i class="layui-icon layui-icon-delete" style="font-size: 20px;color: #696969;"></i></button></div></div></div></div>';
                    i++;
                }
                photo.innerHTML = htm;
                $('.layui-anim').click(function (e) {
                    console.log(e.currentTarget.id);
                    var index = e.currentTarget.id;
                    var i = 0;
                    for (var key in data.data) {
                        if (i == index) {
                            console.log(key);
                            window.location.href = "Gallery.jsp?tag=" + key;
                        }
                        i++;
                    }
                }),
                    $('.deletetagbtn').click(function (e) {
                        console.log(e.currentTarget.id);
                        var index = e.currentTarget.id;
                        var i = 0;
                        var tag;
                        for (var key in data.data) {
                            if (i == index) {
                                console.log(key);
                                tag = key;
                            }
                            i++;
                        }
                        $.ajax({
                            xhrFields: {
                                withCredentials: true
                            },
                            type: "get",
                            // url: ip1 + "/tag/delete/" + data[index] + '/' + userId,
                            url: ip1 + '/tag?operate=delete&firstRoot=' + tag,
                            // dataType: "json",
                            success: function (data) {
                                console.log(data);
                                alert("删除相册成功！");
                                location.reload();
                            }
                        });
                    }),
                    $('.changetagbtn').click(function (e) {
                        var id = e.currentTarget.id
                        console.log(id);
                        var i = 0;
                        var oldtag;
                        for (var key in data.data) {
                            if (i == id) {
                                console.log(key);
                                oldtag = key;
                            }
                            i++;
                        }
                        layui.use("layer", function () {
                            console.log("aaa");
                            var layer = layui.layer;
                            layer.config({
                                offset: '100'
                            });
                            layer.prompt({title: '修改标签'}, function (tag, index) {
                                console.log("ni" + tag);
                                console.log(ip1 + '/tag?operate=update&firstRoot=' + oldtag + '&newData=' + tag);
                                $.ajax({
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    type: "get",
                                    // url: ip1 + "/tag/update/" + data[id] + '/' + tag + '/' + userId,
                                    url: ip1 + '/tag?operate=update&firstRoot=' + oldtag + '&newData=' + tag,
                                    // dataType: "json",
                                    success: function (data) {
                                        console.log(data);
                                    }
                                });
                                layer.msg('修改标签为' + tag);
                                layer.close(index);
                                location.reload();
                            });
                        })
                    })
            }
        },
            // var htm='';
            // var photo = document.getElementById('showphoto');
            // var src = new Array();
            // for (var i = 0;i < data.length;i++){
            //     console.log(data[i++]);
            //     console.log(data[i--]);
            //     htm+='<div class="responsive"> <div class="img">';
            //     htm+='<img id='+i+' src="//'+data[++i]+'" class="layui-anim" style="width: 330px;height: 250px;"> <div class="label"> <div class="desc">'+data[--i]+'</div> <div class="icon">';
            //     htm+='<div class="icon"><button class="changetagbtn" id='+i+'><i class="layui-icon layui-icon-edit" style="font-size: 30px;"></i></button></div>';
            //     htm+='<div class="icon"><button class="deletetagbtn" id='+i+' onclick=""><i class="layui-icon layui-icon-delete" style="font-size: 30px;"></i></button></div> </div> </div> </div> </div>';
            //     i++;
            // }
            // photo.innerHTML=htm;
            // $('.layui-anim').click(function(e) {
            //     console.log(e.currentTarget.id);
            //     var index = e.currentTarget.id;
            //     console.log(data[index]);
            //     window.location.href = "ShowWebPhoto.jsp?tag="+data[index];
            // }),
            // $('.deletetagbtn').click(function(e) {
            //     console.log(e.currentTarget.id);
            //     var index = e.currentTarget.id;
            //     console.log(data[index]);
            //     $.ajax({
            //         type: "delete",
            //         url: ip1+"/tag/delete/"+ data[index]+'/'+userId,
            //         // dataType: "json",
            //         success: function(data){
            //             console.log(data);
            //             alert("删除相册成功！");
            //             location.reload();
            //         }
            //     });
            // }),
            // $('.changetagbtn').click(function(e) {
            //     var id = e.currentTarget.id
            //     console.log(data[id]);
            //     layer.prompt({title: '修改标签'},function(tag, index){
            //         $.ajax({
            //             type: "PUT",
            //             url: ip1+"/tag/update/"+ data[id]+'/'+tag+'/'+userId,
            //             // dataType: "json",
            //             success: function(data){
            //                 console.log(data);
            //             }
            //         });
            //         layer.msg('修改标签为'+tag);
            //         layer.close(index);
            //         location.reload();
            //     });
            // })
            // },
        error : function(data) {
            console.log(data);
        }
    });

    function getCookie(cookie_name)
    {
        var allcookies = document.cookie;
        var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度

        // 如果找到了索引，就代表cookie存在，
        // 反之，就说明不存在。
        if (cookie_pos != -1)
        {
            // 把cookie_pos放在值的开始，只要给值加1即可。
            cookie_pos += cookie_name.length + 1;      //这里容易出问题，所以请大家参考的时候自己好好研究一下
            var cookie_end = allcookies.indexOf(";", cookie_pos);

            if (cookie_end == -1)
            {
                cookie_end = allcookies.length;
            }

            var value = unescape(allcookies.substring(cookie_pos, cookie_end));         //这里就可以得到你想要的cookie的值了。。。
        }
        return value;
    }

    // var htm='';
    // var photo = document.getElementById('showphoto');
    // var src = "//static.runoob.com/images/demo/demo1.jpg";
    // for (var i = 0;i < 3;i++){
    //     htm+='<div class="responsive"> <div class="img">';
    //     htm+='<img src="//static.runoob.com/images/demo/demo1.jpg" width="450" height="300"> <div class="label"> <div class="desc">动物</div> <div class="icon">';
    //     htm+='<div class="icon"><button class="btn" onclick="addphotos()"><i class="layui-icon layui-icon-edit" style="font-size: 30px;"></i></button></div>';
    //     htm+='<div class="icon"><button class="btn" onclick=""><i class="layui-icon layui-icon-delete" style="font-size: 30px;"></i></button></div> </div> </div> </div> </div>';
    // }
    // photo.innerHTML=htm;
}