var scrollTop,winWidth,bodyHeight,winHeight;

//获得浏览器窗口当前宽度
// function getWinWidth(){
// 	if (window.innerWidth){
// 		winWidth = window.innerWidth;	
// 		winHeight = window.innerHeight; 	
// 	 }
// 	 else if ((document.body) && (document.body.clientWidth)){
// 	 	winWidth = document.body.clientWidth; 
// 	 	winHeight = document.body.clientHeight;
// 	 }
// 	 return winWidth;
// }

//网站背景图片适配屏幕大小
function bodyBGSize() {
 	 /* body... */ 
 	 var Swid = document.body.offsetWidth,
 	 	 Shei = document.body.offsetHeight;
 	 document.body.style.backgroundSize = Swid + "px " + Shei + "px";
 }

//事件绑定与移除
function addHandler (element,type,handler) {
	 // body...  
	 if(element.addEventListener){
	 	element.addEventListener(type, handler,false);
	 }
	 else if(element.attachEvent){
	 	element.attachEvent("on"+type,handler);
	 }
	 else element["on"+type] = handler;
}
function removeHandler(element,type,handler){
	if(element.removeEventListener){
	 	element.removeEventListener(type, handler,false);
	}
	else if(element.detachEvent){
	 	element.detachEvent("on"+type,handler);
	 }
	 else element["on"+type] = null;
}

// 动态将滚动条定位至想要的位置。
// destination表示目的位置的scrollTop,
function scrollTo(destination){
	var timer = null ,
		dis = destination;

	clearInterval(timer);
	timer=setInterval(function(){
		var now = scrollTop;		//目前所在位置的scrollTop
		var speed = (dis - now)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		if(speed == 0){
			clearInterval(timer);
		}
		document.documentElement.scrollTop = scrollTop + speed;
		document.body.scrollTop = scrollTop + speed;
	}, 30);
}	

// 回到顶部
function backTopFun(){
	scrollTo(0);
}	


//浏览器窗口大小变化时，重新定位固定栏和Sidebar
function reloc() {	
	 // body...  
	 var footer = document.getElementById("footer"),
	 	 container = document.getElementById("container"),
	 	 fix_toggle = document.getElementById("fix_toggle"),
	 	 sidebar = document.getElementById("sidebar"),
	 	 hide_toggle = document.getElementById("hide_toggle"),
	 	 Swid = document.body.offsetWidth;

	 if ((Swid > 950) && (hide_toggle.title == "展开个人信息")) {
	 	fix_toggle.style.display = 'block';
	 	sidebar.style.display = 'block';
	 	sidebar.style.left = Swid + "px";
	 	fix_toggle.style.left = (sidebar.offsetLeft - 32) + "px";
	 	container.style.width = [Swid - (Swid - sidebar.offsetLeft)] + "px";
	 } else if((Swid > 950) && (hide_toggle.title == "隐藏个人信息")){
	 	fix_toggle.style.display = 'block';
	 	sidebar.style.display = 'block';
	 	sidebar.style.left = (Swid - 350) + "px";
	 	fix_toggle.style.left = (sidebar.offsetLeft - 32) + "px";
	 	container.style.width = [Swid - (Swid - sidebar.offsetLeft)] + "px";
	 }else {
	 	fix_toggle.style.display = 'none';
	 	sidebar.style.display = 'none';
	 	container.style.width = Swid + "px";
	 }
}


//Sidebar隐藏与出现动态效果
function SidebarToggle(){
	var container = document.getElementById("container"),
		sidebar = document.getElementById("sidebar"),
		fix_toggle = document.getElementById("fix_toggle"),
		hide_toggle = document.getElementById("hide_toggle"),
		targetR = sidebar.offsetLeft + 350,
		targetL = sidebar.offsetLeft - 350,
		timer = null,
		Swid = document.body.offsetWidth;

		if(hide_toggle.title == "展开个人信息"){		//展开个人信息面板
			hide_toggle.innerHTML = "&#xe61a;";
			hide_toggle.title = "隐藏个人信息";

			clearInterval(timer);
			timer=setInterval(function(){
				var speed = (sidebar.offsetLeft - targetL)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);

				if(speed == 0){
					clearInterval(timer);
				}
				sidebar.style.left = (sidebar.offsetLeft - speed) + 'px';
				fix_toggle.style.left = (sidebar.offsetLeft - 32) + 'px';
				container.style.width = [Swid - (Swid - sidebar.offsetLeft)] + "px";
			}, 30);
		}
		else if (hide_toggle.title == "隐藏个人信息") {
			hide_toggle.innerHTML = "&#xe61b;";
			hide_toggle.title = "展开个人信息";

			clearInterval(timer);
			timer=setInterval(function(){
				var speed = (sidebar.offsetLeft - targetR)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);

				if(speed == 0){
					clearInterval(timer);
				}
				sidebar.style.left = (sidebar.offsetLeft - speed) + 'px';
				fix_toggle.style.left = (sidebar.offsetLeft - 32) + 'px';
				container.style.width = [document.body.offsetWidth - (document.body.offsetWidth - sidebar.offsetLeft)] + "px";
			}, 30);
		}
}

//浏览器加载完毕执行，绑定相应事件处理程序，并根据浏览器大小定位固定栏和Sidebar
window.onload = function() {
	 /* body... */ 
	var	hide_toggle = document.getElementById("hide_toggle"),	
		searchInput = document.getElementById("bdcsMain"),
	    backTop = document.getElementById("back_top");
	scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

	backTop.style.display = 'none' ;

	addHandler(window,"resize",bodyBGSize);
	addHandler(window,"resize",reloc);

	addHandler(hide_toggle,"mouseover",function(){		//固定栏展开个人信息切换
			if(this.title != "隐藏个人信息")
			{this.innerHTML = "&#xe616;";}
		});
	addHandler(hide_toggle,"mouseout",function(){
		if(this.title != "隐藏个人信息")
			{this.innerHTML = "&#xe61b;";}
		}); 
	addHandler(hide_toggle,"click",SidebarToggle);

	addHandler(window,"scroll",function(){
		scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>=140){
			backTop.style.display='inline-block';
		}else{
			backTop.style.display='none';
		}
	});
	
	addHandler(searchInput,"focus",function () {
		 /* body... */ 
		 var searchIcon = document.getElementById("SearchIcon");
		 searchIcon.style.fontWeight = 'bold';
	});

	addHandler(searchInput,"blur",function () {
		 /* body... */ 
		 var searchIcon = document.getElementById("SearchIcon");
		 searchIcon.style.fontWeight = 'normal';
	})
	addHandler(backTop,"click",backTopFun);

	reloc();
	bodyBGSize();
}

