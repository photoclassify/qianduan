var ip1 = 'http://192.168.151.77:8080'
var userId = 1





function load() {
        // var from = document.referrer;
        var result;
        var url=window.location.search; //获取url中"?"符后的字串
        if(url.indexOf("?")!=-1){
            result = url.substr(url.indexOf("=")+1);
        }
        var tag = decodeURI(result)
        console.log(tag);
        var tagHtml = '';
        tagHtml += '<label class="showTag" style="font-size: 400%;">'+tag+'</label>';
        var label = document.getElementById('searchTag');
        label.innerHTML = tagHtml;
        $("#test_list").html("");
        var link;
        if(url.indexOf('tag')!= -1) {
            link = ip1 + '/spider/' + tag;
            $.get(link, function (result) {
                    var photolist = document.getElementById('test-list');
                    console.log(result);
                    var html = '';
                    if (result.length > 0) {
                        for (var i = 0; i < result.length; i++) {
                            html += '<div class="grid__item""><a href="' + result[i] + '" target="_blank">';
                            console.log(result[i]);
                            html += '<img src = "' + result[i] + '"  style="max-width:235px;max-height:400px;vertical-align:middle;margin:20px;border:1px #CFCFCF solid;"/></a>';
                            html += '</div>';
                        }
                    }
                    photolist.innerHTML = html;
                })
        }
        else if(url.indexOf('keyword')!= -1){
            link = ip1+'/search?keyword='+tag;
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                cache: true,
                // url: ip1 + "/tag?operate=allSecondRoots&firstRoot=" + result,
                url: link,
                type: "get",
                datatype: "json",
                success: function (data) {
                    console.log(data);
                    var photolist = document.getElementById('test-list');
                    var path = data.photoPath;
                    var photo = data.data;
                    var html = '';
                    for (var key in photo) {
                        console.log(key);
                        var imgSrc = 'http://192.168.151.77:8080' + path + key;
                        html += '<div class="grid__item"">'
                        html += '<img src = "' + imgSrc + '" style="max-width:235px;max-height:400px;vertical-align:middle;margin:20px;border:1px #CFCFCF solid;"/>';
                        html += '</div>';
                    }
                    photolist.innerHTML = html;
                }
            })
        }
    }
//
// })


