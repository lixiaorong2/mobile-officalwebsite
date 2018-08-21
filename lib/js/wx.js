$(function () {
    check();
    var url = location.href.split('#')[0];
    var imgurl = 'http://view.yyxueche.com//logo.jpg';
    $.ajax({
        type: "GET",
        url: "http://view.yyxueche.com/wxConf/jssdk.php?url=" + url,
        dataType: 'json',
        success: function (json) {
            var data = eval(json);
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareWeibo",
                    "getLocation",
                    "openLocation"
                ]
            });
        },
        error: function () {
        }
    });
    wx.ready(function () {
        var shareData = {
            title: 'YY学车自营训练场实景展示',
            desc: '让天下没有难考的驾照！',
            link: 'http://view.yyxueche.com',
            imgUrl: imgurl
        };
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
    });


    $("#vrmenu .item").on("click", function () {
        $("#vrmenu .item").toggleClass("tran");
        $("#vrmenu .item").toggleClass("tranOri");
        $("#vrmenu .items").toggleClass("trans");
        $("#vrmenu .items").toggleClass("transOri");
    });

    $("#vrmenu .home").on("click", function () {
        window.location.href = "./index.html";
    });

    $("#vrmenu .zixun").on("click", function () {
        window.location.href = "https://m.yyxueche.com/resources/vr_ticket.html";
    });

    $("#vrmenu .music").on("click", function () {
        musicClick();
        return false;
    });

    $("#vrmenu .gyro").on("click", function () {
        gyroClick();
        return false;
    });


    $("#vrmenu .info").on("click", function () {
        $("#vrintro").show();
    });

    $("#vrintro").on("click", function () {
        $("#vrintro").hide();
        $("#vrintro").removeClass("opacity1");
        return false;
    });

    $("#skin_rg .vr").on("click", function () {
        webvrClick();
        return false;
    });

    $("#skin_top .back").on("click", function () {
        window.location.href = "./area.html"
    });

})

function gyroClick() {
    var krpano = document.getElementById("krpanoSWFObject");
    var str = "switch(plugin[skin_gyro].enabled); if(plugin[skin_gyro].enabled, skin_showmap(false));";
    krpano.call(str);
    $("#vrmenu .gyro").toggleClass("switch");
}

function musicClick() {
    var krpano = document.getElementById("krpanoSWFObject");
    var str = "pausesoundtoggle(bgsnd);";
    krpano.call(str);
    $("#vrmenu .music").toggleClass("switch");
}

function showVr() {
    $("#skin_rg .vr").show();
}
function webvrClick() {
    var krpano = document.getElementById("krpanoSWFObject");
    var str = "webvr.enterVR();";
    krpano.call(str);
}


function skinhide() {
    $("#vrmenu").hide();
    $("#skin_top .back").hide();
}
function skinshow() {
    $("#skin_top .back").show();
    $("#vrmenu").show();
}

function openAddress(a, b, c) {
    wx.openLocation({
        latitude: b,
        longitude: c,
        name: '[位置]',
        address: a,
        scale: 22,
        infoUrl: ''
    });
}
function ispc() {
    var userAgentInfo=navigator.userAgent;
    var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var flag=true;
    for(var v=0;v<Agents.length;v++) {
        if(userAgentInfo.indexOf(Agents[v])>0) {
            flag=false;
            break;
        }
    }
    return flag;
}
function check(){
    var res = ispc(),
        isarea = (window.location.href).indexOf("area.html");
    if(res){
        var seeHeight = $(window).height();
        var wid = seeHeight*0.5625,
            side = wid*0.18;
        $("html").width(wid);
        if(isarea){
            $("#pagebut").width(wid);
            $("#area .side").width(side);
        }
    }
}