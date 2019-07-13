var ip1 = 'http://192.168.151.77:8080';
var rdata = '';
var firsttag = '';
var secondtag = '';
var res;
var photopage;
var gallery;

function load() {
    var tagHtml = '';
    var turl;
    var url = window.location.search; //获取url中"?"符后的字串
    var from = document.referrer;
    console.log(from);
    if(url.indexOf("firsttag") == -1) {
        photopage = true;
        gallery = false;
        var result;
        if (url.indexOf("?") != -1) {
            result = url.substr(url.indexOf("=") + 1);
        }
        console.log(result);
        firsttag = decodeURI(result);
        tagHtml += '<h2>' + firsttag + '</h2><hr class="line">';
        turl = ip1 + "/tag?operate=allSecondRoots&firstRoot=" + result;
        console.log('photopage');
    }
    else if(url.indexOf("firsttag") != -1){
        gallery = true;
        photopage = false;
        res = parseURL(url);
        console.log(res);
        firsttag = decodeURI(res.firsttag);
        secondtag = decodeURI(res.secondtag);
        tagHtml += '<h2>' + firsttag+'/'+ secondtag + '</h2><hr class="line">';
        turl = ip1 + "/tag?operate=allKeywords&firstRoot=" + firsttag+'&secondRoot='+ secondtag;
        console.log("gallery");
    }
    var label = document.getElementById('tag');
    label.innerHTML = tagHtml;
    var photo = document.getElementById('show');
    $.ajax({
        xhrFields:{
            withCredentials:true
        },
        cache: true,
        // url: ip1 + "/tag?operate=allSecondRoots&firstRoot=" + result,
        url:turl,
        type: "get",
        datatype: "json",
        success: function (data) {
            //遍历拼接html
            var htm = '';
            console.log(data);
            if(data.message != null){
                window.location.href = "LoginPage.jsp";
            }
            else {
                rdata = data;
                var photopath = data.photoPath;
                var thpath = data.photoPath;
                for (var key in data.data) {
                    console.log(key);
                    console.log(data.data[key]);
                }
                var src = new Array();
                var i = 0;
                for (var key in data.data) {
                    htm += '<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector art"><div class="portfolio-box zoom-effect">';
                    htm += '<img src=' + ip1 + photopath + data.data[key] + ' id=' + i + ' class="img-responsive" alt="" style="height: 300px;width: 430px;"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content">';
                    htm += '<div class="project-name">' + key + '</div><div class="project-social"><ul class="list-inline">';
                    htm += '<li><i class="fa fa-edit" onclick="edit(this)" id=' + i + '></i></li><li><i class="fa fa-remove" onclick="remove(this)" id=' + i + '></i></li><li><i class="fa fa-search" onclick="search(this)" id=' + i + '></i></li>';
                    htm += '</ul></div></div></div></div></div>';
                    i++;
                }
                photo.innerHTML = htm;
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function search(e){
    console.log(e.id);
    console.log(rdata);
    var index = e.id;
    var i = 0;
    for (var key in rdata.data) {
        if(i == index){
            console.log(key);
            if(photopage){
                window.location.href = "Gallery.jsp?firsttag="+firsttag+'&secondtag='+key;
            }
            else{
                window.location.href = "show.jsp?firsttag="+firsttag+'&secondtag='+secondtag+'&keyword='+key;
            }
        }
        i++;
    }
}
function remove(e) {
    console.log(e.id);
    var index = e.id;
    var i = 0;
    var stag;
    for (var key in rdata.data) {
        if(i == index){
            console.log(key);
            stag = key;
        }
        i++;
    }
    var turl;
    if(photopage){
        turl = ip1+'/tag?operate=delete&firstRoot='+firsttag+'&secondRoot='+stag;
    }
    else{
        turl = ip1+'/tag?operate=delete&firstRoot='+firsttag+'&secondRoot='+secondtag+'&keyword='+stag
    }
    console.log('删除相册'+ turl);
    $.ajax({
        xhrFields:{
            withCredentials:true
        },
        type: "get",
        // url: ip1 + "/tag/delete/" + data[index] + '/' + userId,
        url:turl,
        // dataType: "json",
        success: function (data) {
            console.log(data);
            alert("删除相册成功！");
            location.reload();
        }
    });
}
function edit(e) {
    var id = e.id;
    console.log(id);
    var i = 0;
    var oldtag;
    for (var key in rdata.data) {
        if(i == id){
            console.log(key);
            oldtag = key;
        }
        i++;
    }
    var turl;
    if(photopage){
        turl = ip1+'/tag?operate=update&firstRoot='+firsttag+'&secondRoot='+oldtag+'&newData=';
    }
    else{
        turl = ip1+'/tag?operate=update&firstRoot='+firsttag+'&secondRoot='+secondtag+'&keyword='+oldtag+'&newData=';
    }
    console.log('编辑相册'+ turl);
    layui.use("layer",function(){
        var layer = layui.layer;
        layer.config({
            offset:'100'
        });
        layer.prompt({title: '修改标签'}, function (tag, index) {
            $.ajax({
                xhrFields:{
                    withCredentials:true
                },
                type: "get",
                url:turl + tag,
                // url: ip1 + "/tag/update/" + data[id] + '/' + tag + '/' + userId,
                // url:ip1+'/tag?operate=update&firstRoot='+firsttag+'&secondRoot='+oldtag+'&newData='+tag,
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
}

function parseURL(url){
    var url = url.split("?")[1];
    var para = url.split("&");
    var len = para.length;
    var res = {};
    var arr = [];
    for(var i=0;i<len;i++){
        arr = para[i].split("=");
        res[arr[0]] = arr[1];
    }
    return res;
}


    // for (var i = 0;i < 9;i++){
    //     htm+='<div class="col-lg-4 col-sm-4 col-md-6 isotopeSelector art"><div class="portfolio-box zoom-effect">';
    //     htm+='<img src="static/module/images/1-thumb.jpg" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content">';
    //     htm+='<div class="project-name">'+projectname+'</div><div class="project-social"><ul class="list-inline">';
    //     htm+='<li><i class="fa fa-edit" id='+i+'></i></li><li><i class="fa fa-remove" id='+i+'></i></li><li><i class="fa fa-search" id='+i+'></i></li>';
    //     htm+='</ul></div></div></div></div></div>';
    // }
    // photo.innerHTML=htm;
