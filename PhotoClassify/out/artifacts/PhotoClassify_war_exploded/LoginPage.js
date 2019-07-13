var ip1 = 'http://192.168.151.77:8080'
window.id = null

function loginin() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    console.log(account);
    console.log(password);
    $.ajax({
        xhrFields:{
            withCredentials:true
        },
        type: "GET",
        url: ip1+"/user/login",
        data: {userName:account, pwd:password},
        dataType: "json",
        success: function(data){
            console.log(data);
            if(data == 1){
                console.log("跳转");
                window.location.href='index.jsp';
                // window.id = account;
                // if(window.id != null){
                //
                // }
            }
            else{
                alert("账号或密码错误！");
            }
        }
    });

}