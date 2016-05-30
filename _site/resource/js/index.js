var scrollTop,winWidth,bodyHeight,winHeight;

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

function preloc() {	
	 // body...  
	 var footer = document.getElementById("footer"),
	 	 fix_toggle = document.getElementById("fix_toggle");

	 if (window.innerWidth){
		winWidth = window.innerWidth;	
		winHeight = window.innerHeight; 	
	 }
	 else if ((document.body) && (document.body.clientWidth)){
	 	winWidth = document.body.clientWidth; 
	 	winHeight = document.body.clientHeight;
	 }

	 if (winWidth>1100) {		//当屏幕宽度很小时，隐藏右侧固定栏
	 	fix_toggle.style.display = 'block';
	 } else {
	 	fix_toggle.style.display = 'none';
	 }

	 if(document.body.offsetHeight < winHeight){  //当主体部分内容很少时，保证footer位于页面最底部
	 	footer.style.position = 'absolute';
	 	footer.style.bottom = 0;
	 	footer.style.width = winWidth+'px';
	 }
	 else {footer.style.position = 'static';}
}


function backTopFun(){
	var now=scrollTop;
	var speed=(0-now)/5;
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	if(scrollTop > 0){
		document.documentElement.scrollTop=scrollTop+speed;
		document.body.scrollTop=scrollTop+speed;
		setTimeout("backTopFun()", 30);
	}
}	

function SidebarToggle(){
	var sidebar = document.getElementById("sidebar"),
		hide_toggle = document.getElementById("hide_toggle"),
		targetR = sidebar.offsetLeft + 350,
		targetL = sidebar.offsetLeft - 350,
		timer = null;

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
			}, 30);
		}
}

	// 	Swid = sidebar.offsetLeft ;
	// 	speed = (350-Swid)/5;
	// speed=speed>0?Math.ceil(speed):Math.floor(speed);
	// if((hide_toggle.innerHTML == "&#xe616;") || (hide_toggle.innerHTML == "&#xe61b;")){		//展开个人信息面板
	// 	hide_toggle.innerHTML == "&#xe61a;";
	// 	if(speed != 0){
	// 		sidebar.offsetLeft = Swid + speed;
	// 		setTimeout("SidebarToggle", 30);
	// 	}
	// }else if (hide_toggle.innerHTML == "&#xe61a;") {		//隐藏个人信息面板
	// 	hide_toggle.innerHTML == "&#xe61b;";
	// }


window.onload = function() {
	 /* body... */ 
	var	hide_toggle = document.getElementById("hide_toggle"),	
	    backTop = document.getElementById("back_top");

	preloc();

	addHandler(window,"resize",preloc);

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
			backTop.style.display='block';
		}else{
			backTop.style.display='none';
		}
	});

	addHandler(backTop,"click",backTopFun);

	// addHandler(backTop,"click",function(){
	// 	clearInterval(timer);
	// 	timer=setInterval(function(){
	// 		var now=scrollTop;
	// 		var speed=(0-now)/5;
	// 		speed=speed>0?Math.ceil(speed):Math.floor(speed);
	// 		if(scrollTop==0){
	// 			clearInterval(timer);
	// 		}
	// 		document.documentElement.scrollTop=scrollTop+speed;
	// 		document.body.scrollTop=scrollTop+speed;
	// 	}, 30);
	// });

}

