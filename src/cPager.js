
(function ($) {
	$.cPager = {
		pn					: 1,		//默认显示的页码
		total				: 10,		//总页码
		showMax				: 7,		//一次最多显示的页码
		showFirstPage 		: true,		//显示首页按钮
		showLastPage		: true,		//显示尾页按钮
		showPrePage			: true,		//显示上一页按钮
		showNextPage		: true,		//显示下一页按钮
		showGotoPage		: true,		//显示跳转页面输入框和按钮
		config : {
			firstPageText	: "首页",
			lastPageText	: "尾页",
			prePageText		: "上一页",
			nextPageText	: "下一页",
			gotoBtnText		: "确定"
		},
		// 绘制 html控件
		show: function (conf) {
			if (conf) {
				this.user(conf);
			}

			var btn_first = '', btn_pre = '', btn_next = '', btn_last = '', pgBtn = '', pgBtndiv = '', pgInput = '';
			if (this.showFirstPage) {	//显示首页按钮
				btn_first = this.pn == 1 ? '<a class="disable">'+ this.config.firstPageText +'</a>' : '<a class="pgBtn">'+ this.config.firstPageText +'</a>';
			}
			if (this.showPrePage) {		//显示上一页按钮
				btn_pre = this.pn == 1 ? '<a class="disable">'+ this.config.prePageText +'</a>' : '<a class="pgBtn">'+ this.config.prePageText +'</a>';
			}
			if (this.showLastPage) {	//显示尾页按钮
				btn_last = this.pn == this.total ? '<a class="disable">'+ this.config.lastPageText +'</a>': '<a class="pgBtn">'+ this.config.lastPageText +'</a>';
			}
			if (this.showNextPage) {	//显示下一页按钮
				btn_next = this.pn == this.total ? '<a class="disable">'+ this.config.nextPageText +'</a>' : '<a class="pgBtn">'+ this.config.nextPageText +'</a>';
			}

			if (this.total <= this.showMax) {		// 总页码小于显示Max
				for (var i = 1; i <= this.total; i++) {
					if (i == this.pn) {
						pgBtn += '<a class="active">'+ i +'</a>'; 
					} else {
						pgBtn += '<a class="pgBtn">'+ i +'</a>'; 
					}
				}
			} else {								// 总页码大于显示Max
				if (this.pn <= this.showMax / 2 + 1) {
					for (var i = 1; i <= this.showMax; i++) {
						if (i == this.pn) {
							pgBtn += '<a class="active">'+ i +'</a>'; 
						} else {
							pgBtn += '<a class="pgBtn">'+ i +'</a>'; 
						}
					}
					pgBtn += '<a class="active">···</a>'; 
				} else {
					if (this.pn > this.total - parseInt(this.showMax / 2) - 1) {
						pgBtn += '<a class="active">···</a>';
						var p = this.total - this.showMax + 1;
						for (var i = p; i <= this.total; i++) {
							if (i == this.pn) {
								pgBtn += '<a class="active">'+ i +'</a>'; 
							} else {
								pgBtn += '<a class="pgBtn">'+ i +'</a>'; 
							}
						}
					} else {
						pgBtn += '<a class="active">···</a>';
						if (this.showMax % 2) {
							var p = this.pn - parseInt(this.showMax / 2);
						} else {
							var p = this.pn - parseInt(this.showMax / 2) + 1;
						}
						for (var i = p; i < this.showMax + p; i++) {
							if (i == this.pn) {
								pgBtn += '<a class="active">'+ i +'</a>'; 
							} else {
								pgBtn += '<a class="pgBtn">'+ i +'</a>'; 
							}
						}
						pgBtn += '<a class="active">···</a>';
					}
				}
			}

			pgBtndiv += '<div id="pgBtndiv">'+ btn_first + btn_pre + pgBtn + btn_next + btn_last +'</div>';
			$('#cPager').append(pgBtndiv);

			if (this.showGotoPage) {
				pgInput += '<div id="pgInput"> 共'+ this.total +'页，'+' 跳到第 <input type="text" id="gotopage"> 页'+
							' <button id="gotoBtn" onclick="$.cPager.gotopage()">'+ $.cPager.config.gotoBtnText +'</button></div>';
				$('#cPager').append(pgInput);
			}
		},
		// 用户设置
		user: function (conf) {
			this.pn = conf.pn ? conf.pn : this.pn;
			this.total = conf.total ? conf.total : this.total;
			this.showMax = conf.showMax ? conf.showMax : this.showMax;
			this.showFirstPage = conf.showFirstPage != undefined ? conf.showFirstPage : this.showFirstPage;
			this.showLastPage = conf.showLastPage != undefined ? conf.showLastPage : this.showLastPage;
			this.showPrePage = conf.showPrePage != undefined ? conf.showPrePage : this.showPrePage;
			this.showNextPage = conf.showNextPage != undefined ? conf.showNextPage : this.showNextPage;
			this.showGotoPage = conf.showGotoPage != undefined ? conf.showGotoPage : this.showGotoPage;
		},
		// 页面跳转
		gotopage: function () {
			var pgNum = $("#gotopage").val();
			console.log(pgNum);
		}
	}
})(jQuery);