var isandroid;
var ua=navigator.userAgent;
isandroid=/android/i.test(ua);
if(netease.ua.ios){
    $("#viewport").attr('content','target-densitydpi=device-dpi,width=640, maximum-scale='+window.screen.width/640);
}
// loading图片
var imgArr=[
    //将需要loading的图片放到此数组
    'http://go.163.com/2017/0608/haier/images/0.jpg',
    'http://go.163.com/2017/0608/haier/images/1.jpg',
    'http://go.163.com/2017/0608/haier/images/2.jpg',
    'http://go.163.com/2017/0608/haier/images/3.jpg',
    'http://go.163.com/2017/0608/haier/images/4.jpg',
    'http://go.163.com/2017/0608/haier/images/5.jpg',
    'http://go.163.com/2017/0608/haier/images/6.jpg',
    'http://go.163.com/2017/0608/haier/skin/kh4.png',
    'http://go.163.com/2017/0608/haier/images/share.jpg',
    'http://go.163.com/2017/0608/haier/images/poster.jpg'
];
// 定帧图列表
// var posterList = ['0','1','2','3','4','5','6'];
var posterList = ['6'];
var jTime = new Date().getTime();
// 视频播放顺序
var videoIndex = 0;

$(function(){
    netease.autoPlay("mp3");
    document.addEventListener("WeixinJSBridgeReady", function (){
        $("#mp3")[0].play();
        setTimeout(function(){
            $("#mp3")[0].pause();
        },150);
    }, false);
    setTimeout(function(){
        $("#mp3")[0].pause();
    },50);

    //防止屏幕移动
    $(document).bind("touchmove",function(e){
        e.preventDefault();
    });

    netease.loading(imgArr,init);

    // share
    shareFn();
});
function init(){
    // 添加定帧图
    for(var i = 0; i < posterList.length; i++){
        $(".page-box").append('<div class="page page'+ i +'" style="background:url(http://go.163.com/2017/0608/haier/images/'+ posterList[i] +'.jpg?'+ jTime +') no-repeat center"></div>');
    }
    // 视频自动播放(第一段)
    if(netease.ua.android && (netease.ua.weixin || netease.ua.newsapp)){
        $('.masker').show();
        $('.masker').click(function(){
            $('#boxv')[0].play();
            setTimeout(function(){
                $('.masker').hide();
            },500);
        });
    }

    $('#boxv').attr('src','h5-haier_files/mobile.mp4');
    netease.autoPlay("boxv");
    var curTime = 0;
    var videoPlay = 1;
    $("#boxv")[0].ontimeupdate = function(){
        curTime = $("#boxv")[0].currentTime;
        console.log($("#boxv")[0].currentTime,videoPlay);
        if(curTime >= 47 && videoPlay == 1){
            $("#boxv")[0].pause();
            $(".page-box").hide();
            $("#video-box").hide();
            videoPlay ++;
            $("#mp3")[0].play();
        }
        // 灰尘
        if(curTime >= 60.5 && videoPlay == 2){
            $("#boxv")[0].pause();
            $("#video-box").hide();
            videoPlay ++;
            $("#boxv")[0].currentTime+=2;
        }
        // 纸
        if(curTime >= 74 && videoPlay == 3){
            $("#boxv")[0].pause();
            $("#video-box").hide();
            videoPlay ++;
            $("#boxv")[0].currentTime+=2;
        }
        // 盒子
        if(curTime >= 90 && videoPlay == 4){
            $("#boxv")[0].pause();
            $("#video-box").hide();
            videoPlay ++;
            $("#boxv")[0].currentTime+=2;
        }
        // 音乐暂停
        if(curTime >= 130 && videoPlay == 5){
            videoPlay ++;
            $("#mp3")[0].pause();
        }
        //显示按钮层
        if(curTime >= 180 && videoPlay == 6){
            videoPlay++;
            $('.end').show();
        }
        // 结束
        if(curTime >= 196 && videoPlay == 7){
            $("#boxv")[0].pause();
            $('.share').show();
        }
    };

}

// 分享
function shareFn(){
    shareData={
        MsgImg:'http://go.163.com/2017/0608/haier/images/share.jpg',  //分享图片
        link:'http://go.163.com/2017/0608/haier/',    //分享链接
        title:'富二代姚爷，真实身份竟然是......',   //分享标题
        desc:'姚爷竟还有另一重身份！拯救大小姐全靠他！',    //分享描述
        fText:'姚爷竟还有另一重身份！拯救大小姐全靠他！',    //分享朋友圈
        callback:function(){
            share_survey(true);
        }
    };
    NeteaseShareInit();
    // document.getElementById("shareBtn").onclick = function() {
    //     NeteaseShare(function(){
    //         // 微信分享提示
    //     },false);
    // }
}


function zhi(){
    $("#video-box").show();
    $("#boxv")[0].play();
}
function chen(){
    $("#video-box").show();
    $("#boxv")[0].play();
}
function computer(){
    $('#video-box').show();
    $('#boxv')[0].play();
}
function box(){
    $("#video-box").show();
    $("#boxv")[0].play();
}

$('.end').on('click',function(){
    window.location="http://m.ehaier.com/www/index.html#/myStore/24310363/24310363/"
})

function getScene(n){
	var krpano = document.getElementById("krpanoSWFObject");
	var sc="loadscene("+n+")";
	krpano.call(sc);
}
//js
function eResize(e,posi){
    var cw = 640,
        ch = document.documentElement.clientHeight,
        vScale, vwScale, vhScale;
    vwScale = cw / 640, vhScale = ch / 1040;
    vScale = vwScale > vhScale ? vwScale : vhScale;
    $(e).css({
        '-webkit-transform': 'scale(' + vScale + ')',
        '-webkit-transform-origin': posi
    });
}
eResize('.video-box','center center');
eResize('.page-box','center 72%');
$(window).bind("resize",function(){
    eResize('.video-box','center center');
    eResize('.page-box','center 72%');
});