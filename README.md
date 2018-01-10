# cPager
使用前必须先引入jQuery

设置总页码即可使用
```javascript
	$.cPager.show({
		total: 17
	});
```
可以设置以下参数
```javascript
	$.cPager.show({
		total: 17,
		// pn: 1,		//默认显示的页码
		// pnName: "page",	//url中显示的key
		// showMax: 7,		//最多显示多少页码
		// color: "#FF4400",	//显示的颜色
		// showFirstPage: true,	//是否显示“首页”按钮
		// showLastPage: true,	//是否显示“尾页”按钮
		// showPrePage: true,	//是否显示“上一页”按钮
		// showNextPage: true,	//是否显示“下一页”按钮
		// showGotoPage: true,	//是否显示“跳转到页码”输入框及按钮
		/*config: {
			// firstPageText: "首页",	//首页按钮显示的文字
			// lastPageText: "尾页",	//尾页按钮显示的文字
			// prePageText: "上一页",	//上一页按钮显示的文字
			// nextPageText: "下一页",	//下一页按钮显示的文字
			// gotoBtnText: "确定"		//确定按钮显示的文字
		}*/
	});
```

查看demo：https://zhchi-me.github.io/cPager/demo/index.html