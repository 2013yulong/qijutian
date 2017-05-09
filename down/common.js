/*!
 * node-news v: 1.0.15 | Copyright © 2017 Sohu.com, Inc. All Rights Reserved | Date - 2017-02-14 11:50:55
 * 
 */
! function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var o = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
	}
	var n = window.webpackJsonp;
	window.webpackJsonp = function(r, a) {
		for (var s, c, u = 0, l = []; u < r.length; u++) c = r[u], o[c] && l.push.apply(l, o[c]), o[c] = 0;
		for (s in a) t[s] = a[s];
		for (n && n(r, a); l.length;) l.shift().call(null, e);
		if (a[0]) return i[0] = 0, e(0)
	};
	var i = {},
		o = {
			0: 0
		};
	e.e = function(t, n) {
		if (0 === o[t]) return n.call(null, e);
		if (void 0 !== o[t]) o[t].push(n);
		else {
			o[t] = [n];
			var i = document.getElementsByTagName("head")[0],
				r = document.createElement("script");
			r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = e.p + "" + t + "." + ({
				1: "tMain/js/tMain",
				2: "tPhoto/js/tPhoto",
				3: "tLive/js/tLive",
				4: "tCha/js/tCha",
				5: "tCate/js/tCate"
			}[t] || t) + ".js", i.appendChild(r)
		}
	}, e.m = t, e.c = i, e.p = "../../js/"
}([, function(t, e, n) {
	"use strict";
	var i = n(27);
	n(22), n(23), n(24), n(18), n(20), n(21), n(19), n(25), n(26), t.exports = i
}, function(t, e) {
	! function() {
		function e(t, e) {
			return (/string|function/.test(typeof e) ? c : s)(t, e)
		}

		function n(t, e) {
			return "string" != typeof t && (e = typeof t, "number" === e ? t += "" : t = "function" === e ? n(t.call(t)) : ""), t
		}

		function i(t) {
			return d[t]
		}

		function o(t) {
			return n(t).replace(/&(?![\w#]+;)|[<>"']/g, i)
		}

		function r(t, e) {
			if (h(t))
				for (var n = 0, i = t.length; i > n; n++) e.call(t, t[n], n, t);
			else
				for (n in t) e.call(t, t[n], n)
		}

		function a(t, e) {
			var n = /(\/)[^\/]+\1\.\.\1/,
				i = ("./" + t).replace(/[^\/]+$/, ""),
				o = i + e;
			for (o = o.replace(/\/\.\//g, "/"); o.match(n);) o = o.replace(n, "/");
			return o
		}

		function s(t, n) {
			var i = e.get(t) || u({
				filename: t,
				name: "Render Error",
				message: "Template not found"
			});
			return n ? i(n) : i
		}

		function c(t, e) {
			if ("string" == typeof e) {
				var n = e;
				e = function() {
					return new f(n)
				}
			}
			var i = l[t] = function(n) {
				try {
					return new e(n, t) + ""
				} catch (i) {
					return u(i)()
				}
			};
			return i.prototype = e.prototype = p, i.toString = function() {
				return e + ""
			}, i
		}

		function u(t) {
			var e = "{Template Error}",
				n = t.stack || "";
			if (n) n = n.split("\n").slice(0, 2).join("\n");
			else
				for (var i in t) n += "<" + i + ">\n" + t[i] + "\n\n";
			return function() {
				return "object" == typeof console && console.error(e + "\n\n" + n), e
			}
		}
		var l = e.cache = {},
			f = this.String,
			d = {
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"&": "&#38;"
			},
			h = Array.isArray || function(t) {
				return "[object Array]" === {}.toString.call(t)
			},
			p = e.utils = {
				$helpers: {},
				$include: function(t, e, n) {
					return t = a(n, t), s(t, e)
				},
				$string: n,
				$escape: o,
				$each: r
			},
			m = e.helpers = p.$helpers;
		e.get = function(t) {
			return l[t.replace(/^\.\//, "")]
		}, e.helper = function(t, e) {
			m[t] = e
		}, t.exports = e
	}()
}, , function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t) {
		var e = new Image;
		e.src = "//pic.k.sohu.com/img8/wb/tj/h5.gif?objType=share2nd&wxShareType=" + t
	}
	var r = n(1),
		a = i(r),
		s = {
			getWechatConfig: function() {
				a["default"].ajax({
					type: "get",
					url: "/api/usercenter/getWeiXinJsSign.go",
					cache: !1,
					success: function(t) {
						console.log("shareon:\n", t), t && wx && wx.config({
							debug: !1,
							appId: t.appId,
							timestamp: t.timestamp,
							nonceStr: t.nonceStr,
							signature: t.nonceStr,
							jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
						})
					}
				})
			},
			getShareon: function(t, e) {
				a["default"].ajax({
					type: "get",
					url: t,
					data: e,
					cache: !1,
					success: function(t) {
						console.log("shareon:\n", t), wx && (wx.ready(function() {
							var e = t.WeiXinMoments.pics[0] || "//cache.k.sohu.com/img8/wb/logo/share/share_normal.png";
							wx.onMenuShareTimeline({
								title: t.WeiXinMoments.content,
								link: t.WeiXinMoments.link,
								imgUrl: e,
								success: function() {
									o("onMenuShareTimeline")
								},
								cancel: function() {}
							}), wx.onMenuShareAppMessage({
								title: t.WeiXinChat.title,
								desc: t.WeiXinChat.content,
								link: t.WeiXinChat.link,
								imgUrl: t.WeiXinChat.pics[0],
								type: "",
								dataUrl: "",
								success: function() {
									o("onMenuShareAppMessage")
								},
								cancel: function() {}
							}), wx.onMenuShareQQ({
								title: t.QQChat.title,
								desc: t.QQChat.content,
								link: t.QQChat.link,
								imgUrl: t.QQChat.pics[0],
								success: function() {
									o("onMenuShareQQ")
								},
								cancel: function() {}
							}), wx.onMenuShareWeibo({
								title: t.Weibo.title,
								desc: t.Weibo.content,
								link: t.Weibo.link,
								imgUrl: t.Weibo.pics[0],
								success: function() {
									o("onMenuShareWeibo")
								},
								cancel: function() {}
							})
						}), wx.error(function(t) {}))
					}
				})
			}
		};
	t.exports = s
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}
	var o = n(16),
		r = i(o),
		a = navigator.userAgent,
		s = {
			isAndroid: function() {
				return !!a.match(/Android/i)
			},
			isIOS: function() {
				return !!a.match(/iPhone|iPad|iPod/i)
			},
			isMobileQQ: function() {
				return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(a) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(a)
			},
			isSOHUNewsClient: function() {
				return !!a.match(/jsKit/i)
			},
			isWeibo: function() {
				return !!a.match(/weibo/i)
			},
			isWechat: function() {
				return !!a.match(/MicroMessenger/i)
			},
			isUC: function() {
				return !!a.match(/UCBrowser/i)
			},
			isAlipay: function() {
				return !!a.match(/alipayclient/i)
			},
			isChrome: function() {
				return !(!a.match(/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/i) || !window.chrome)
			},
			isSamsung: function() {
				return !!a.match(/SamsungBrowser/i)
			},
			isBaidubox: function() {
				return !(!a.match(/baiduboxapp/i) || a.match(/T7\/7\.4/i))
			},
			isSupportAPPLink: function() {
				return /OS 9(_[3-9])* like Mac OS X/gim.test(a) || /OS 1[0-9]+(_\d+)+ like Mac OS X/gim.test(a)
			},
			isIOS9Up: function() {
				return /OS 9(_[0-2])* like Mac OS X/gim.test(a)
			},
			isPC: function() {
				return !a.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
			}
		},
		c = {
			protocol: "channel://channelId=1&channelName=%E9%A6%96%E9%A1%B5",
			loadWaiting: 3e3,
			autoTrigger: !1,
			useAppLink: !0,
			failUrl: "//3g.k.sohu.com",
			isDownload: !1,
			h5from: "browser",
			callback: function() {},
			androidSchema: "sohunews://pr/",
			IosSchema: "sohunewsiphone://pr/",
			appLinkSchema: "//applink.k.sohu.com?url=",
			redirectUrl: "//3g.k.sohu.com/h5apps/callupapp/modules/callupapp/callupapp.html"
		},
		u = {
			mixinConfig: function(t) {
				c.autoTrigger = !1, c.failUrl = "//3g.k.sohu.com", t && (c.protocol = t.protocol || c.protocol, c.loadWaiting = t.loadWaiting || c.loadWaiting, c.autoTrigger = t.autoTrigger || c.autoTrigger, c.useAppLink = "false" == String(t.useAppLink) ? t.useAppLink : c.useAppLink, c.callback = t.callback || c.callback, c.isDownload = t.isDownload || c.isDownload, c.h5from = t.h5from || c.h5from, c.failUrl = t.failUrl || c.failUrl)
			},
			generateSchema: function(t) {
				var e = encodeURIComponent(t),
					n = e;
				return s.isAndroid() && (n = c.androidSchema + e), s.isIOS() && (n = c.IosSchema + t), s.isSupportAPPLink() && c.useAppLink && !c.autoTrigger && (n = c.appLinkSchema + e), s.isAndroid() && s.isChrome() && (n = "intent://pr/" + t + "/#Intent;package=com.sohu.newsclient;scheme=sohunews;S.browser_fallback_url=" + encodeURIComponent(window.location.protocol + c.failUrl) + ";end", c.autoTrigger && (n = "intent://pr/" + t + "/#Intent;package=com.sohu.newsclient;scheme=sohunews;end")), s.isSOHUNewsClient() && (n = t), n
			},
			showGuideDOM: function() {
				var t = "//k.sohu.com/static/ui-open/2.0/images/",
					e = "#fff",
					n = "100%";
				s.isAndroid() && (t += "android-"), s.isIOS() && (t += "ios-"), s.isWechat() ? t += "weixin.png" : s.isMobileQQ() ? t += "qq.png" : s.isWeibo() && (t += "weibo.png"), s.isAndroid() && s.isWechat() && (e = "#f3f3f3"), s.isAndroid() && s.isMobileQQ() && (n = "90%");
				var i = "position: fixed;top: 0;left: 0;right: 0; bottom: 0; width: 100%;height: 100%;background-color: " + e + ";z-index: 100000;",
					o = ['<div style="' + i + '">', '<img src="' + t + '"style="display:block;width: ' + n + ';margin:0 auto;" alt="guide image" />', "</div>"].join("");
				document.body.insertAdjacentHTML("beforeend", o)
			},
			redirect: function(t) {
				s.isIOS() && s.isWeibo() && (location.href = c.redirectUrl + "?protocol=" + encodeURIComponent(t))
			},
			ios9OpenNative: function(t) {
				var e = new Date,
					n = e.getTime(),
					i = "<a href ='" + t + "' style='width:100%;height:10px;' id='" + n + "'></a> ";
				document.body.insertAdjacentHTML("beforeend", i);
				var o = document.getElementById(n),
					r = document.createEvent("MouseEvent");
				r.initEvent("click", !1, !1), o.dispatchEvent(r)
			},
			failCallUp: function(t, e, n) {
				var i = null,
					o = Date.now();
				i = setTimeout(function() {
					if (!document.hidden && !document.webkitHidden) {
						var i = Date.now() - o;
						i > t + 200 || (n && s.isAndroid() ? window.location.href = "//9194597c51c0c.cdn.sohucs.com/upgrade/SohuNewsClient_lite_standalone_edition_1626_2016-12-09-1132.apk" : window.location.href = e)
					}
				}, t);
				var r = function() {
					var t = document.hidden || document.webkitHidden;
					t && clearTimeout(i)
				};
				document.addEventListener("visibilitychange", r, !1), document.addEventListener("webkitvisibilitychange", r, !1), window.addEventListener("pagehide", function() {
					clearTimeout(i)
				}, !1)
			},
			call: function(t) {
				var e = document.createElement("iframe"),
					n = document.createElement("a"),
					i = document.body;
				if (n.style.cssText = e.style.cssText = "display:none;width:0px;height:0px;", s.isPC()) return void(window.location.href = "//k.sohu.com");
				if (s.isSOHUNewsClient()) return c.callback(), void(location.href = t);
				if (s.isSupportAPPLink() && c.useAppLink) c.callback(), this.ios9OpenNative(t);
				else {
					if (s.isMobileQQ() || s.isWechat() || s.isWeibo()) return void this.showGuideDOM();
					if (s.isIOS9Up()) c.callback(), n.href = t, i.appendChild(n), n.click();
					else if (s.isUC() && s.isAndroid() && !s.isAlipay()) window.location.href = "//9194597c51c0c.cdn.sohucs.com/upgrade/SohuNewsClient_V5.8.1_20161219120914_1001.apk";
					else {
						if (s.isAndroid() && s.isChrome()) return c.callback(), n.href = t, i.appendChild(n), void n.click();
						c.callback(), i.appendChild(e), e.src = t
					}
				}
				c.autoTrigger || this.failCallUp(c.loadWaiting, c.failUrl, c.isDownload)
			},
			loadSchema: function(t) {
				t || (t = c), this.mixinConfig(t), (0, r["default"])(t.report);
				var e = void 0;
				e = c.protocol.match(/http/i) ? c.protocol + "?h5from=" + c.h5from : c.protocol + "&h5from=" + c.h5from;
				var n = this.generateSchema(e);
				c.autoTrigger && (s.isMobileQQ() || s.isWechat() || s.isWeibo() || s.isUC() || s.isPC() || s.isSOHUNewsClient()) || this.call(n)
			},
			report: r["default"]
		};
	t.exports = window.callUpApp = u
}, function(t, e, n) {
	"use strict";

	function i() {}
	n(1);
	i.prototype.maps = {
		os: [{
			name: "ios",
			reg: /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i
		}, {
			name: "android",
			reg: /Android/i
		}],
		browsers: [{
			name: "sohunews",
			reg: /SohuNews/i
		}, {
			name: "weixin",
			reg: /MicroMessenger/i
		}, {
			name: "weibo",
			reg: /weibo/i
		}, {
			name: "Qzone",
			reg: /Qzone/i
		}, {
			name: "QQ",
			reg: /(\sQQ)|(Mobile MQQBrowser)/i
		}, {
			name: "qqbrowser",
			reg: /MQQBrowser/i
		}, {
			name: "UC",
			reg: /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i
		}, {
			name: "chrome",
			reg: /(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/
		}, {
			name: "XiaoMi",
			reg: /XiaoMi\/MiuiBrowser\/([\w\.]+)/i
		}, {
			name: "sogou",
			reg: /SogouMobileBrowser/i
		}, {
			name: "baidu",
			reg: /FlyFlow/i
		}, {
			name: "hao123",
			reg: /hao123/i
		}, {
			name: "baidubox",
			reg: /baiduboxapp/i
		}, {
			name: "opera",
			reg: /Opera/i
		}, {
			name: "alipay",
			reg: /Alipay/i
		}, {
			name: "safari",
			reg: /(ipad|iphone).* applewebkit\/.* mobile/i
		}]
	}, i.prototype.rgx = function(t) {
		for (var e = navigator.userAgent, n = !1, i = 0; i < t.length;) {
			if (t[i].reg.test(e)) return n = !0, t[i].name;
			i++
		}
		if (!n) return "other"
	}, i.prototype.getOS = function() {
		return this.rgx(this.maps.os)
	}, i.prototype.getBrowser = function() {
		return this.rgx(this.maps.browsers)
	}, i.prototype.getResult = function() {
		var t = this;
		return {
			os: t.getOS(),
			browser: t.getBrowser()
		}
	}, t.exports = new i
}, function(t, e, n) {
	var i, o, r;
	(function(t) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}; /*! ui v: 0.10.10 | Copyright © 2016 Sohu.com, Inc. All Rights Reserved | Date - 2016-09-09 14:43:57 */
		! function(s, c) {
			"object" === a(e) && "object" === a(t) ? t.exports = c(n(1), n(8)) : (o = [n(1), n(8)], i = c, r = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== r && (t.exports = r)))
		}(void 0, function(t, e) {
			return function(t) {
				function e(i) {
					if (n[i]) return n[i].exports;
					var o = n[i] = {
						exports: {},
						id: i,
						loaded: !1
					};
					return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
				}
				var n = {};
				return e.m = t, e.c = n, e.p = "../../js/", e(0)
			}([function(t, e, n) {
				function i(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}
				var o = n(1),
					r = (i(o), n(2)),
					a = i(r),
					s = n(5),
					c = i(s);
				n(9), a["default"].utils = c["default"], t.exports = a["default"]
			}, function(e, n) {
				e.exports = t
			}, function(t, e, n) {
				function i(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}
				var o = n(1),
					r = i(o),
					a = n(3),
					s = i(a);
				if ("undefined" == typeof r["default"]) throw new Error("NewsSDK H5 requires zepto -.-");
				var c = r["default"].UI || {},
					u = window.document;
				(0, r["default"])(function() {
					s["default"].attach(u.body)
				}), c.support = {}, c.support.animation = function() {
					var t = function() {
						var t = u.body || u.documentElement,
							e = {
								WebkitAnimation: "webkitAnimationEnd",
								animation: "animationend"
							};
						for (var n in e)
							if (void 0 !== t.style[n]) return e[n]
					}();
					return t && {
						end: t
					}
				}(), c.support.transition = function() {
					var t = function() {
						var t = u.body || u.documentElement,
							e = {
								WebkitTransition: "webkitTransitionEnd",
								transition: "transitionend"
							};
						for (var n in e)
							if (void 0 !== t.style[n]) return e[n]
					}();
					return t && {
						end: t
					}
				}(), r["default"].fn.emulateTransitionEnd = function(t) {
					var e = !1,
						n = this;
					(0, r["default"])(this).one(c.support.transition.end, function() {
						e = !0
					});
					var i = function() {
						e || (0, r["default"])(n).trigger(c.support.transition.end), n.transitionEndTimmer = void 0
					};
					return this.transitionEndTimmer = setTimeout(i, t), this
				}, c.version = "0.10.10", t.exports = window.UI = c
			}, function(t, e, n) {
				var i, o = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
					return "undefined" == typeof t ? "undefined" : a(t)
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : "undefined" == typeof t ? "undefined" : a(t)
				};
				! function() {
					function r(t, e) {
						function n(t, e) {
							return function() {
								return t.apply(e, arguments)
							}
						}
						var i;
						if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !r.notNeeded(t)) {
							for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, u = o.length; c < u; c++) a[o[c]] = n(a[o[c]], a);
							s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
								var o = Node.prototype.removeEventListener;
								"click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
							}, t.addEventListener = function(e, n, i) {
								var o = Node.prototype.addEventListener;
								"click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
									t.propagationStopped || n(t)
								}), i) : o.call(t, e, n, i)
							}), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(t) {
								i(t)
							}, !1), t.onclick = null)
						}
					}
					var a = navigator.userAgent.indexOf("Windows Phone") >= 0,
						s = navigator.userAgent.indexOf("Android") > 0 && !a,
						c = /iP(ad|hone|od)/.test(navigator.userAgent) && !a,
						u = c && /OS 4_\d(_\d)?/.test(navigator.userAgent),
						l = c && /OS [6-7]_\d/.test(navigator.userAgent),
						f = navigator.userAgent.indexOf("BB10") > 0;
					r.prototype.needsClick = function(t) {
						switch (t.nodeName.toLowerCase()) {
							case "button":
							case "select":
							case "textarea":
								if (t.disabled) return !0;
								break;
							case "input":
								if (c && "file" === t.type || t.disabled) return !0;
								break;
							case "label":
							case "iframe":
							case "video":
								return !0
						}
						return /\bneedsclick\b/.test(t.className)
					}, r.prototype.needsFocus = function(t) {
						switch (t.nodeName.toLowerCase()) {
							case "textarea":
								return !0;
							case "select":
								return !s;
							case "input":
								switch (t.type) {
									case "button":
									case "checkbox":
									case "file":
									case "image":
									case "radio":
									case "submit":
										return !1
								}
								return !t.disabled && !t.readOnly;
							default:
								return /\bneedsfocus\b/.test(t.className)
						}
					}, r.prototype.sendClick = function(t, e) {
						var n, i;
						document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
					}, r.prototype.determineEventType = function(t) {
						return s && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
					}, r.prototype.focus = function(t) {
						var e;
						c && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
					}, r.prototype.updateScrollParent = function(t) {
						var e, n;
						if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
							n = t;
							do {
								if (n.scrollHeight > n.offsetHeight) {
									e = n, t.fastClickScrollParent = n;
									break
								}
								n = n.parentElement
							} while (n)
						}
						e && (e.fastClickLastScrollTop = e.scrollTop)
					}, r.prototype.getTargetElementFromEventTarget = function(t) {
						return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
					}, r.prototype.onTouchStart = function(t) {
						var e, n, i;
						if (t.targetTouches.length > 1) return !0;
						if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], c) {
							if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
							if (!u) {
								if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
								this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
							}
						}
						return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
					}, r.prototype.touchHasMoved = function(t) {
						var e = t.changedTouches[0],
							n = this.touchBoundary;
						return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
					}, r.prototype.onTouchMove = function(t) {
						return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
					}, r.prototype.findControl = function(t) {
						return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
					}, r.prototype.onTouchEnd = function(t) {
						var e, n, i, o, r, a = this.targetElement;
						if (!this.trackingClick) return !0;
						if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
						if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
						if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, l && (r = t.changedTouches[0], a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = a.tagName.toLowerCase(), "label" === i) {
							if (e = this.findControl(a)) {
								if (this.focus(a), s) return !1;
								a = e
							}
						} else if (this.needsFocus(a)) return t.timeStamp - n > 100 || c && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, t), c && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
						return !(!c || u || (o = a.fastClickScrollParent, !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(a) || (t.preventDefault(), this.sendClick(a, t)), !1)
					}, r.prototype.onTouchCancel = function() {
						this.trackingClick = !1, this.targetElement = null
					}, r.prototype.onMouse = function(t) {
						return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
					}, r.prototype.onClick = function(t) {
						var e;
						return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
					}, r.prototype.destroy = function() {
						var t = this.layer;
						s && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
					}, r.notNeeded = function(t) {
						var e, n, i, o;
						if ("undefined" == typeof window.ontouchstart) return !0;
						if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
							if (!s) return !0;
							if (e = document.querySelector("meta[name=viewport]")) {
								if (e.content.indexOf("user-scalable=no") !== -1) return !0;
								if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
							}
						}
						if (f && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
							if (e.content.indexOf("user-scalable=no") !== -1) return !0;
							if (document.documentElement.scrollWidth <= window.outerWidth) return !0
						}
						return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
					}, r.attach = function(t, e) {
						return new r(t, e)
					}, "object" === o(n(4)) && n(4) ? (i = function() {
						return r
					}.call(e, n, e, t), !(void 0 !== i && (t.exports = i))) : "undefined" != typeof t && t.exports ? (t.exports = r.attach, t.exports.FastClick = r) : window.FastClick = r
				}()
			}, function(t, e) {
				(function(e) {
					t.exports = e
				}).call(e, {})
			}, function(t, e, n) {
				function i(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = n(6),
					r = i(o),
					a = {};
				a.uuid = function() {
					function t(t, e) {
						var n = e || 0,
							o = i;
						return o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]]
					}
					for (var e = new Array(16), n = function() {
							for (var t, n = 0; n < 16; n++) 0 === (3 & n) && (t = 4294967296 * Math.random()), e[n] = t >>> ((3 & n) << 3) & 255;
							return e
						}, i = [], o = 0; o < 256; o++) i[o] = (o + 256).toString(16).substr(1);
					var r = n();
					return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t(r)
				}, a.getCookie = function(t) {
					var e, n = encodeURIComponent(t) + "=",
						i = document.cookie.indexOf(n),
						o = null;
					return i > -1 && (e = document.cookie.indexOf(";", i), e == -1 && (e = document.cookie.length), o = decodeURIComponent(document.cookie.substring(i + n.length, e))), o
				}, a.setCookie = function(t, e, n, i, o, r) {
					var a = encodeURIComponent(t) + "=" + encodeURIComponent(e);
					n instanceof Date && (a += "; expires=" + n.toUTCString()), i && (a += "; path=" + i), o && (a += "; domain=" + o), r && (a += "; secure"), document.cookie = a
				}, a.unsetCookie = function(t, e, n, i) {
					a.getCookie(t, "", new Date(0), e, n, i)
				}, a.imgLoad = function(t, e) {
					var n = new Image;
					n.src = t, n.complete ? e(n) : n.onload = function() {
						e(n), n.onload = null
					}
				}, a.isInView = function(t, e) {
					var n = $(t),
						i = !(!n.width() && !n.height()) && "none" !== n.css("display");
					if (!i) return !1;
					var o = $win.scrollLeft(),
						r = $win.scrollTop(),
						a = n.offset(),
						s = a.left,
						c = a.top;
					return e = $.extend({
						topOffset: 0,
						leftOffset: 0
					}, e), c + n.height() >= r && c - e.topOffset <= r + $win.height() && s + n.width() >= o && s - e.leftOffset <= o + $win.width()
				}, a.parseOptions = function(t) {
					if ($.isPlainObject(t)) return t;
					var e = t ? t.indexOf("{") : -1,
						n = {};
					if (e != -1) try {
						n = new Function("", "var json = " + t.substr(e) + "; return JSON.parse(JSON.stringify(json));")()
					} catch (i) {}
					return n
				}, a.rAF = function() {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
						return window.setTimeout(t, 1e3 / 60)
					}
				}(), a.cancelAF = function() {
					return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(t) {
						window.clearTimeout(t)
					}
				}(), a.queryStringParse = r["default"].parse, a.queryStringify = r["default"].stringify, a.getIsAppInstalled = function() {
					var t = this.queryStringParse(location.search);
					return !(1 != t.isappinstalled)
				}, a.isEmpty = function(t) {
					for (var e in t)
						if (t.hasOwnProperty(e)) return !1;
					return !0
				}, e["default"] = a
			}, function(t, e, n) {
				function i(t, e) {
					return e.encode ? e.strict ? o(t) : encodeURIComponent(t) : t
				}
				var o = n(7),
					r = n(8);
				e.extract = function(t) {
					return t.split("?")[1] || ""
				}, e.parse = function(t) {
					var e = Object.create(null);
					return "string" != typeof t ? e : (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
						var n = t.replace(/\+/g, " ").split("="),
							i = n.shift(),
							o = n.length > 0 ? n.join("=") : void 0;
						i = decodeURIComponent(i), o = void 0 === o ? null : decodeURIComponent(o), void 0 === e[i] ? e[i] = o : Array.isArray(e[i]) ? e[i].push(o) : e[i] = [e[i], o]
					}), e) : e
				}, e.stringify = function(t, e) {
					var n = {
						encode: !0,
						strict: !0
					};
					return e = r(n, e), t ? Object.keys(t).sort().map(function(n) {
						var o = t[n];
						if (void 0 === o) return "";
						if (null === o) return i(n, e);
						if (Array.isArray(o)) {
							var r = [];
							return o.slice().forEach(function(t) {
								void 0 !== t && (null === t ? r.push(i(n, e)) : r.push(i(n, e) + "=" + i(t, e)))
							}), r.join("&")
						}
						return i(n, e) + "=" + i(o, e)
					}).filter(function(t) {
						return t.length > 0
					}).join("&") : ""
				}
			}, function(t, e) {
				t.exports = function(t) {
					return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
						return "%" + t.charCodeAt(0).toString(16).toUpperCase()
					})
				}
			}, function(t, e) {
				function n(t) {
					if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(t)
				}

				function i() {
					try {
						if (!Object.assign) return !1;
						var t = new String("abc");
						if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
						for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
						var i = Object.getOwnPropertyNames(e).map(function(t) {
							return e[t]
						});
						if ("0123456789" !== i.join("")) return !1;
						var o = {};
						return "abcdefghijklmnopqrst".split("").forEach(function(t) {
							o[t] = t
						}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
					} catch (r) {
						return !1
					}
				}
				var o = Object.prototype.hasOwnProperty,
					r = Object.prototype.propertyIsEnumerable;
				t.exports = i() ? Object.assign : function(t, e) {
					for (var i, a, s = n(t), c = 1; c < arguments.length; c++) {
						i = Object(arguments[c]);
						for (var u in i) o.call(i, u) && (s[u] = i[u]);
						if (Object.getOwnPropertySymbols) {
							a = Object.getOwnPropertySymbols(i);
							for (var l = 0; l < a.length; l++) r.call(i, a[l]) && (s[a[l]] = i[a[l]])
						}
					}
					return s
				}
			}, function(t, e, n) {
				function i(t) {
					return t && t.__esModule ? t : {
						"default": t
					}
				}
				var o = n(1),
					r = i(o),
					a = n(10),
					s = i(a);
				(0, r["default"])(function() {
					function t() {
						return /MicroMessenger/i.test(window.navigator.userAgent)
					}
					var e = (0, r["default"])("html");
					e.addClass("native"), window.ENV = "native", r["default"].os.android && e.addClass("android"), r["default"].os.ios && e.addClass("ios"), t() && e.addClass("wechat"), s["default"].hasNativeSupport === !1 && (n(11), e.removeClass("native"), e.addClass("browser"), window.ENV = "browser"), s["default"].onDeviceReady(function() {
						if (jsKitStorage.getItem("settings_nightMode") && (window.nightMode = !0, e.addClass("ui-night")), jsKitStorage.getItem("settings_imageMode")) {
							if (r["default"].os.ios && "wifi" == commonApi.getNetworkInfo().type) return;
							window.noPicMode = !0, e.addClass("ui-nopic")
						}
						var t = jsKitStorage.getItem("settings_fontSize");
						1 === t ? e.addClass("ui-font-md") : 2 === t && e.addClass("ui-font-lg")
					})
				})
			}, function(t, n) {
				t.exports = e
			}, function(t, e, n) {
				var i = n(1),
					o = {};
				o.onDeviceReady = i;
				var r = {};
				r.getNetworkInfo = function(t) {
					var e = {
						type: ""
					};
					return t && t(e), e
				}, r.getRequestParam = function() {
					return {
						platform: ""
					}
				}, r.getAppInfo = function() {
					return {
						platform: ""
					}
				};
				var a = {};
				a.toast = function(t, e) {};
				var s = {};
				s.getItem = function(t) {
					return localStorage.getItem(t)
				}, s.setItem = function(t, e) {
					return localStorage.setItem(t, e)
				};
				var c = {};
				c.showLoadingView = function() {}, c.showTitle = function() {}, c.showShareBtn = function() {},
					function() {
						function t() {
							return /MicroMessenger/i.test(window.navigator.userAgent)
						}
						t() && i("html").addClass("wechat")
					}(),
					function() {
						function t() {
							return /SohuNews/i.test(window.navigator.userAgent)
						}
						t() && (window.platform = "iOS")
					}(), window.jsKitClient = o, window.commonApi = r, window.widgetApi = a, window.jsKitStorage = s, window.newsApi = c
			}])
		})
	}).call(e, n(17)(t))
}, function(module, exports) {
	"use strict";
	var jsKitClient = function() {
		var client = {};
		client.isReady = !1;
		var a = / JsKit\/([\.\d]*) \((\w*)\)/,
			result = a.exec(navigator.userAgent);
		result ? (client.hasNativeSupport = !0, client.version = result[1], client.platform = result[2]) : (client.hasNativeSupport = !1, client.version = "0", client.platform = "browser");
		var _jsKitN;
		if ("iOS" == client.platform) {
			var clientIdRegex = /jsKitClientId=(\d*)/,
				clientId = clientIdRegex.exec(window.location)[1];
			_jsKitN = {}, _jsKitN.callCount = (new Date).getTime(), _jsKitN.callNative = function(t, e, n) {
				var i = new XMLHttpRequest;
				return _jsKitN.callCount++, i.open("POST", "/" + clientId + "/" + t + "/" + e + "/call.jskitbridge?callCount=" + _jsKitN.callCount, !1), i.send(n), i.response
			}, _jsKitN.getInitScript = function() {
				return JSON.parse(this.callNative("_jsKitN", "getInitScript", "[]"))[0]
			}, window._jsKitN = _jsKitN
		}
		_jsKitN = window._jsKitN, "undefined" == typeof _jsKitN && (_jsKitN = {}, _jsKitN.getInitScript = function() {
			return ""
		}, window._jsKitN = _jsKitN);
		var jsKit = {};
		return window.jsKit = jsKit, jsKit.create = function(t) {
			var e = function() {};
			return e.prototype = t, new e
		}, jsKit.createCallNativeFun = function(method, resultObject) {
			return function(resultCallBack) {
				for (var args = [], hasCallback = "function" == typeof resultCallBack, i = hasCallback ? 1 : 0, c = arguments.length; i < c; i++) args.push(arguments[i]);
				var result = _jsKitN.callNative(this._jsKitName, method, JSON.stringify(args));
				return result = resultObject ? eval(result) : JSON.parse(result)[0], hasCallback ? void resultCallBack(result) : result
			}
		}, client._callbacks = {}, client._callbacksCount = 0, client._createFunctionId = function(t) {
			var e = "_jsKitFunCallback_" + ++this._callbacksCount;
			return this._callbacks[e] = t, e
		}, jsKit.createCallNativeFunWithCallback = function(method, resultObject) {
			return function() {
				for (var args = [], i = 0, c = arguments.length; i < c; i++) {
					var arg = arguments[i];
					"function" == typeof arg ? args.push(client._createFunctionId(arg)) : args.push(arg)
				}
				var result = _jsKitN.callNative(this._jsKitName, method, JSON.stringify(args));
				return result = resultObject ? eval(result) : JSON.parse(result)[0]
			}
		}, jsKit.createInstance = function(t, e) {
			var n = jsKit.create(e);
			return n._jsKitName = t, n
		}, jsKit.newInstance = function(t, e) {
			window[t] = jsKit.createInstance(t, e)
		}, jsKit.addMethod = function(t, e, n) {
			t[e] = jsKit.createCallNativeFun(e, n)
		}, jsKit.addMethodWithCallback = function(t, e, n) {
			t[e] = jsKit.createCallNativeFunWithCallback(e, n)
		}, jsKit.init = function() {
			eval(_jsKitN.getInitScript(window.location.pathname))
		}, client.pageCached = 0 != document.getElementsByName("jskit_page_cached").length, client.cachePage = function() {
			if (!this.pageCached) {
				var t = document.createElement("meta");
				t.name = "jskit_page_cached", t.content = "true", document.getElementsByTagName("head")[0].appendChild(t), this.pageCached = !0
			}
			jsKitStorage.setItem("jskit_page_cache_" + location.href, document.getElementsByTagName("html")[0].innerHTML)
		}, client.enableAjaxCrossDomain = function() {
			this.hasNativeSupport && (XMLHttpRequest.prototype.old_open = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function(t, e, n, i, o) {
				this.old_open(t, "/jskitbridge/cross_domain?url=" + encodeURIComponent(e), n, i, o)
			})
		}, client.setDeviceReady = function() {
			this.isReady = !0, this.readyListener && this.readyListener(this.pageCached)
		}, client.init = function() {
			if (!this.isReady) {
				jsKit.init();
				var t = document.createEvent("HTMLEvents");
				t.initEvent("jsKitReady", !1, !1), window.dispatchEvent(t), this.setDeviceReady()
			}
			this.setDeviceReady()
		}, client.onDeviceReady = function(t) {
			this.readyListener = t, this.init()
		}, client._notificationListeneres = {}, client.addNotificationListener = function(t, e) {
			this._notificationListeneres[t] = e
		}, client._dispatchNotificationFromNative = function(t, e) {
			this._notificationListeneres.hasOwnProperty(t) && this._notificationListeneres[t](t, e)
		}, client.dispatchNotification = function(t, e) {
			_jsKitNotification.dispatchNotification(t, e)
		}, client.setAttr = function(t, e, n) {
			for (var i = document.getElementsByTagName(t), o = 0, r = i.length; o < r; o++) i[o][e] = n
		}, client.setImageShowMode = function(t) {
			for (var e = document.getElementsByTagName("img"), n = /jsKitImageMode=([^\?&])/, i = 0, o = e.length; i < o; i++) {
				var r = e[i];
				if (r.hasOwnProperty("data") || (r.data = {}), r.data.hasOwnProperty("originSrc") || (r.data.originSrc = r.src), t) {
					var a = r.data.originSrc;
					n.exec(a) ? a = a.replace(n, "jsKitImageMode=" + t) : a += (a.indexOf("?") == -1 ? "?" : "&") + "jsKitImageMode=" + t, r.src = a
				} else r.src = ""
			}
		}, client.addNotificationListener("com.sohu.jskit.action.setImageMode", function(t, e) {
			client.setImageShowMode(e)
		}), client.init(), client
	}();
	window.jsBridgeClient = window.jsKitClient = jsKitClient, module.exports = jsKitClient
}, , , , , , , function(t, e) {
	"use strict";

	function n(t) {
		function e() {
			function t(e, n) {
				function o(e, n, o) {
					var r = [];
					return e = void 0 === o ? e : o + "[" + e + "]", "object" === ("undefined" == typeof n ? "undefined" : i(n)) && null !== n ? r = r.concat(t(n, e)) : (e = encodeURIComponent(e), n = encodeURIComponent(n), r.push(e + "=" + n)), r
				}
				var r, a = [];
				if ("[object Array]" == Object.prototype.toString.call(e))
					for (var s = 0, c = e.length; s < c; s++) r = e[s], a = a.concat(o("object" == ("undefined" == typeof r ? "undefined" : i(r)) ? s : "", r, n));
				else if ("[object Object]" == Object.prototype.toString.call(e))
					for (var u in e) r = e[u], a = a.concat(o(u, r, n));
				return a
			}

			function e(t) {
				for (var e = t.split("&"), n = 0, i = e.length; n < i; n++) name = encodeURIComponent(e[n].split("=")[0]), value = encodeURIComponent(e[n].split("=")[1]), e[n] = name + "=" + value;
				return e
			}
			c && ("string" == typeof c ? c = e(c) : "object" === ("undefined" == typeof c ? "undefined" : i(c)) && (c = t(c)), c = c.join("&").replace("/%20/g", "+"), "get" !== s && "jsonp" !== l || (a += a.indexOf("?") > -1 ? a.indexOf("=") > -1 ? "&" + c : c : "?" + c))
		}

		function n() {
			var t = document.createElement("script"),
				e = (new Date).getTime() + Math.round(1e3 * Math.random()),
				n = "JSONP_" + e;
			window[n] = function(e) {
				clearTimeout(v), document.body.removeChild(t), m(e)
			}, t.src = a + (a.indexOf("?") > -1 ? "&" : "?") + "callback=" + n, t.type = "text/javascript", document.body.appendChild(t), o(n, t)
		}

		function o(t, e) {
			void 0 !== d && (v = setTimeout(function() {
				"jsonp" === l ? (delete window[t], document.body.removeChild(e)) : (g = !0, y && y.abort()), console.log("timeout")
			}, d))
		}

		function r() {
			function t() {
				if (window.XMLHttpRequest) return new XMLHttpRequest;
				for (var t = ["Microsoft", "msxm3", "msxml2", "msxml1"], e = 0; e < t.length; e++) try {
					var n = t[e] + ".XMLHTTP";
					return new ActiveXObject(n)
				} catch (i) {}
			}
			y = t(), y.open(s, a, f), "post" !== s || u ? u && y.setRequestHeader("Content-Type", u) : y.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), y.onreadystatechange = function() {
				if (4 === y.readyState) {
					if (void 0 !== d) {
						if (g) return;
						clearTimeout(v)
					}
					y.status >= 200 && y.status < 300 || 304 == y.status ? m(y.responseText) : p(y.status, y.statusText)
				}
			}, y.send("get" === s ? null : c), o()
		}
		var a = t.url || "",
			s = (t.type || "get").toLowerCase(),
			c = t.data || null,
			u = t.contentType || "",
			l = t.dataType || "",
			f = void 0 === t.async || t.async,
			d = t.timeOut,
			h = t.before || function() {},
			p = t.error || function() {},
			m = t.success || function() {},
			g = !1,
			v = null,
			y = null;
		e(), h(), "jsonp" === l ? n() : r()
	}
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	t.exports = n
}, function(t, e, n) {
	"use strict";

	function i(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o() {}

	function r(t) {
		var e = c.getCookie("h5-cid");
		if (!c.isEmpty(t)) {
			e || (e = c.uuid(), c.setCookie("h5-cid", e));
			var n = (new o).getBrowser(),
				i = (new o).getOS(),
				r = void 0;
			"ios" == i ? r = "ips" : "android" == i && (r = "a");
			var a = {
				c: e,
				statType: "clk",
				objReferSite: n,
				p: r
			};
			(0, s["default"])({
				url: "//pic.k.sohu.com/img8/wb/tj/h5.gif",
				data: c.extend(a, t)
			})
		}
	}
	var a = n(15),
		s = i(a),
		c = {};
	c.uuid = function() {
		function t(t, e) {
			var n = e || 0,
				o = i;
			return o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]]
		}
		for (var e = new Array(16), n = function() {
				for (var t, n = 0; n < 16; n++) 0 === (3 & n) && (t = 4294967296 * Math.random()), e[n] = t >>> ((3 & n) << 3) & 255;
				return e
			}, i = [], o = 0; o < 256; o++) i[o] = (o + 256).toString(16).substr(1);
		var r = n();
		return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t(r)
	}, c.getCookie = function(t) {
		var e, n = encodeURIComponent(t) + "=",
			i = document.cookie.indexOf(n),
			o = null;
		return i > -1 && (e = document.cookie.indexOf(";", i), e == -1 && (e = document.cookie.length), o = decodeURIComponent(document.cookie.substring(i + n.length, e))), o
	}, c.setCookie = function(t, e, n, i, o, r) {
		var a = encodeURIComponent(t) + "=" + encodeURIComponent(e);
		n instanceof Date && (a += "; expires=" + n.toUTCString()), i && (a += "; path=" + i), o && (a += "; domain=" + o), r && (a += "; secure"), document.cookie = a
	}, c.unsetCookie = function(t, e, n, i) {
		c.getCookie(t, "", new Date(0), e, n, i)
	}, o.prototype.maps = {
		os: [{
			name: "ios",
			reg: /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i
		}, {
			name: "android",
			reg: /Android/i
		}],
		browsers: [{
			name: "sohunews",
			reg: /SohuNews/i
		}, {
			name: "weixin",
			reg: /MicroMessenger/i
		}, {
			name: "weibo",
			reg: /weibo/i
		}, {
			name: "Qzone",
			reg: /Qzone/i
		}, {
			name: "QQ",
			reg: /(\sQQ)|(Mobile MQQBrowser)/i
		}, {
			name: "qqbrowser",
			reg: /MQQBrowser/i
		}, {
			name: "UC",
			reg: /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i
		}, {
			name: "chrome",
			reg: /(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/
		}, {
			name: "XiaoMi",
			reg: /XiaoMi\/MiuiBrowser\/([\w\.]+)/i
		}, {
			name: "sogou",
			reg: /SogouMobileBrowser/i
		}, {
			name: "baidu",
			reg: /FlyFlow/i
		}, {
			name: "hao123",
			reg: /hao123/i
		}, {
			name: "baidubox",
			reg: /baiduboxapp/i
		}, {
			name: "opera",
			reg: /Opera/i
		}, {
			name: "alipay",
			reg: /Alipay/i
		}, {
			name: "safari",
			reg: /(ipad|iphone).* applewebkit\/.* mobile/i
		}]
	}, o.prototype.rgx = function(t) {
		for (var e = navigator.userAgent, n = !1, i = 0; i < t.length;) {
			if (t[i].reg.test(e)) return n = !0, t[i].name;
			i++
		}
		if (!n) return "other"
	}, o.prototype.getOS = function() {
		return this.rgx(this.maps.os)
	}, o.prototype.getBrowser = function() {
		return this.rgx(this.maps.browsers)
	}, o.prototype.getResult = function() {
		var t = this;
		return {
			os: t.getOS(),
			browser: t.getBrowser()
		}
	}, c.isEmpty = function(t) {
		for (var e in t)
			if (t.hasOwnProperty(e)) return !1;
		return !0
	}, c.extend = function(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}, t.exports = r
}, function(t, e) {
	"use strict";
	t.exports = function(t) {
		return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
	}
}, function(t, e) {
	"use strict";
	! function(t) {
		var e, n = [];
		t.fn.remove = function() {
			return this.each(function() {
				this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() {
					n = []
				}, 6e4)), this.parentNode.removeChild(this))
			})
		}
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		t.Callbacks = function(e) {
			e = t.extend({}, e);
			var n, i, o, r, a, s, c = [],
				u = !e.once && [],
				l = function d(t) {
					for (n = e.memory && t, i = !0, s = r || 0, r = 0, a = c.length, o = !0; c && s < a; ++s)
						if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
							n = !1;
							break
						}
					o = !1, c && (u ? u.length && d(u.shift()) : n ? c.length = 0 : f.disable())
				},
				f = {
					add: function h() {
						if (c) {
							var i = c.length,
								h = function s(n) {
									t.each(n, function(t, n) {
										"function" == typeof n ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" != typeof n && s(n)
									})
								};
							h(arguments), o ? a = c.length : n && (r = i, l(n))
						}
						return this
					},
					remove: function() {
						return c && t.each(arguments, function(e, n) {
							for (var i;
								(i = t.inArray(n, c, i)) > -1;) c.splice(i, 1), o && (i <= a && --a, i <= s && --s)
						}), this
					},
					has: function(e) {
						return !(!c || !(e ? t.inArray(e, c) > -1 : c.length))
					},
					empty: function() {
						return a = c.length = 0, this
					},
					disable: function() {
						return c = u = n = void 0, this
					},
					disabled: function() {
						return !c
					},
					lock: function() {
						return u = void 0, n || f.disable(), this
					},
					locked: function() {
						return !u
					},
					fireWith: function(t, e) {
						return !c || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], o ? u.push(e) : l(e)), this
					},
					fire: function() {
						return f.fireWith(this, arguments)
					},
					fired: function() {
						return !!i
					}
				};
			return f
		}
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		function e(e, i) {
			var c = e[s],
				u = c && o[c];
			if (void 0 === i) return u || n(e);
			if (u) {
				if (i in u) return u[i];
				var l = a(i);
				if (l in u) return u[l]
			}
			return r.call(t(e), i)
		}

		function n(e, n, r) {
			var c = e[s] || (e[s] = ++t.uuid),
				u = o[c] || (o[c] = i(e));
			return void 0 !== n && (u[a(n)] = r), u
		}

		function i(e) {
			var n = {};
			return t.each(e.attributes || c, function(e, i) {
				0 == i.name.indexOf("data-") && (n[a(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
			}), n
		}
		var o = {},
			r = t.fn.data,
			a = t.camelCase,
			s = t.expando = "Zepto" + +new Date,
			c = [];
		t.fn.data = function(i, o) {
			return void 0 === o ? t.isPlainObject(i) ? this.each(function(e, o) {
				t.each(i, function(t, e) {
					n(o, t, e)
				})
			}) : 0 in this ? e(this[0], i) : void 0 : this.each(function() {
				n(this, i, o)
			})
		}, t.fn.removeData = function(e) {
			return "string" == typeof e && (e = e.split(/\s+/)), this.each(function() {
				var n = this[s],
					i = n && o[n];
				i && t.each(e || i, function(t) {
					delete i[e ? a(this) : t]
				})
			})
		}, ["remove", "empty"].forEach(function(e) {
			var n = t.fn[e];
			t.fn[e] = function() {
				var t = this.find("*");
				return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
			}
		})
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		function e(n) {
			var i = [
					["resolve", "done", t.Callbacks({
						once: 1,
						memory: 1
					}), "resolved"],
					["reject", "fail", t.Callbacks({
						once: 1,
						memory: 1
					}), "rejected"],
					["notify", "progress", t.Callbacks({
						memory: 1
					})]
				],
				o = "pending",
				r = {
					state: function() {
						return o
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					then: function() {
						var n = arguments;
						return e(function(e) {
							t.each(i, function(i, o) {
								var s = t.isFunction(n[i]) && n[i];
								a[o[1]](function() {
									var n = s && s.apply(this, arguments);
									if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
									else {
										var i = this === r ? e.promise() : this,
											a = s ? [n] : arguments;
										e[o[0] + "With"](i, a)
									}
								})
							}), n = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? t.extend(e, r) : r
					}
				},
				a = {};
			return t.each(i, function(t, e) {
				var n = e[2],
					s = e[3];
				r[e[1]] = n.add, s && n.add(function() {
					o = s
				}, i[1 ^ t][2].disable, i[2][2].lock), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? r : this, arguments), this
				}, a[e[0] + "With"] = n.fireWith
			}), r.promise(a), n && n.call(a, a), a
		}
		var n = Array.prototype.slice;
		t.when = function(i) {
			var o, r, a, s = n.call(arguments),
				c = s.length,
				u = 0,
				l = 1 !== c || i && t.isFunction(i.promise) ? c : 0,
				f = 1 === l ? i : e(),
				d = function(t, e, i) {
					return function(r) {
						e[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : r, i === o ? f.notifyWith(e, i) : --l || f.resolveWith(e, i)
					}
				};
			if (c > 1)
				for (o = new Array(c), r = new Array(c), a = new Array(c); u < c; ++u) s[u] && t.isFunction(s[u].promise) ? s[u].promise().done(d(u, a, s)).fail(f.reject).progress(d(u, r, o)) : --l;
			return l || f.resolveWith(a, s), f.promise()
		}, t.Deferred = e
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		function e(t, e) {
			var n = this.os = {},
				i = this.browser = {},
				o = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				a = !!t.match(/\(Macintosh\; Intel /),
				s = t.match(/(iPad).*OS\s([\d_]+)/),
				c = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				u = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
				l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				f = /Win\d{2}|Windows/.test(e),
				d = t.match(/Windows Phone ([\d.]+)/),
				h = l && t.match(/TouchPad/),
				p = t.match(/Kindle\/([\d.]+)/),
				m = t.match(/Silk\/([\d._]+)/),
				g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				v = t.match(/(BB10).*Version\/([\d.]+)/),
				y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				w = t.match(/PlayBook/),
				b = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				S = t.match(/Firefox\/([\d.]+)/),
				C = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
				x = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
				k = !b && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
				j = k || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
			(i.webkit = !!o) && (i.version = o[1]), r && (n.android = !0, n.version = r[2]), u && !c && (n.ios = n.iphone = !0, n.version = u[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), c && (n.ios = n.ipod = !0, n.version = c[3] ? c[3].replace(/_/g, ".") : null), d && (n.wp = !0, n.version = d[1]), l && (n.webos = !0, n.version = l[2]), h && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), w && (i.playbook = !0), p && (n.kindle = !0, n.version = p[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), b && (i.chrome = !0, i.version = b[1]), S && (i.firefox = !0, i.version = S[1]), C && (n.firefoxos = !0, n.version = C[1]), x && (i.ie = !0, i.version = x[1]), j && (a || n.ios || f) && (i.safari = !0, n.ios || (i.version = j[1])), k && (i.webview = !0), n.tablet = !!(s || w || r && !t.match(/Mobile/) || S && t.match(/Tablet/) || x && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(r || u || l || g || v || b && t.match(/Android/) || b && t.match(/CriOS\/([\d.]+)/) || S && t.match(/Mobile/) || x && t.match(/Touch/)))
		}
		e.call(t, navigator.userAgent, navigator.platform),
			t.__detect = e
	}(Zepto)
}, function(t, e) {
	"use strict";
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	! function(t, e) {
		function i(t) {
			return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
		}

		function o(t) {
			return r ? r + t : t.toLowerCase()
		}
		var r, a, s, c, u, l, f, d, h, p, m = "",
			g = {
				Webkit: "webkit",
				Moz: "",
				O: "o"
			},
			v = document.createElement("div"),
			y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
			w = {};
		t.each(g, function(t, n) {
			if (v.style[t + "TransitionProperty"] !== e) return m = "-" + t.toLowerCase() + "-", r = n, !1
		}), a = m + "transform", w[s = m + "transition-property"] = w[c = m + "transition-duration"] = w[l = m + "transition-delay"] = w[u = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[d = m + "animation-duration"] = w[p = m + "animation-delay"] = w[h = m + "animation-timing-function"] = "", t.fx = {
			off: r === e && v.style.transitionProperty === e,
			speeds: {
				_default: 400,
				fast: 200,
				slow: 600
			},
			cssPrefix: m,
			transitionEnd: o("TransitionEnd"),
			animationEnd: o("AnimationEnd")
		}, t.fn.animate = function(n, i, o, r, a) {
			return t.isFunction(i) && (r = i, o = e, i = e), t.isFunction(o) && (r = o, o = e), t.isPlainObject(i) && (o = i.easing, r = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, o, r, a)
		}, t.fn.anim = function(o, r, m, g, v) {
			var b, S, C, x = {},
				k = "",
				j = this,
				T = t.fx.transitionEnd,
				E = !1;
			if (r === e && (r = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (r = 0), "string" == typeof o) x[f] = o, x[d] = r + "s", x[p] = v + "s", x[h] = m || "linear", T = t.fx.animationEnd;
			else {
				S = [];
				for (b in o) y.test(b) ? k += b + "(" + o[b] + ") " : (x[b] = o[b], S.push(i(b)));
				k && (x[a] = k, S.push(a)), r > 0 && "object" === ("undefined" == typeof o ? "undefined" : n(o)) && (x[s] = S.join(", "), x[c] = r + "s", x[l] = v + "s", x[u] = m || "linear")
			}
			return C = function(e) {
				if ("undefined" != typeof e) {
					if (e.target !== e.currentTarget) return;
					t(e.target).unbind(T, C)
				} else t(this).unbind(T, C);
				E = !0, t(this).css(w), g && g.call(this)
			}, r > 0 && (this.bind(T, C), setTimeout(function() {
				E || C.call(j)
			}, 1e3 * (r + v) + 25)), this.size() && this.get(0).clientLeft, this.css(x), r <= 0 && setTimeout(function() {
				j.each(function() {
					C.call(this)
				})
			}, 0), this
		}, v = null
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t, e) {
		function n(n, i, o, r, a) {
			"function" != typeof i || a || (a = i, i = e);
			var s = {
				opacity: o
			};
			return r && (s.scale = r, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
		}

		function i(e, i, o, r) {
			return n(e, i, 0, o, function() {
				a.call(t(this)), r && r.call(this)
			})
		}
		var o = window.document,
			r = (o.documentElement, t.fn.show),
			a = t.fn.hide,
			s = t.fn.toggle;
		t.fn.show = function(t, i) {
			return r.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
		}, t.fn.hide = function(t, n) {
			return t === e ? a.call(this) : i(this, t, "0,0", n)
		}, t.fn.toggle = function(n, i) {
			return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
				var e = t(this);
				e["none" == e.css("display") ? "show" : "hide"](n, i)
			})
		}, t.fn.fadeTo = function(t, e, i) {
			return n(this, t, e, null, i)
		}, t.fn.fadeIn = function(t, e) {
			var n = this.css("opacity");
			return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
		}, t.fn.fadeOut = function(t, e) {
			return i(this, t, null, e)
		}, t.fn.fadeToggle = function(e, n) {
			return this.each(function() {
				var i = t(this);
				i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
			})
		}
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		function e(e) {
			return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
		}

		function n(t, e) {
			t = t.replace(/=#\]/g, '="#"]');
			var n, i, o = s.exec(t);
			if (o && o[2] in a && (n = a[o[2]], i = o[3], t = o[1], i)) {
				var r = Number(i);
				i = isNaN(r) ? i.replace(/^["']|["']$/g, "") : r
			}
			return e(t, n, i)
		}
		var i = t.zepto,
			o = i.qsa,
			r = i.matches,
			a = t.expr[":"] = {
				visible: function() {
					if (e(this)) return this
				},
				hidden: function() {
					if (!e(this)) return this
				},
				selected: function() {
					if (this.selected) return this
				},
				checked: function() {
					if (this.checked) return this
				},
				parent: function() {
					return this.parentNode
				},
				first: function(t) {
					if (0 === t) return this
				},
				last: function(t, e) {
					if (t === e.length - 1) return this
				},
				eq: function(t, e, n) {
					if (t === n) return this
				},
				contains: function(e, n, i) {
					if (t(this).text().indexOf(i) > -1) return this
				},
				has: function(t, e, n) {
					if (i.qsa(this, n).length) return this
				}
			},
			s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
			c = /^\s*>/,
			u = "Zepto" + +new Date;
		i.qsa = function(e, r) {
			return n(r, function(n, a, s) {
				try {
					var l;
					!n && a ? n = "*" : c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
					var f = o(e, n)
				} catch (d) {
					throw console.error("error performing selector: %o", r), d
				} finally {
					l && l.removeClass(u)
				}
				return a ? i.uniq(t.map(f, function(t, e) {
					return a.call(t, e, f, s)
				})) : f
			})
		}, i.matches = function(t, e) {
			return n(e, function(e, n, i) {
				return (!e || r(t, e)) && (!n || n.call(t, null, i) === t)
			})
		}
	}(Zepto)
}, function(t, e) {
	"use strict";
	! function(t) {
		function e(t, e, n, i) {
			return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
		}

		function n() {
			l = null, d.last && (d.el.trigger("longTap"), d = {})
		}

		function i() {
			l && clearTimeout(l), l = null
		}

		function o() {
			s && clearTimeout(s), c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), s = c = u = l = null, d = {}
		}

		function r(t) {
			return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
		}

		function a(t, e) {
			return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
		}
		var s, c, u, l, f, d = {},
			h = 750;
		t(document).ready(function() {
			var p, m, g, v, y = 0,
				w = 0;
			"MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
				var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
				e && (d.el.trigger("swipe"), d.el.trigger("swipe" + e))
			}).on("touchstart MSPointerDown pointerdown", function(e) {
				(v = a(e, "down")) && !r(e) || (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && d.x2 && (d.x2 = void 0, d.y2 = void 0), p = Date.now(), m = p - (d.last || p), d.el = t("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), d.x1 = g.pageX, d.y1 = g.pageY, m > 0 && m <= 250 && (d.isDoubleTap = !0), d.last = p, l = setTimeout(n, h), f && v && f.addPointer(e.pointerId))
			}).on("touchmove MSPointerMove pointermove", function(t) {
				(v = a(t, "move")) && !r(t) || (g = v ? t : t.touches[0], i(), d.x2 = g.pageX, d.y2 = g.pageY, y += Math.abs(d.x1 - d.x2), w += Math.abs(d.y1 - d.y2))
			}).on("touchend MSPointerUp pointerup", function(n) {
				(v = a(n, "up")) && !r(n) || (i(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? u = setTimeout(function() {
					d.el.trigger("swipe"), d.el.trigger("swipe" + e(d.x1, d.x2, d.y1, d.y2)), d = {}
				}, 0) : "last" in d && (y < 30 && w < 30 ? c = setTimeout(function() {
					var e = t.Event("tap");
					e.cancelTouch = o, d.el.trigger(e), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : s = setTimeout(function() {
						s = null, d.el && d.el.trigger("singleTap"), d = {}
					}, 250)
				}, 0) : d = {}), y = w = 0)
			}).on("touchcancel MSPointerCancel pointercancel", o), t(window).on("scroll", o)
		}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
			t.fn[e] = function(t) {
				return this.on(e, t)
			}
		})
	}(Zepto)
}, function(t, e) {
	"use strict";
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		i = function() {
			function t(t) {
				return null == t ? String(t) : H[z.call(t)] || "object"
			}

			function e(e) {
				return "function" == t(e)
			}

			function i(t) {
				return null != t && t == t.window
			}

			function o(t) {
				return null != t && t.nodeType == t.DOCUMENT_NODE
			}

			function r(e) {
				return "object" == t(e)
			}

			function a(t) {
				return r(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
			}

			function s(t) {
				return "number" == typeof t.length
			}

			function c(t) {
				return N.call(t, function(t) {
					return null != t
				})
			}

			function u(t) {
				return t.length > 0 ? k.fn.concat.apply([], t) : t
			}

			function l(t) {
				return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}

			function f(t) {
				return t in P ? P[t] : P[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
			}

			function d(t, e) {
				return "number" != typeof e || I[l(t)] ? e : e + "px"
			}

			function h(t) {
				var e, n;
				return _[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), _[t] = n), _[t]
			}

			function p(t) {
				return "children" in t ? M.call(t.children) : k.map(t.childNodes, function(t) {
					if (1 == t.nodeType) return t
				})
			}

			function m(t, e, n) {
				for (x in e) n && (a(e[x]) || Y(e[x])) ? (a(e[x]) && !a(t[x]) && (t[x] = {}), Y(e[x]) && !Y(t[x]) && (t[x] = []), m(t[x], e[x], n)) : e[x] !== C && (t[x] = e[x])
			}

			function g(t, e) {
				return null == e ? k(t) : k(t).filter(e)
			}

			function v(t, n, i, o) {
				return e(n) ? n.call(t, i, o) : n
			}

			function y(t, e, n) {
				null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
			}

			function w(t, e) {
				var n = t.className || "",
					i = n && n.baseVal !== C;
				return e === C ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
			}

			function b(t) {
				try {
					return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t
				} catch (e) {
					return t
				}
			}

			function S(t, e) {
				e(t);
				for (var n = 0, i = t.childNodes.length; n < i; n++) S(t.childNodes[n], e)
			}
			var C, x, k, j, T, E, O = [],
				M = O.slice,
				N = O.filter,
				A = window.document,
				_ = {},
				P = {},
				I = {
					"column-count": 1,
					columns: 1,
					"font-weight": 1,
					"line-height": 1,
					opacity: 1,
					"z-index": 1,
					zoom: 1
				},
				L = /^\s*<(\w+|!)[^>]*>/,
				R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
				D = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				U = /^(?:body|html)$/i,
				W = /([A-Z])/g,
				F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
				K = ["after", "prepend", "before", "append"],
				B = A.createElement("table"),
				Q = A.createElement("tr"),
				q = {
					tr: A.createElement("tbody"),
					tbody: B,
					thead: B,
					tfoot: B,
					td: Q,
					th: Q,
					"*": A.createElement("div")
				},
				X = /complete|loaded|interactive/,
				$ = /^[\w-]*$/,
				H = {},
				z = H.toString,
				Z = {},
				V = A.createElement("div"),
				J = {
					tabindex: "tabIndex",
					readonly: "readOnly",
					"for": "htmlFor",
					"class": "className",
					maxlength: "maxLength",
					cellspacing: "cellSpacing",
					cellpadding: "cellPadding",
					rowspan: "rowSpan",
					colspan: "colSpan",
					usemap: "useMap",
					frameborder: "frameBorder",
					contenteditable: "contentEditable"
				},
				Y = Array.isArray || function(t) {
					return t instanceof Array
				};
			return Z.matches = function(t, e) {
				if (!e || !t || 1 !== t.nodeType) return !1;
				var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
				if (n) return n.call(t, e);
				var i, o = t.parentNode,
					r = !o;
				return r && (o = V).appendChild(t), i = ~Z.qsa(o, e).indexOf(t), r && V.removeChild(t), i
			}, T = function(t) {
				return t.replace(/-+(.)?/g, function(t, e) {
					return e ? e.toUpperCase() : ""
				})
			}, E = function(t) {
				return N.call(t, function(e, n) {
					return t.indexOf(e) == n
				})
			}, Z.fragment = function(t, e, n) {
				var i, o, r;
				return R.test(t) && (i = k(A.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(D, "<$1></$2>")), e === C && (e = L.test(t) && RegExp.$1), e in q || (e = "*"), r = q[e], r.innerHTML = "" + t, i = k.each(M.call(r.childNodes), function() {
					r.removeChild(this)
				})), a(n) && (o = k(i), k.each(n, function(t, e) {
					F.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
				})), i
			}, Z.Z = function(t, e) {
				return t = t || [], t.__proto__ = k.fn, t.selector = e || "", t
			}, Z.isZ = function(t) {
				return t instanceof Z.Z
			}, Z.init = function(t, n) {
				var i;
				if (!t) return Z.Z();
				if ("string" == typeof t)
					if (t = t.trim(), "<" == t[0] && L.test(t)) i = Z.fragment(t, RegExp.$1, n), t = null;
					else {
						if (n !== C) return k(n).find(t);
						i = Z.qsa(A, t)
					}
				else {
					if (e(t)) return k(A).ready(t);
					if (Z.isZ(t)) return t;
					if (Y(t)) i = c(t);
					else if (r(t)) i = [t], t = null;
					else if (L.test(t)) i = Z.fragment(t.trim(), RegExp.$1, n), t = null;
					else {
						if (n !== C) return k(n).find(t);
						i = Z.qsa(A, t)
					}
				}
				return Z.Z(i, t)
			}, k = function(t, e) {
				return Z.init(t, e)
			}, k.extend = function(t) {
				var e, n = M.call(arguments, 1);
				return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
					m(t, n, e)
				}), t
			}, Z.qsa = function(t, e) {
				var n, i = "#" == e[0],
					r = !i && "." == e[0],
					a = i || r ? e.slice(1) : e,
					s = $.test(a);
				return o(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : M.call(s && !i ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
			}, k.contains = A.documentElement.contains ? function(t, e) {
				return t !== e && t.contains(e)
			} : function(t, e) {
				for (; e && (e = e.parentNode);)
					if (e === t) return !0;
				return !1
			}, k.type = t, k.isFunction = e, k.isWindow = i, k.isArray = Y, k.isPlainObject = a, k.isEmptyObject = function(t) {
				var e;
				for (e in t) return !1;
				return !0
			}, k.inArray = function(t, e, n) {
				return O.indexOf.call(e, t, n)
			}, k.camelCase = T, k.trim = function(t) {
				return null == t ? "" : String.prototype.trim.call(t)
			}, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function(t, e) {
				var n, i, o, r = [];
				if (s(t))
					for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && r.push(n);
				else
					for (o in t) n = e(t[o], o), null != n && r.push(n);
				return u(r)
			}, k.each = function(t, e) {
				var n, i;
				if (s(t)) {
					for (n = 0; n < t.length; n++)
						if (e.call(t[n], n, t[n]) === !1) return t
				} else
					for (i in t)
						if (e.call(t[i], i, t[i]) === !1) return t;
				return t
			}, k.grep = function(t, e) {
				return N.call(t, e)
			}, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
				H["[object " + e + "]"] = e.toLowerCase()
			}), k.fn = {
				forEach: O.forEach,
				reduce: O.reduce,
				push: O.push,
				sort: O.sort,
				indexOf: O.indexOf,
				concat: O.concat,
				map: function(t) {
					return k(k.map(this, function(e, n) {
						return t.call(e, n, e)
					}))
				},
				slice: function() {
					return k(M.apply(this, arguments))
				},
				ready: function(t) {
					return X.test(A.readyState) && A.body ? t(k) : A.addEventListener("DOMContentLoaded", function() {
						t(k)
					}, !1), this
				},
				get: function(t) {
					return t === C ? M.call(this) : this[t >= 0 ? t : t + this.length]
				},
				toArray: function() {
					return this.get()
				},
				size: function() {
					return this.length
				},
				remove: function() {
					return this.each(function() {
						null != this.parentNode && this.parentNode.removeChild(this)
					})
				},
				each: function(t) {
					return O.every.call(this, function(e, n) {
						return t.call(e, n, e) !== !1
					}), this
				},
				filter: function(t) {
					return e(t) ? this.not(this.not(t)) : k(N.call(this, function(e) {
						return Z.matches(e, t)
					}))
				},
				add: function(t, e) {
					return k(E(this.concat(k(t, e))))
				},
				is: function(t) {
					return this.length > 0 && Z.matches(this[0], t)
				},
				not: function(t) {
					var n = [];
					if (e(t) && t.call !== C) this.each(function(e) {
						t.call(this, e) || n.push(this)
					});
					else {
						var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? M.call(t) : k(t);
						this.forEach(function(t) {
							i.indexOf(t) < 0 && n.push(t)
						})
					}
					return k(n)
				},
				has: function(t) {
					return this.filter(function() {
						return r(t) ? k.contains(this, t) : k(this).find(t).size()
					})
				},
				eq: function(t) {
					return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
				},
				first: function() {
					var t = this[0];
					return t && !r(t) ? t : k(t)
				},
				last: function() {
					var t = this[this.length - 1];
					return t && !r(t) ? t : k(t)
				},
				find: function(t) {
					var e, i = this;
					return e = t ? "object" == ("undefined" == typeof t ? "undefined" : n(t)) ? k(t).filter(function() {
						var t = this;
						return O.some.call(i, function(e) {
							return k.contains(e, t)
						})
					}) : 1 == this.length ? k(Z.qsa(this[0], t)) : this.map(function() {
						return Z.qsa(this, t)
					}) : k()
				},
				closest: function(t, e) {
					var i = this[0],
						r = !1;
					for ("object" == ("undefined" == typeof t ? "undefined" : n(t)) && (r = k(t)); i && !(r ? r.indexOf(i) >= 0 : Z.matches(i, t));) i = i !== e && !o(i) && i.parentNode;
					return k(i)
				},
				parents: function(t) {
					for (var e = [], n = this; n.length > 0;) n = k.map(n, function(t) {
						if ((t = t.parentNode) && !o(t) && e.indexOf(t) < 0) return e.push(t), t
					});
					return g(e, t)
				},
				parent: function(t) {
					return g(E(this.pluck("parentNode")), t)
				},
				children: function(t) {
					return g(this.map(function() {
						return p(this)
					}), t)
				},
				contents: function() {
					return this.map(function() {
						return M.call(this.childNodes)
					})
				},
				siblings: function(t) {
					return g(this.map(function(t, e) {
						return N.call(p(e.parentNode), function(t) {
							return t !== e
						})
					}), t)
				},
				empty: function() {
					return this.each(function() {
						this.innerHTML = ""
					})
				},
				pluck: function(t) {
					return k.map(this, function(e) {
						return e[t]
					})
				},
				show: function() {
					return this.each(function() {
						"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
					})
				},
				replaceWith: function(t) {
					return this.before(t).remove()
				},
				wrap: function(t) {
					var n = e(t);
					if (this[0] && !n) var i = k(t).get(0),
						o = i.parentNode || this.length > 1;
					return this.each(function(e) {
						k(this).wrapAll(n ? t.call(this, e) : o ? i.cloneNode(!0) : i)
					})
				},
				wrapAll: function(t) {
					if (this[0]) {
						k(this[0]).before(t = k(t));
						for (var e;
							(e = t.children()).length;) t = e.first();
						k(t).append(this)
					}
					return this
				},
				wrapInner: function(t) {
					var n = e(t);
					return this.each(function(e) {
						var i = k(this),
							o = i.contents(),
							r = n ? t.call(this, e) : t;
						o.length ? o.wrapAll(r) : i.append(r)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						k(this).replaceWith(k(this).children())
					}), this
				},
				clone: function() {
					return this.map(function() {
						return this.cloneNode(!0)
					})
				},
				hide: function() {
					return this.css("display", "none")
				},
				toggle: function(t) {
					return this.each(function() {
						var e = k(this);
						(t === C ? "none" == e.css("display") : t) ? e.show(): e.hide()
					})
				},
				prev: function(t) {
					return k(this.pluck("previousElementSibling")).filter(t || "*")
				},
				next: function(t) {
					return k(this.pluck("nextElementSibling")).filter(t || "*")
				},
				html: function(t) {
					return 0 in arguments ? this.each(function(e) {
						var n = this.innerHTML;
						k(this).empty().append(v(this, t, e, n))
					}) : 0 in this ? this[0].innerHTML : null
				},
				text: function(t) {
					return 0 in arguments ? this.each(function(e) {
						var n = v(this, t, e, this.textContent);
						this.textContent = null == n ? "" : "" + n
					}) : 0 in this ? this[0].textContent : null
				},
				attr: function(t, e) {
					var n;
					return "string" != typeof t || 1 in arguments ? this.each(function(n) {
						if (1 === this.nodeType)
							if (r(t))
								for (x in t) y(this, x, t[x]);
							else y(this, t, v(this, e, n, this.getAttribute(t)))
					}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : C
				},
				removeAttr: function(t) {
					return this.each(function() {
						1 === this.nodeType && t.split(" ").forEach(function(t) {
							y(this, t)
						}, this)
					})
				},
				prop: function(t, e) {
					return t = J[t] || t, 1 in arguments ? this.each(function(n) {
						this[t] = v(this, e, n, this[t])
					}) : this[0] && this[0][t]
				},
				data: function G(t, e) {
					var n = "data-" + t.replace(W, "-$1").toLowerCase(),
						G = 1 in arguments ? this.attr(n, e) : this.attr(n);
					return null !== G ? b(G) : C
				},
				val: function(t) {
					return 0 in arguments ? this.each(function(e) {
						this.value = v(this, t, e, this.value)
					}) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
						return this.selected
					}).pluck("value") : this[0].value)
				},
				offset: function(t) {
					if (t) return this.each(function(e) {
						var n = k(this),
							i = v(this, t, e, n.offset()),
							o = n.offsetParent().offset(),
							r = {
								top: i.top - o.top,
								left: i.left - o.left
							};
						"static" == n.css("position") && (r.position = "relative"), n.css(r)
					});
					if (!this.length) return null;
					var e = this[0].getBoundingClientRect();
					return {
						left: e.left + window.pageXOffset,
						top: e.top + window.pageYOffset,
						width: Math.round(e.width),
						height: Math.round(e.height)
					}
				},
				css: function tt(e, n) {
					if (arguments.length < 2) {
						var i, o = this[0];
						if (!o) return;
						if (i = getComputedStyle(o, ""), "string" == typeof e) return o.style[T(e)] || i.getPropertyValue(e);
						if (Y(e)) {
							var r = {};
							return k.each(e, function(t, e) {
								r[e] = o.style[T(e)] || i.getPropertyValue(e)
							}), r
						}
					}
					var tt = "";
					if ("string" == t(e)) n || 0 === n ? tt = l(e) + ":" + d(e, n) : this.each(function() {
						this.style.removeProperty(l(e))
					});
					else
						for (x in e) e[x] || 0 === e[x] ? tt += l(x) + ":" + d(x, e[x]) + ";" : this.each(function() {
							this.style.removeProperty(l(x))
						});
					return this.each(function() {
						this.style.cssText += ";" + tt
					})
				},
				index: function(t) {
					return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0])
				},
				hasClass: function(t) {
					return !!t && O.some.call(this, function(t) {
						return this.test(w(t))
					}, f(t))
				},
				addClass: function(t) {
					return t ? this.each(function(e) {
						if ("className" in this) {
							j = [];
							var n = w(this),
								i = v(this, t, e, n);
							i.split(/\s+/g).forEach(function(t) {
								k(this).hasClass(t) || j.push(t)
							}, this), j.length && w(this, n + (n ? " " : "") + j.join(" "))
						}
					}) : this
				},
				removeClass: function(t) {
					return this.each(function(e) {
						if ("className" in this) {
							if (t === C) return w(this, "");
							j = w(this), v(this, t, e, j).split(/\s+/g).forEach(function(t) {
								j = j.replace(f(t), " ")
							}), w(this, j.trim())
						}
					})
				},
				toggleClass: function(t, e) {
					return t ? this.each(function(n) {
						var i = k(this),
							o = v(this, t, n, w(this));
						o.split(/\s+/g).forEach(function(t) {
							(e === C ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
						})
					}) : this
				},
				scrollTop: function(t) {
					if (this.length) {
						var e = "scrollTop" in this[0];
						return t === C ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
							this.scrollTop = t
						} : function() {
							this.scrollTo(this.scrollX, t)
						})
					}
				},
				scrollLeft: function(t) {
					if (this.length) {
						var e = "scrollLeft" in this[0];
						return t === C ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
							this.scrollLeft = t
						} : function() {
							this.scrollTo(t, this.scrollY)
						})
					}
				},
				position: function() {
					if (this.length) {
						var t = this[0],
							e = this.offsetParent(),
							n = this.offset(),
							i = U.test(e[0].nodeName) ? {
								top: 0,
								left: 0
							} : e.offset();
						return n.top -= parseFloat(k(t).css("margin-top")) || 0, n.left -= parseFloat(k(t).css("margin-left")) || 0, i.top += parseFloat(k(e[0]).css("border-top-width")) || 0, i.left += parseFloat(k(e[0]).css("border-left-width")) || 0, {
							top: n.top - i.top,
							left: n.left - i.left
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var t = this.offsetParent || A.body; t && !U.test(t.nodeName) && "static" == k(t).css("position");) t = t.offsetParent;
						return t
					})
				}
			}, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(t) {
				var e = t.replace(/./, function(t) {
					return t[0].toUpperCase()
				});
				k.fn[t] = function(n) {
					var r, a = this[0];
					return n === C ? i(a) ? a["inner" + e] : o(a) ? a.documentElement["scroll" + e] : (r = this.offset()) && r[t] : this.each(function(e) {
						a = k(this), a.css(t, v(this, n, e, a[t]()))
					})
				}
			}), K.forEach(function(e, n) {
				var i = n % 2;
				k.fn[e] = function() {
					var e, o, r = k.map(arguments, function(n) {
							return e = t(n), "object" == e || "array" == e || null == n ? n : Z.fragment(n)
						}),
						a = this.length > 1;
					return r.length < 1 ? this : this.each(function(t, e) {
						o = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
						var s = k.contains(A.documentElement, o);
						r.forEach(function(t) {
							if (a) t = t.cloneNode(!0);
							else if (!o) return k(t).remove();
							o.insertBefore(t, e), s && S(t, function(t) {
								null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
							})
						})
					})
				}, k.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
					return k(t)[e](this), this
				}
			}), Z.Z.prototype = k.fn, Z.uniq = E, Z.deserializeValue = b, k.zepto = Z, k
		}();
	window.Zepto = i, void 0 === window.$ && (window.$ = i),
		function(t) {
			function e(t) {
				return t._zid || (t._zid = d++)
			}

			function n(t, n, r, a) {
				if (n = i(n), n.ns) var s = o(n.ns);
				return (g[e(t)] || []).filter(function(t) {
					return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!r || e(t.fn) === e(r)) && (!a || t.sel == a)
				})
			}

			function i(t) {
				var e = ("" + t).split(".");
				return {
					e: e[0],
					ns: e.slice(1).sort().join(" ")
				}
			}

			function o(t) {
				return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
			}

			function r(t, e) {
				return t.del && !y && t.e in w || !!e
			}

			function a(t) {
				return b[t] || y && w[t] || t
			}

			function s(n, o, s, c, l, d, h) {
				var p = e(n),
					m = g[p] || (g[p] = []);
				o.split(/\s/).forEach(function(e) {
					if ("ready" == e) return t(document).ready(s);
					var o = i(e);
					o.fn = s, o.sel = l, o.e in b && (s = function(e) {
						var n = e.relatedTarget;
						if (!n || n !== this && !t.contains(this, n)) return o.fn.apply(this, arguments)
					}), o.del = d;
					var p = d || s;
					o.proxy = function(t) {
						if (t = u(t), !t.isImmediatePropagationStopped()) {
							t.data = c;
							var e = p.apply(n, t._args == f ? [t] : [t].concat(t._args));
							return e === !1 && (t.preventDefault(), t.stopPropagation()), e
						}
					}, o.i = m.length, m.push(o), "addEventListener" in n && n.addEventListener(a(o.e), o.proxy, r(o, h))
				})
			}

			function c(t, i, o, s, c) {
				var u = e(t);
				(i || "").split(/\s/).forEach(function(e) {
					n(t, e, o, s).forEach(function(e) {
						delete g[u][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, r(e, c))
					})
				})
			}

			function u(e, n) {
				return !n && e.isDefaultPrevented || (n || (n = e), t.each(k, function(t, i) {
					var o = n[t];
					e[t] = function() {
						return this[i] = S, o && o.apply(n, arguments)
					}, e[i] = C
				}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = S)), e
			}

			function l(t) {
				var e, n = {
					originalEvent: t
				};
				for (e in t) x.test(e) || t[e] === f || (n[e] = t[e]);
				return u(n, t)
			}
			var f, d = 1,
				h = Array.prototype.slice,
				p = t.isFunction,
				m = function(t) {
					return "string" == typeof t
				},
				g = {},
				v = {},
				y = "onfocusin" in window,
				w = {
					focus: "focusin",
					blur: "focusout"
				},
				b = {
					mouseenter: "mouseover",
					mouseleave: "mouseout"
				};
			v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
				add: s,
				remove: c
			}, t.proxy = function(n, i) {
				var o = 2 in arguments && h.call(arguments, 2);
				if (p(n)) {
					var r = function() {
						return n.apply(i, o ? o.concat(h.call(arguments)) : arguments)
					};
					return r._zid = e(n), r
				}
				if (m(i)) return o ? (o.unshift(n[i], n), t.proxy.apply(null, o)) : t.proxy(n[i], n);
				throw new TypeError("expected function")
			}, t.fn.bind = function(t, e, n) {
				return this.on(t, e, n)
			}, t.fn.unbind = function(t, e) {
				return this.off(t, e)
			}, t.fn.one = function(t, e, n, i) {
				return this.on(t, e, n, i, 1)
			};
			var S = function() {
					return !0
				},
				C = function() {
					return !1
				},
				x = /^([A-Z]|returnValue$|layer[XY]$)/,
				k = {
					preventDefault: "isDefaultPrevented",
					stopImmediatePropagation: "isImmediatePropagationStopped",
					stopPropagation: "isPropagationStopped"
				};
			t.fn.delegate = function(t, e, n) {
				return this.on(e, t, n)
			}, t.fn.undelegate = function(t, e, n) {
				return this.off(e, t, n)
			}, t.fn.live = function(e, n) {
				return t(document.body).delegate(this.selector, e, n), this
			}, t.fn.die = function(e, n) {
				return t(document.body).undelegate(this.selector, e, n), this
			}, t.fn.on = function(e, n, i, o, r) {
				var a, u, d = this;
				return e && !m(e) ? (t.each(e, function(t, e) {
					d.on(t, n, i, e, r)
				}), d) : (m(n) || p(o) || o === !1 || (o = i, i = n, n = f), (p(i) || i === !1) && (o = i, i = f), o === !1 && (o = C), d.each(function(f, d) {
					r && (a = function(t) {
						return c(d, t.type, o), o.apply(this, arguments)
					}), n && (u = function(e) {
						var i, r = t(e.target).closest(n, d).get(0);
						if (r && r !== d) return i = t.extend(l(e), {
							currentTarget: r,
							liveFired: d
						}), (a || o).apply(r, [i].concat(h.call(arguments, 1)))
					}), s(d, e, o, i, n, u || a)
				}))
			}, t.fn.off = function(e, n, i) {
				var o = this;
				return e && !m(e) ? (t.each(e, function(t, e) {
					o.off(t, n, e)
				}), o) : (m(n) || p(i) || i === !1 || (i = n, n = f), i === !1 && (i = C), o.each(function() {
					c(this, e, i, n)
				}))
			}, t.fn.trigger = function(e, n) {
				return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function() {
					e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
				})
			}, t.fn.triggerHandler = function(e, i) {
				var o, r;
				return this.each(function(a, s) {
					o = l(m(e) ? t.Event(e) : e), o._args = i, o.target = s, t.each(n(s, e.type || e), function(t, e) {
						if (r = e.proxy(o), o.isImmediatePropagationStopped()) return !1
					})
				}), r
			}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
				t.fn[e] = function(t) {
					return 0 in arguments ? this.bind(e, t) : this.trigger(e)
				}
			}), t.Event = function(t, e) {
				m(t) || (e = t, t = e.type);
				var n = document.createEvent(v[t] || "Events"),
					i = !0;
				if (e)
					for (var o in e) "bubbles" == o ? i = !!e[o] : n[o] = e[o];
				return n.initEvent(t, i, !0), u(n)
			}
		}(i),
		function(t) {
			function e(e, n, i) {
				var o = t.Event(n);
				return t(e).trigger(o, i), !o.isDefaultPrevented()
			}

			function n(t, n, i, o) {
				if (t.global) return e(n || y, i, o)
			}

			function i(e) {
				e.global && 0 === t.active++ && n(e, null, "ajaxStart")
			}

			function o(e) {
				e.global && !--t.active && n(e, null, "ajaxStop")
			}

			function r(t, e) {
				var i = e.context;
				return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
			}

			function a(t, e, i, o) {
				var r = i.context,
					a = "success";
				i.success.call(r, t, a, e), o && o.resolveWith(r, [t, a, e]), n(i, r, "ajaxSuccess", [e, i, t]), c(a, e, i)
			}

			function s(t, e, i, o, r) {
				var a = o.context;
				o.error.call(a, i, e, t), r && r.rejectWith(a, [i, e, t]), n(o, a, "ajaxError", [i, o, t || e]), c(e, i, o)
			}

			function c(t, e, i) {
				var r = i.context;
				i.complete.call(r, e, t), n(i, r, "ajaxComplete", [e, i]), o(i)
			}

			function u() {}

			function l(t) {
				return t && (t = t.split(";", 2)[0]), t && (t == x ? "html" : t == C ? "json" : b.test(t) ? "script" : S.test(t) && "xml") || "text"
			}

			function f(t, e) {
				return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
			}

			function d(e) {
				e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
			}

			function h(e, n, i, o) {
				return t.isFunction(n) && (o = i, i = n, n = void 0), t.isFunction(i) || (o = i, i = void 0), {
					url: e,
					data: n,
					success: i,
					dataType: o
				}
			}

			function p(e, n, i, o) {
				var r, a = t.isArray(n),
					s = t.isPlainObject(n);
				t.each(n, function(n, c) {
					r = t.type(c), o && (n = i ? o : o + "[" + (s || "object" == r || "array" == r ? n : "") + "]"), !o && a ? e.add(c.name, c.value) : "array" == r || !i && "object" == r ? p(e, c, i, n) : e.add(n, c)
				})
			}
			var m, g, v = 0,
				y = window.document,
				w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
				b = /^(?:text|application)\/javascript/i,
				S = /^(?:text|application)\/xml/i,
				C = "application/json",
				x = "text/html",
				k = /^\s*$/,
				j = y.createElement("a");
			j.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
				if (!("type" in e)) return t.ajax(e);
				var i, o, c = e.jsonpCallback,
					u = (t.isFunction(c) ? c() : c) || "jsonp" + ++v,
					l = y.createElement("script"),
					f = window[u],
					d = function(e) {
						t(l).triggerHandler("error", e || "abort")
					},
					h = {
						abort: d
					};
				return n && n.promise(h), t(l).on("load error", function(r, c) {
					clearTimeout(o), t(l).off().remove(), "error" != r.type && i ? a(i[0], h, e, n) : s(null, c || "error", h, e, n), window[u] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
				}), r(h, e) === !1 ? (d("abort"), h) : (window[u] = function() {
					i = arguments
				}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), e.timeout > 0 && (o = setTimeout(function() {
					d("timeout")
				}, e.timeout)), h)
			}, t.ajaxSettings = {
				type: "GET",
				beforeSend: u,
				success: u,
				error: u,
				complete: u,
				context: null,
				global: !0,
				xhr: function() {
					return new window.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript, application/x-javascript",
					json: C,
					xml: "application/xml, text/xml",
					html: x,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0
			}, t.ajax = function(e) {
				var n, o = t.extend({}, e || {}),
					c = t.Deferred && t.Deferred();
				for (m in t.ajaxSettings) void 0 === o[m] && (o[m] = t.ajaxSettings[m]);
				i(o), o.crossDomain || (n = y.createElement("a"), n.href = o.url, n.href = n.href, o.crossDomain = j.protocol + "//" + j.host != n.protocol + "//" + n.host), o.url || (o.url = window.location.toString()), d(o);
				var h = o.dataType,
					p = /\?.+=\?/.test(o.url);
				if (p && (h = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != h && "jsonp" != h) || (o.url = f(o.url, "_=" + Date.now())), "jsonp" == h) return p || (o.url = f(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, c);
				var v, w = o.accepts[h],
					b = {},
					S = function(t, e) {
						b[t.toLowerCase()] = [t, e]
					},
					C = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
					x = o.xhr(),
					T = x.setRequestHeader;
				if (c && c.promise(x), o.crossDomain || S("X-Requested-With", "XMLHttpRequest"), S("Accept", w || "*/*"), (w = o.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(w)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && S("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers)
					for (g in o.headers) S(g, o.headers[g]);
				if (x.setRequestHeader = S, x.onreadystatechange = function() {
						if (4 == x.readyState) {
							x.onreadystatechange = u, clearTimeout(v);
							var e, n = !1;
							if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == C) {
								h = h || l(o.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
								try {
									"script" == h ? (0, eval)(e) : "xml" == h ? e = x.responseXML : "json" == h && (e = k.test(e) ? null : t.parseJSON(e))
								} catch (i) {
									n = i
								}
								n ? s(n, "parsererror", x, o, c) : a(e, x, o, c)
							} else s(x.statusText || null, x.status ? "error" : "abort", x, o, c)
						}
					}, r(x, o) === !1) return x.abort(), s(null, "abort", x, o, c), x;
				if (o.xhrFields)
					for (g in o.xhrFields) x[g] = o.xhrFields[g];
				var E = !("async" in o) || o.async;
				x.open(o.type, o.url, E, o.username, o.password);
				for (g in b) T.apply(x, b[g]);
				return o.timeout > 0 && (v = setTimeout(function() {
					x.onreadystatechange = u, x.abort(), s(null, "timeout", x, o, c)
				}, o.timeout)), x.send(o.data ? o.data : null), x
			}, t.get = function() {
				return t.ajax(h.apply(null, arguments))
			}, t.post = function() {
				var e = h.apply(null, arguments);
				return e.type = "POST", t.ajax(e)
			}, t.getJSON = function() {
				var e = h.apply(null, arguments);
				return e.dataType = "json", t.ajax(e)
			}, t.fn.load = function(e, n, i) {
				if (!this.length) return this;
				var o, r = this,
					a = e.split(/\s/),
					s = h(e, n, i),
					c = s.success;
				return a.length > 1 && (s.url = a[0], o = a[1]), s.success = function(e) {
					r.html(o ? t("<div>").html(e.replace(w, "")).find(o) : e), c && c.apply(r, arguments)
				}, t.ajax(s), this
			};
			var T = encodeURIComponent;
			t.param = function(e, n) {
				var i = [];
				return i.add = function(e, n) {
					t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n))
				}, p(i, e, n), i.join("&").replace(/%20/g, "+")
			}
		}(i),
		function(t) {
			t.fn.serializeArray = function() {
				var e, n, i = [],
					o = function r(t) {
						return t.forEach ? t.forEach(r) : void i.push({
							name: e,
							value: t
						})
					};
				return this[0] && t.each(this[0].elements, function(i, r) {
					n = r.type, e = r.name, e && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || r.checked) && o(t(r).val())
				}), i
			}, t.fn.serialize = function() {
				var t = [];
				return this.serializeArray().forEach(function(e) {
					t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
				}), t.join("&")
			}, t.fn.submit = function(e) {
				if (0 in arguments) this.bind("submit", e);
				else if (this.length) {
					var n = t.Event("submit");
					this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
				}
				return this
			}
		}(i),
		function(t) {
			"__proto__" in {} || t.extend(t.zepto, {
				Z: function(e, n) {
					return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
				},
				isZ: function(e) {
					return "array" === t.type(e) && "__Z" in e
				}
			});
			try {
				getComputedStyle(void 0)
			} catch (e) {
				var n = getComputedStyle;
				window.getComputedStyle = function(t) {
					try {
						return n(t)
					} catch (e) {
						return null
					}
				}
			}
		}(i), t.exports = i
}]);