/**
 * Created by gaojun-pd on 2016/10/27.
 */
(function() {
	var Util = {
		/**
		 * 1、判断非空 2、获取字符串真实长度 汉字算两位 3、判断参数类型 4、日期格式化 5、通过key获取url中的参数值
		 * 6、设置cookie值 7、获取cookie值 8、删除cookie 9、HTML编码 10、HTML解码
		 * 11、光标停在文字的后面，文本框获得焦点时调用 12、生成一个新的GUID
		 */
		/**
		 * 判断非空
		 * 
		 * @param obj
		 * @returns {boolean}
		 */
		isEmpty : function(obj) {
			if (obj == undefined || obj == null || new String(obj).trim() == '') {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * 获取字符串真实长度 汉字算两位
		 * 
		 * @param str
		 * @returns {number}
		 */
		getRealLength : function(str) {
			return isEmpty(str) ? 0 : str.replace(/[^\x00-\xff]/g, "**").length;
		},

		/**
		 * 判断参数类型
		 * 
		 * @param obj
		 * @returns {string}
		 */
		type : function(obj) {
			var class2type = {}, toString = Object.prototype.toString;
			(function() {
				var typeArr = "Boolean,Number,String,Function,Array,Date,RegExp,Object"
						.split(",");
				for (var i = 0; i < typeArr.length; i++) {
					var name = typeArr[i];
					class2type["[object " + name + "]"] = name.toLowerCase();
				}
			})()
			return obj == null ? String(obj) : class2type[toString.call(obj)]
					|| "object";
		},

		/**
		 * 日期格式化
		 * 
		 * @param date
		 *            日期对象
		 * @param formatStr
		 *            格式化字符串 如YYYY-MM-dd hh:mm:ss
		 * @returns {*}
		 */
		dateFormat : function(date, formatStr) {
			var str = formatStr;
			var Week = [ '日', '一', '二', '三', '四', '五', '六' ];
			str = str.replace(/yyyy|YYYY/, date.getFullYear());
			str = str
					.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date
							.getYear() % 100).toString() : '0'
							+ (date.getYear() % 100));
			str = str.replace(/MM/, (date.getMonth() + 1) > 9 ? (date
					.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
			str = str.replace(/M/g, (date.getMonth() + 1));
			str = str.replace(/w|W/g, Week[date.getDay()]);
			str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate()
					.toString() : '0' + date.getDate());
			str = str.replace(/d|D/g, date.getDate());
			str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours()
					.toString() : '0' + date.getHours());
			str = str.replace(/h|H/g, date.getHours());
			str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes()
					.toString() : '0' + date.getMinutes());
			str = str.replace(/m/g, date.getMinutes());
			str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date
					.getSeconds().toString() : '0' + date.getSeconds());
			str = str.replace(/s|S/g, date.getSeconds());
			return str
		},

		/**
		 * 通过key获取url中的参数值
		 * 
		 * @param key
		 * @returns {null}
		 */
		getQueryString : function(key) {
			var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return decodeURIComponent(r[2]);
			return null;
		},

		/**
		 * 设置cookie值
		 * 
		 * @param name
		 *            名称
		 * @param value
		 *            名称对应值
		 * @param Hours
		 *            过期时间
		 */
		setCookie : function(name, value, Hours) {
			var d = new Date();
			var offset = 8;
			var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
			var nd = utc + (3600000 * offset);
			var exp = new Date(nd);
			exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
			document.cookie = name + "=" + encodeURIComponent(value)
					+ ";path=/;expires=" + exp.toGMTString()
					+ ";domain=sicd.com;";
		},

		/**
		 * 获取cookie值
		 * 
		 * @param name
		 *            cookie名
		 * @returns {*}
		 */
		getCookie : function(name) {
			var arr = document.cookie.match(new RegExp("(^| )" + name
					+ "=([^;]*)(;|$)"));
			if (arr != null)
				return decodeURIComponent(arr[2]);
			return null;
		},

		/**
		 * 删除cookie
		 * 
		 * @param name
		 *            cookie name
		 */
		delCookie : function(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";expires="
						+ exp.toGMTString();
		},

		/**
		 * HTML编码
		 * 
		 * @param str
		 *            待编码字符串
		 * @returns {string}
		 */
		html_encode : function(str) {
			var s = "";
			if (str.length == 0)
				return "";
			s = str.replace(/&/g, "&gt;");
			s = s.replace(/</g, "&lt;");
			s = s.replace(/>/g, "&gt;");
			s = s.replace(/ /g, "&nbsp;");
			s = s.replace(/\'/g, "&#39;");
			s = s.replace(/\"/g, "&quot;");
			s = s.replace(/\n/g, "<br>");
			return s;
		},

		/**
		 * HTML解码
		 * 
		 * @param str
		 *            待解码的字符串
		 * @returns {string}
		 */
		html_decode : function(str) {
			var s = "";
			if (str.length == 0)
				return "";
			s = str.replace(/&gt;/g, "&");
			s = s.replace(/&lt;/g, "<");
			s = s.replace(/&gt;/g, ">");
			s = s.replace(/&nbsp;/g, " ");
			s = s.replace(/&#39;/g, "\'");
			s = s.replace(/&quot;/g, "\"");
			s = s.replace(/<br>/g, "\n");
			return s;
		},

		/**
		 * 光标停在文字的后面，文本框获得焦点时调用
		 */
		focusLast : function() {
			var e = event.srcElement;
			var r = e.createTextRange();
			r.moveStart('character', e.value.length);
			r.collapse(true);
			r.select();
		},

		/**
		 * 生成一个新的GUID
		 * 
		 * @return {string} 数据类型
		 * @method nuid
		 */
		nuid : function() {
      function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
		},

		/**
		 * 验证组织机构代码
		 */
		isOrgcode : function(value) {
			var isValid = true, rFormat = /^[A-Z\d]{8}-[X\d]/;

			if (!rFormat.test(value)) {
				isValid = false;
			} else {
				var Wi = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
				var Ci = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				// 加权求和
				var sum = 0;
				for (var i = 0; i < 8; i++) {
					sum += Ci.indexOf(value.charAt(i)) * Wi[i];
				}
				// 计算校验值： C9 = 11 - MOD ( ∑(Ci*Wi), 11 )
				var C9 = 11 - (sum % 11);
				if (C9 === 10)
					C9 = 'X';
				else if (C9 === 11)
					C9 = 0;
				C9 = '' + C9;
				// 与校验位比对
				if (C9 !== value.charAt(9)) {
					isValid = false;
				}
			}
			return isValid;
		},
		/**
		 * 身份证验证
		 */
		idcard : function(value) {
			var isValid = true;
			var cityCode = {
				11 : "北京",
				12 : "天津",
				13 : "河北",
				14 : "山西",
				15 : "内蒙古",
				21 : "辽宁",
				22 : "吉林",
				23 : "黑龙江 ",
				31 : "上海",
				32 : "江苏",
				33 : "浙江",
				34 : "安徽",
				35 : "福建",
				36 : "江西",
				37 : "山东",
				41 : "河南",
				42 : "湖北 ",
				43 : "湖南",
				44 : "广东",
				45 : "广西",
				46 : "海南",
				50 : "重庆",
				51 : "四川",
				52 : "贵州",
				53 : "云南",
				54 : "西藏 ",
				61 : "陕西",
				62 : "甘肃",
				63 : "青海",
				64 : "宁夏",
				65 : "新疆",
				71 : "台湾",
				81 : "香港",
				82 : "澳门",
				91 : "国外 "
			};

			/*
			 * 15位校验规则： (dddddd yymmdd xx g) g奇数为男，偶数为女 18位校验规则： (dddddd
			 * yyyymmdd xxx p) xxx奇数为男，偶数为女，p校验位
			 * 
			 * 校验位公式：C17 = C[ MOD( ∑(Ci*Wi), 11) ] i----表示号码字符从由至左包括校验码在内的位置序号
			 * Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1 Ci 1 0 X 9 8 7 6 5 4 3 2
			 */
			var rFormat = /^\d{6}(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$|^\d{6}\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}$/; // 格式验证

			if (!rFormat.test(value) || !cityCode[value.substr(0, 2)]) {
				isValid = false;
			}
			// 18位身份证需要验证最后一位校验位
			else if (value.length === 18) {
				var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
						1 ]; // 加权因子
				var Ci = "10X98765432"; // 校验字符
				// 加权求和
				var sum = 0;
				for (var i = 0; i < 17; i++) {
					sum += value.charAt(i) * Wi[i];
				}
				// 计算校验值
				var C17 = Ci.charAt(sum % 11);
				// 与校验位比对
				if (C17 !== value.charAt(17)) {
					isValid = false;
				}
			}
			return isValid;
		},

		/**
		 * 手机号验证
		 */
		isMobile : function(value) {
			var rFormat = /^1[34578]\d{9}$/;
			if (!rFormat.test(value)) {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * 统一社会信用代码
		 */
		isunicode : function(value) {
			var code = value;
			var regexp = /^([0-9A-Z]{2})([0-9]{6})([0-9A-Z]){10}$/;
			if (!regexp.test(code)) {
				return false;
			}

			// 代码字符集-代码字符
			var charCode = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
					"A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M",
					"N", "P", "Q", "R", "T", "U", "W", "X", "Y" ];
			// 代码字符集-代码字符数值
			var charVal = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
					15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30 ];
			// 各位置序号上的加权因子
			var posWi = [ 1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24,
					10, 30, 28 ];

			// 校验位校验
			var obj = code.split('');
			// ∑(ci×Wi)(mod 31)
			var sum = 0;
			var ci = 0;
			var Wi = 0;
			for (var i = 0; i < 17; i++) {
				ci = charVal[charCode.indexOf(obj[i])];
				Wi = posWi[i];
				sum += ci * Wi;
			}
			var c10 = 31 - (sum % 31);
			c10 = 31 == c10 ? 0 : c10;
			return c10 == charCode.indexOf(obj[17]);
		},

		/**
		 * 营业执照
		 */
		isBizcode : function(value) {
			var isValid = true, rFormat = /^[1-6]\d{14}$/;

			// 共15位：6位首次登记机关代码 + 8位顺序码 + 校验位
			if (!rFormat.test(value)) {
				isValid = false;
			} else {
				var s = [], p = [ 10 ];

				for (var i = 0; i < 15; i++) {
					s[i] = (p[i] % 11) + (+value.charAt(i));
					p[i + 1] = (s[i] % 10 || 10) * 2;
				}
				if (1 !== s[14] % 10) {
					isValid = false;
				}
			}
			return isValid;
		}

		

	}
	if (typeof define === "function" && define.amd) {
		define([], function() {
			return Util;
		});
	} else {
		window.Util = Util;
	}
})();
