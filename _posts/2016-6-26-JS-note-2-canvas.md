---
layout: post
category: Javascript
title: Javascripy学习笔记二——canvas绘图
---

# 概述
`canvas`画布元素是H5新增的元素，可以使用Javascript进行绘制图像。标签开始和结束标签中的内容时当浏览器不支持canvas元素时显示的内容。
`canvas`元素有`width`和`height`值，指定画布显示的大小。这里要注意的是，这两个属性不能用`CSS`进行指定，只能通过html和javascript因为在Canvas元素的内部存在一个名为2d渲染环境（2d redering context）的对象，所以，通过CSS设置画布尺寸会引起奇怪的效果。
举个例子。我要设置一个`300*200`大小的画布，并在其中绘制一个`22*30`的坦克。

我先在HTML中设置好canvas的大小：

	<canvas id="mycanv" width="300" height="200" style="background-color:black;"></canvas>

正常显示，没有问题。

![html](/resource/image/2016-6-26(1).png)

再来，我用CSS设置画布的大小：

{% highlight HTML %}
	<style type="text/css">
		#mycanv{background-color: black;width: 300px;height: 200px;}
	</style>
	
	<canvas id="mycanv"></canvas>
{% endhighlight %}

这时候，问题就来了，虽然从浏览器调试窗口看画布大小仍然为`300*200`，但是可以看到坦克被放大了，这个例子里我的画布大小设置的比较小，当画布很大时，效果更明显，大家可以自己尝试。这就是上面说到的**奇怪的效果**。

![css](/resource/image/2016-6-26(2).png)

最后是用JS来设置画布大小，有两种情况：

{% highlight javascript %}
	var can = document.getElementById("mycanv");

	can.width = 800;
	can.height = 600; 
{% endhighlight %}

这种方法和第一种直接在HTML里设置是一样的，即正常效果。
还有一种情况：

{% highlight javascript %}
	var can = document.getElementById("mycanv");

	can.style.width = 300 + 'px';
	can.style.height = 200 + 'px';
{% endhighlight %}

这是一种类CSS的指定大小的方式，所以和CSS直接指定是一样的效果，同样产生了不必要的缩放效果。
所以，最好的方式是直接在HTML里设置画布的大小，简单粗暴。

在接下来要讲绘图之前，我们得先取得这个所谓的2D渲染环境对象：
	
	var cxt = can.getContext('2d');

# 基本操作：填充和描边
2D上下文的基本绘图操作是填充和描边。这分别取决于两个属性：`fillstyle`和`strokestyle`。这两个属性的值可以是字符串，渐变对象和模式对象。默认值都为"#000"。

- 字符串即为CSS的任意指定颜色的字符串形式。
 
 - 渐变对象由`createLinearGradient()`方法创建。接受四个参数：起点x，y坐标，终点x，y坐标。然后用`addColorStop()`方法指定色标。接受两个参数：色标位置（0到1之间）和颜色值。

- 模式即重复的图像。调用`createPattern`方法传入两个参数：一个`<img>元素`和一个表示如何重复的字符串，值包括`repeat`,`repeat-x`,`repeat-y`和`no-repeat`。

# 绘制矩形

- `fillRect(x,y,width,height)`，绘制的矩形会填充由`fillstyle`指定的颜色；
- `strokeRect(x,y,width,height)`，绘制的矩形会由`strokestyle`指定的颜色描边；描边线条宽度由`lineWidth`控制；
- `clearRect(x,y,width,height)`，清除画布上的矩形区域。
其中，x,y为矩形的坐标，width和height分别为矩形的宽度和高度。

# 绘制路径

- `beginPath()`表示开始绘制新路径；
- `arc(x,y,r,startAngle,endAngle,counterclockwise)`以（x,y）为圆心绘制半径为r的圆弧，起始和结束弧度由后两个参数指定（注意弧度值用`Math.PI`指定，介于0到2PI之间）,最后一个参数表示绘制时是否按逆时针方向，false为按顺时针方向。
- `moveTo(x,y)`将绘图游标移动到（x,y）；
- `lineTo(x,y)`从上一点开始绘制一条直线，到（x,y）；
- `closePath()`绘制一条连接到路径起点的线条，结束绘制路径；
- `fill()`使用`fillstyle`填充；
- `stroke()`使用`strokestyle`描边
-  `isPointInPath()`接受（x,y）坐标用于在路径关闭之前确定画布上的一点是否在路径上。

# 绘制文本

- `fillText(string,x,y)`；
- `strokeText(string,x,y)`;
以上两个方法都以下面三个属性为基础:
- `font`表示文本样式，和CSS中指定文本样式一致；
- `textAlign`文本对齐方式，包括`start`,`end`,`left`,`right`,`center`,影响x的位置。如`start`表示从x值处开始绘制，`center`表示x值为文本的中心;
- `textBaseline`包括`top`,`middle`,`bottom`,影响y的位置。`top`y坐标表示文本顶端位置。

# 变换
- `rotate(angle)`围绕原点旋转angle弧度；
- `scale(X,Y)`缩放图像，x方向乘以X，y方向上乘以Y，默认均为1.0；
- `translate(x,y)`将坐标原点移动到（x,y），初始值为（0，0）；
- `save()`入栈保存上下文当前属性及变换的组合,不保存上下文内容，可重复调用；
- `restore()`出栈将最近一次的保存组合恢复，可重复调用；

# 绘制图像

- `draImage(image,x,y)`在（x,y）处绘制image图像；
- `drawImage(image,x,y,width,height)`在（x,y）处绘制大小为`width*height`的图像；
- `drawImage(image,x,y,width,height,X,Y,WIDTH,HEIGHT)`把image图像从（x,y）开始的大小为`width*height`的图像绘制到上下文中（X,Y）开始的大小为`WIDTH*HEIGHT`的图像。

# 合成

- `globalAlpha`介于0到1之间，用于指定所有绘制的透明度，默认值为0；

- `globalCompositionOperation`表示后绘制的图形怎样与先绘制的图形结合。包括以下值：


	`source-over`默认值，表示后绘制的图形位于先绘制的图形上方；

	`source-in`表示后绘制的图形与先绘制的图形重叠的部分可见，其他部分完全透明；

	`source-out`表示后绘制的图形与先绘制的图形不重叠的部分可见，先绘制的图形完全透明；

	`source-atop`表示后绘制的图形与先绘制的图形重叠的部分可见，先绘制图形不受影响；

	`destination-over`后绘制的图形位于先绘制的图形下方，只有之前透明像素下的部分才可见；

	`destination-in`后绘制的图形位于先绘制的图形下方，两者不重叠的部分完全透明；

	`destination-out`后绘制的图形擦除与先绘制的图形重叠的部分；

	`destination-atop`后绘制的图形位于先绘制的图形下方，两者不重叠的地方，先绘制的图形变透明；

	`lighter`后绘制的图形与先绘制的图形重叠部分值相加，使该部分变亮。

# 实例：绘制坦克

需要绘制的坦克各参数如下：

![tank](/resource/image/2016-6-26(3).png)

如上图所示，我们的坦克基本上是由三个矩形和一个圆形一个线段组成，每个部件的尺寸进行了标记，单位为px,下面我们用上面讲到的内容来画出我们的坦克，注意：我们在画坦克的时候应该选择一个参考点，这里我们选择的是坦克的左上角。

	{% highlight javascript %}
	<canvas id="tankMap" width="400px" height="300px" style="background-color:black"></canvas>
	<script type="text/javascript">
		//得到画布
		var canvas1 = document.getElementById("tankMap");
	
		//定义一个位置变量
		var heroX = 80;
		var heroY = 80;
	
		//得到绘图上下文
		var cxt = canvas1.getContext("2d");
		//设置颜色
		cxt.fillStyle="#BA9658";
		//左边的矩形
		cxt.fillRect(heroX,heroY,5,30);
		//右边的矩形
		cxt.fillRect(heroX+17,heroY,5,30);
		//画中间的矩形
		cxt.fillRect(heroX+6,heroY+5,10,20);
		//画出坦克的盖子
		cxt.fillStyle="#FEF26E";
		cxt.arc(heroX+11,heroY+15,5,0,2*Math.PI,true);
		cxt.fill();
		//画出炮筒
		cxt.strokeStyle="#FEF26E";
		cxt.lineWidth=1.5;
		cxt.beginPath();
		cxt.moveTo(heroX+11,heroY+15);
		cxt.lineTo(heroX+11,heroY);
		cxt.closePath();
		cxt.stroke();
	</script>
	{% endhighlight %}