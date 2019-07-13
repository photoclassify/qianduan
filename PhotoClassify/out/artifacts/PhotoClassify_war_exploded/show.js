var ip1 = 'http://192.168.151.77:8080';

function showdetails() {
    var datadetails = new Array();
    $.get('http://192.168.151.77:8080/photo?photoName=81_190705238.jpeg',
        function(data){
            console.log(data);
            var details = data[i].Photo;
            var tag = "";
            for(var key in details){
                console.log(key);
                console.log(details[key]);
                var tag = key + ":" + details[key] + ";" ;
            }
            datadetails.push(tag);
            var tag1 = data.data.tag1;
            for(var key in tag1){
                console.log(key);
                console.log(tag1[key]);
                var tag1 = key + ":" + tag1[key] + ";" ;
                datadetails.push(tag1);
            }
            /*var tag2 = data.data.tag2;
            for(var key in tag2){
                console.log(key);
                console.log(tag2[key]);
                datadetails += key + ":" + details[key] + ";";
            }
            var tag3 = data.data.tag3;
            for(var key in tag3){
                console.log(key);
                console.log(tag3[key]);
                datadetails += key + ":" + details[key] + ";";
            }
            var tag4 = data.data.tag4;
            for(var key in tag4){
                console.log(key);
                console.log(tag4[key]);
                datadetails += key + ":" + details[key] + ";";
            }
            var tag5 = data.data.tag5;
            for(var key in tag5){
                console.log(key);
                console.log(tag5[key]);
                datadetails += key + ":" + details[key] + ";";
            }*/
        });

    console.log(datadetails);
    return datadetails;
}

function load() {
    var url = window.location.search;
    var keyword;
    var turl;
    res = parseURL(url);
    console.log(res);
    turl = ip1+'/tag?operate=allPhotos&firstRoot='+res.firsttag+'&secondRoot='+res.secondtag+'&keyword='+res.keyword;
    $("#test_list").html("");
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        cache: true,
        // url: "http://192.168.151.77:8080/tag?operate=allPhotos&firstRoot=自然风景&secondRoot=海洋&keyword=海洋",
        url:turl,
        type: "get",
        datatype: "json",
        success: function (data) {
            var photolist = document.getElementById('imgDefault');
            console.log(data);
            var photoarray = new Array();
            for(var i=1; i < data.length; i++) {
                photoarray[i-1] = new Array();
                photoarray[i-1].push(data[i].message);

                var detail = "";
                var details = data[i].data.Photo;
                for(var key in details){
                    detail +="“" + key + ":" + details[key] + "”" ;
                }
                photoarray[i-1].push(detail);
                var tag11 = "";
                var tag1 = data[i].data.tag1;
                for(var key in tag1){
                    tag11 +="“" + key + ":" + tag1[key] + "”";
                }
                photoarray[i-1].push(tag11);
                var tag22 = "";
                var tag2 = data[i].data.tag2;
                for(var key in tag2){
                    tag22 +="“" + key + ":" + tag2[key] + "”" ;
                }
                photoarray[i-1].push(tag22);
                var tag33 = "";
                var tag3 = data[i].data.tag3;
                for(var key in tag3){
                    tag33 +="“" + key + ":" + tag3[key] + "”";
                }
                photoarray[i-1].push(tag33);
                var tag44 = "";
                var tag4 = data[i].data.tag4;
                for(var key in tag4){
                    tag44 +="“" + key + ":" + tag4[key] + "”";
                }
                photoarray[i-1].push(tag44);
                var tag55 = "";
                var tag5 = data[i].data.tag5;
                for(var key in tag5){
                    tag55 +="“" + key + ":" + tag5[key] + "”";
                }
                photoarray[i-1].push(tag55);
            }
            var path = data[0].thPath;
            var photopath = data[0].photoPath;
            var photo = data[0].data;
            var html = '';
            var i = 0;
            for (var key in photo) {
                i++;
                html += '<img class="imgItem" src = "http://192.168.151.77:8080' + path + key + '" data-src = "http://192.168.151.77:8080' + photopath + key + '"  id="'+ key +'" style="width: 390px;height: 260px"/>';

            }
            photolist.innerHTML = html;

            (function () {
                var LightBox = function (options) {
                    this.imgListParent = document.getElementById(options.imgListParent);   //图片列表的父元素
                    this.imgItemClass = options.imgItemClass;   //图片的className
                    this.idx = 0;  //图片的索引，初始值为0
                    this.isShowPage = options.isShowPage || false;    //是否显示分页，默认不显示
                    this.init();
                };
                //初始化
                LightBox.prototype.init = function () {
                    this.renderDOM();
                    this.imgListClick();
                    this.nextBtnClick();
                    this.prevBtnClick();
                    this.closeBtnClick();
                    this.deleteBtnClick();
                    this.editBtnClick();
                };
                //渲染弹窗
                LightBox.prototype.renderDOM = function () {
                    var imgModule = document.createElement("div");
                    imgModule.id = "imgModule";

                    var oHtml = "";
                    oHtml += '<div class="mask"></div>';
                    oHtml += '<div class="lightBox">';
                    oHtml += '<div class="lightBoxContent">';
                    oHtml += '<img src="image/loading.gif" alt="" id="imgLoader">';
                    oHtml += '<img alt="" id="imgLight">';
                    oHtml += '</div>';
                    oHtml += '<span class="btn lightBoxSprite" id="lightBoxPrev"></span>';
                    oHtml += '<span class="btn lightBoxSprite" id="lightBoxNext"></span>';
                    oHtml += '<span class="closeBtn lightBoxSprite" id="closeBtn"></span>';
                    oHtml += '<span class="deleteBtn lightBoxSprite2" id="deleteBtn" style="background: url(image/laji.png)"></span>';
                    oHtml += '<span class="editBtn lightBoxSprite3" id="editBtn" style="background: url(image/edit.png)"></span>';
                    oHtml += '<div class="lightBoxPagination" id="lightBoxPagination"></div>';
                    oHtml += '</div>';
                    imgModule.innerHTML = oHtml;
                    document.body.appendChild(imgModule);
                };
                //分页
                LightBox.prototype.pagination = function (idx) {
                    var imgList = this.getByClass(this.imgListParent, this.imgItemClass);
                    var pagination = document.getElementById("lightBoxPagination");
                    var page = "";
                    for (var i = 0; i < imgList.length; i++) {
                        if (idx == i) {
                            page += '<span class="current"></span>';
                        } else {
                            page += '<span></span>';
                        }
                    }
                    if (this.isShowPage) {
                        pagination.innerHTML = page;
                    }
                };
                //点击图片弹出弹窗
                LightBox.prototype.imgListClick = function () {
                    var imgList = this.getByClass(this.imgListParent, this.imgItemClass);
                    var imgModule = document.getElementById("imgModule");
                    var self = this;
                    for (var i = 0; i < imgList.length; i++) {
                        imgList[i].index = i;
                        imgList[i].onclick = function () {
                            imgModule.style.display = "block";
                            var src = this.getAttribute("data-src");
                            self.idx = this.index;
                            self.imgLoad(src);
                            self.pagination(self.idx);
                        }
                    }
                };
                //上一张
                LightBox.prototype.prevBtnClick = function () {
                    var prevBtn = document.getElementById("lightBoxPrev");
                    var self = this;
                    prevBtn.onclick = function () {
                        var imgList = self.getByClass(self.imgListParent, self.imgItemClass);
                        console.log(self.idx);
                        self.idx--;
                        if (self.idx < 0) {
                            self.idx = imgList.length - 1;
                        }
                        var src = imgList[self.idx].getAttribute("data-src");
                        self.imgLoad(src);
                        self.pagination(self.idx);
                    }
                };
                //下一张
                LightBox.prototype.nextBtnClick = function () {
                    var nextBtn = document.getElementById("lightBoxNext");
                    var self = this;
                    nextBtn.onclick = function () {
                        var imgList = self.getByClass(self.imgListParent, self.imgItemClass);
                        self.idx++;
                        if (self.idx >= imgList.length) {
                            self.idx = 0;
                        }
                        var src = imgList[self.idx].getAttribute("data-src");
                        self.imgLoad(src);
                        self.pagination(self.idx);
                    }
                };
                //删除图片
                LightBox.prototype.deleteBtnClick = function(){
                    var deleteBtn = document.getElementById("deleteBtn");
                    var imgModule = document.getElementById("imgModule");
                    var self = this;
                    var imgList = self.getByClass(self.imgListParent, self.imgItemClass);
                    var photoid = imgList[self.idx].getAttribute("id");
                    deleteBtn.onclick = function(){
                        $.ajax({
                            xhrFields: {
                                withCredentials: true
                            },
                            cache: true,
                            type: "get",
                            // url: ip1 + "/tag/delete/" + data[index] + '/' + userId,
                            url:ip1+'/delete?photoName='+photoid,
                            // dataType: "json",
                            success: function (data) {
                                console.log(data);
                                alert("删除照片成功！");
                                location.reload();
                            }
                        });
                    }
                };
                //编辑图片
                LightBox.prototype.editBtnClick = function(){
                    var editBtn = document.getElementById("editBtn");
                    var imgModule = document.getElementById("imgModule");
                    var self = this;
                    var imgList = self.getByClass(self.imgListParent, self.imgItemClass);
                    var photoid = imgList[self.idx].getAttribute("data-src"); //获取原图地址
                    editBtn.onclick = function(){
                        window.location.href = "BlurWindow.jsp?src="+photoid;
                    }
                };
                //图片预加载
                LightBox.prototype.imgLoad = function (src, callback) {
                    var imgLight = document.getElementById("imgLight");
                    var loader = document.getElementById("imgLoader");
                    loader.style.display = "block";
                    // imgLight.src = "";

                    var img = new Image();
                    img.onload = function () {
                        loader.style.display = "none";
                        imgLight.src = src;
                    };
                    img.src = src;
                };
                //关闭弹窗
                LightBox.prototype.closeBtnClick = function () {
                    var closeBtn = document.getElementById("closeBtn");
                    var imgModule = document.getElementById("imgModule");

                    closeBtn.onclick = function () {
                        imgModule.style.display = "none";
                    }
                };

                //封装获取元素函数
                LightBox.prototype.getByClass = function (oParent, oClass) {
                    var oEle = oParent.getElementsByTagName("*");
                    var oResult = [];

                    for (var i = 0; i < oEle.length; i++) {
                        if (oEle[i].className == oClass) {
                            oResult.push(oEle[i]);
                        }
                    }
                    return oResult;
                };
                window.LightBox = LightBox;
            })();

            new LightBox({
                imgListParent: "imgDefault",
                imgItemClass: "imgItem",
                isShowPage: true
            });
        }
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

