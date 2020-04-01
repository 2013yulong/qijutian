var imgArr = [
	'img/public/bg.jpg',
	'img/public/btn_next.png',
	'img/public/alert_share.png',
	'img/public/from.png',
	'img/public/music_btn.png',
	'img/public/next_ts.png',

	'img/page1/1.png',
	'img/page1/2.png',
	'img/page1/3.png',
	'img/page1/4.png',
	'img/page1/5.png',
	'img/page1/start_btn.png',

	'img/page2/1.png',
	'img/page2/2.png',
	'img/page2/3_1.png',
	'img/page2/3.gif',
	'img/page2/fps.png',

	'img/page3/1.png',
	'img/page3/2.png',
	'img/page3/3.png',
	'img/page3/4.png',
	'img/page3/5.png',
	'img/page3/6.png',
	'img/page3/7.png',
	'img/page3/8.png',
	'img/page3/9.png',
	'img/page3/10.png',

	'img/page4/1.png',
	'img/page4/2.png',
	'img/page4/3.png',
	'img/page4/4.png',
	'img/page4/5.png',
	'img/page4/6.png',
	'img/page4/7.png',
	'img/page4/8.png',
	'img/page4/9.png',
	'img/page4/10.png',
	'img/page4/11.png',

	'img/page5/1.png',
	'img/page5/2.png',
	'img/page5/3.png',
	'img/page5/4.png',
	'img/page5/5.png',

	'img/page6/xlz/1.png',
	'img/page6/xlz/2.png',
	'img/page6/xlz/3.png',
	'img/page6/xlz/4.png',
	'img/page6/xlz/5.png',
	'img/page6/xlz/6.png',
	'img/page6/xlz/7.png',
	'img/page6/1.png',
	'img/page6/2.png',
	'img/page6/3.png',
	'img/page6/4.png',

	'img/page7/1.png',
	'img/page7/2.png',
	'img/page7/3.png',
	'img/page7/4.png',

	'img/page8/1.png',
	'img/page8/2.png',
	'img/page8/3.png',
	'img/page8/4.png',
	'img/page8/5.png',
	'img/page8/6.png',
	'img/page8/7.png',
	'img/page8/8.png',

	'img/page9/1.png',
	'img/page9/2.png',
	'img/page9/3.png',
	'img/page9/4.png',
	'img/page9/5.png',

	'img/page10/1.png',
	'img/page10/2.png',
	'img/page10/3.png',
	'img/page10/4.png',
	'img/page10/5.png',
	'img/page10/6.png',
	'img/page10/c1.png',
	'img/page10/c2.png',
	'img/page10/c3.png',
	'img/page10/c5.png',
	'img/page10/c6.png',

	'img/page11/1.png',
	'img/page11/2.png',
	'img/page11/3.png',
	'img/page11/4.png',
	'img/page11/5.png',
	'img/page11/6.png',
	'img/page11/7.png',
	'img/page11/8.png',
	'img/page11/next.png',

	'img/page12/1.png',
	'img/page12/2.png',
	'img/page12/3.png',
	'img/page12/share_btn.png',
	'img/page12/yysj_btn.png',
];
var obj = {
	'10': '宝来',
	'13': '捷达',
	'15': 'CC',
	'16': '全新高尔夫',
	'17': '其他',
	'20': '新速腾',
	'21': '全新宝来',
	'22': '高尔夫R-Line',
	'23': '高尔夫嘉旅',
	'24': '全新一代迈腾',
	'25': '新速腾GLI',
	'26': '新速腾R-Line',
	'27': '蔚领',
	'28': '新捷达',
	'7': 'GTI',
	'8': '迈腾',
	'9': '速腾（领先型、精英型）'
}

var path = "img/page6/xlz/";
var mySwiper, multiplePic, loadboo = false,
	resource = [];

function init() {
	mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		effect: 'fade',
		noSwiping: true,
		noSwipingClass: 'stop-swiping',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeStart: function(swiper) {
			//			console.log(swiper.activeIndex)
			$('.next_ts').css('display', 'none');

		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if(swiper.activeIndex == 1) {
				gun_boo = true;
				$('.gif_from').on('animationend', function() {
					$('.gif_from').attr('src', 'img/page2/3.gif')
				})
				$('.p2_2').on('animationend', function() {
					if(gun_boo) {
						timer_djs();
					}
				})
			} else {

				$('.fps1').removeClass('fps1_flash');
				$('.fps2').removeClass('fps2_flash');
				$('.gif_from').attr('src', 'img/page2/3_1.png');
				$('.page2_time').text('00:59');
			}
			if(swiper.activeIndex == 11) {
				$('.p12_4').on('animationend', function() {
					setTimeout(function() {
						$('.p12_4').hide();
						$('.p12_3').css('display', 'block');
						
					}, 1500)
				});
			}
			if(swiper.activeIndex == 2 || swiper.activeIndex == 6 || swiper.activeIndex == 8 || swiper.activeIndex == 4 || swiper.activeIndex == 9) {
				setTimeout(function() {
					$('.next_ts').fadeIn(500);
				}, 3500)
			}
			if(swiper.activeIndex == 5) {
				multiplePic.play(60, 'backward')
			} else {
				multiplePic.jumpTo(0)
			}

		},

	})

	control()
}
var timer_gun;
var gun_boo = false;

function timer_djs() {
	gun_boo = false;
	if(timer_gun) {
		clearInterval(timer_gun);
		timer_gun = null;
	}
	$('.fps1').addClass('fps1_flash');
	$('.fps2').addClass('fps2_flash');
	var num = 59;
	timer_gun = setInterval(function() {
		num--;
		if(num > 0) {
			if(num >= 10) {
				$('.page2_time').text('00:' + num)
			} else {
				$('.page2_time').text('00:0' + num)
			}
		} else {
			$('.page2_time').text('00:00');
			clearInterval(timer_gun);
			timer_gun = null;
		}
	}, 50)

}

function control() {
	selcetinit();
	$('.jump_btn,.start_btn,.next').on('click', function() {
		mySwiper.slideNext();
	})
	$('.music_btn').on('click', function() {
		if($(this).attr('class') == 'music_btn play') {
			$('#music')[0].pause();
			$(this).removeClass('play');
		} else {
			$('#music')[0].play();
			$(this).addClass('play');
		}
	})
	$('.share_alert').on('click', function() {
		$('.alert_share').css('display', 'block')
	})
	$('.alert_share').on('click', function() {
		$('.alert_share').css('display', 'none')
	})
	$('.from_btn').on('click', function() {
		$('.alert_from').css('display', 'block')
	})
	$('.close_btn').on('click', function() {
		$('.alert_from').css('display', 'none')
	})
	$('.urlgo1').on('click', function() {
		window.location.href = 'http://contact.faw-vw.com/finance/loan_calculator.htm';
	})
	$('.urlgo2').on('click', function() {
		window.location.href = 'https://faw-vw.tmall.com/';
	})
	$('.sub_btn').on('click', function() {
		if(verification()) {
			ajax_form($("#name").val(), $('#phone').val(), obj[$('#car_models').get(0).value], $('#car_models').get(0).value, $('#shengid').val(), $('#cityid').val(), $('#shopid').val())
		}
	})

	for(var i = 1; i < 9; i++) {
		resource.push(path + i + '.png?v=1');
	};

	multiplePic = new mo.Film(document.querySelector('.xlz'), {
		resource: resource,
		totalFrame: 8
	});
	multiplePic.jumpTo(0)
}

function selcetinit() {
	$('#name').val('');
	$('#phone').val('');
	getSheng('shengid');
	getShi('cityid', this.value);
	getShop('shopid', this.value);
}

/*——————————————————————————————————表单预留接口以及验证————————————————————————————————————————*/
//验证
function verification() {
	if($("#name").val() == '') {
		alert("姓名不能为空");
		return false;
	}
	var ip = $('#phone').val();
	var regBox = {
		regMobile: /^0?1[3|4|5|8][0-9]\d{8}$/, //手机
		//			regTel: /^0[\d]{2,3}-[\d]{7,8}$/
	};
	var mflag = regBox.regMobile.test(ip);
	//		var tflag = regBox.regTel.test(ip);
	if(!mflag) {
		alert("电话格式有误");
		return false;
	}

	if($('#shengid').val() == '') {
		alert("请选择省份");
		return false;
	}
	if($('#cityid').val() == '') {
		alert("请选择城市");
		return false;
	}
	if($('#shopid').val() == '') {
		alert("请选择经销商");
		return false;
	}

	if($('#car_models').val() == '' || $('#car_models').val() == '请选择试用车型') {
		alert("请选择试用车型");
		return false;
	}
	return true
}
//预约试驾
function ajax_form(name, phone, cartype, cartypeid, sheng, city, shop) {
	$.ajax({
		type: 'POST',
		url: "http://s.auto.163.com/api/2017/0920/vw/common.php?act=subMessage",
		data: {
			name: name,
			phone: phone,
			province: sheng,
			city: city,
			dealer: shop,
			cartype: cartype,
			cartypeid: cartypeid,
			flag: 'wap2',
			title: '1500万辆汽车不是闹着玩的',
			url: 'http://s.auto.163.com/2017/0926/fawvk/index.html'
		},
		dataType: 'json',
		success: function(res) {
			console.log('返回结果')
			console.log(res)
			flag10 = true;
			if(typeof res == 'string') {
				res = JSON.parse(res);
			}
			if(res.retCode < 0) {
				alert(res.retData.error);
			} else if(res.retCode == 1) {
				alert(res.retInfo)
			}
		}
	});
}

//________________________loading_______________________

function loadimg(imgs, callback) {
	if(!imgs) {
		return false
	};
	var img = [];
	var len = imgs.length;
	var loadedCount = 0;
	for(var i = 0; i < len; i++) {
		img[i] = new Image();
		img[i].src = imgs[i];
		img[i].onload = function() {
			loadedCount++;
			if(loadedCount >= len) {
				callback ? callback() : null;

			}
			loadboo = true;
		};
	}
};
var setin = function() {
	this.percent = 0;
	interval = setInterval(function() {
		this.percent += 9;
		if(this.percent >= 99) {
			this.percent = 99;
			if(loadboo) {
				$('.load_data').text('100%');
				setTimeout(function() {
					$('.loading').hide();
					init();
				}, 500)
				clearInterval(this.interval);

			} else {
				$('.load_data').text(this.percent + '%');
			}
		} else {
			$('.load_data').text(this.percent + '%');
		}
	}, 400);
}
$(function() {
	loadimg(imgArr);
	setin();
})
// 解决ios页面滑动问题
$(window).bind("touchmove", function(evt) {
	if(evt.cancelable) evt.preventDefault();
});