layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,height:'100%'
        ,arrow: 'always' //始终显示箭头
    });
});

function codeInput(){
    var aemail = $('#em').val();
    console.log(aemail);
    console.log("123");
    $.ajax({
        withCredentials:true,
        url:'http://192.168.151.77:8080/user/email',
        type: 'GET',
        dataType: 'json',
        data: {
            email:aemail,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.error(err)
        }
    })
}

function validate()
{
    $.get('http://192.168.151.77:8080/user/email',
        function(result) {
            var emcode = result;
            var inputDom = document.getElementById("code");
            var text = inputDom.value;
            console.log(result);
            console.log(text);
        })
}

function signIn() {
    var account = $('#user').val();
    var password = $('#pwd').val();
    var email = $('#em').val();
    var repassword = $('#rpwd').val();
    if(password === repassword) {
        document.getElementById("tishi").innerHTML="<font color = 'green'>两次密码相同</font>";
    }
    else {
        document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
    }
    $.ajax({
        xhrFields:{
            withCredentials:true
        },
        url: 'http://192.168.151.77:8080/user/register',
        type: 'GET',
        dataType: 'json',
        data: {
            userName: account,
            email:email,
            pwd: password,
            rpwd:repassword,
        },
        success: function (data) {
            console.log(data);
            window.location.href='LoginPage.jsp';

        },
        error: function (err) {
            console.error(err)
        }
    })
}

