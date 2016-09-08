---
layout: post
categories: 前端综合
title: 前端常见面试题
---

偶然在前端大全上看到一篇帖子，但是原文只有题目，没有答案。我选取了其中一些问题过来，并附上相应的答案。更多的相关问题请看原文[Front End Developer Questions][1]。

[1]:http://markyun.github.io/2015/Front-end-Developer-Questions/#html

# HTML部分

- ### `Doctype`作用？严格模式与混杂模式如何区分？它们有何意义?
	1. 告诉浏览器使用什么样的html或xhtml规范来解析html文档

	2. 对浏览器的渲染模式产生影响；不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析，所以Doctype是非常关键的，尤其是在 IE 系列浏览器中，由DOCTYPE 所决定的 HTML 页面的渲染模式至关重要。
	
	3.如果在文档开始处没有发现文档类型声明，则所有浏览器都会默认开启混杂模式。

- ### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

	前面两个就不多说了。空元素一般指的是无须闭合的标签，如：`<br/>`、`<hr/>`、`<input/>`、`<img/>`、`<link/>`、`<meta/>`等。

- ### 页面导入样式时，使用`link`和`@import`有什么区别？

	1. `link`是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；`@import`属于CSS范畴，只能加载CSS。

	2. `link`引用CSS时，在页面载入时同时加载；`@import`需要页面网页完全载入以后加载。所以有时候浏览`@import`加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候还挺明显.

	3. `link`是XHTML标签，无兼容问题；`@import`是在CSS2.1提出的，低版本的浏览器不支持。

	4. `link`支持使用Javascript控制DOM去改变样式；而`@import`不支持。

	5. `@import`可以在css中再次引入其他样式表，比如可以创建一个主样式表，在主样式表中再引入其他的样式表.

- ### 介绍一下你对浏览器内核的理解？

	主要分成两部分：`渲染引擎`(layout engineer或Rendering Engine)和`JS引擎`
    
    - **渲染引擎**：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核;
    
    - **JS引擎**：解析和执行 javascript 来实现网页的动态效果。最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

- ### 常见的浏览器内核有哪些？

	1. `Trident`(IE内核)。包括`IE`、`傲游`、`猎豹``世界之窗浏览器`、`Avant`、`腾讯TT`、`Netscape 8`、`NetCaptor`等。

	2. `Gecko`(Firefox内核)。包括 `Mozilla Firefox`、`Mozilla SeaMonkey`等。

	3. `Webkit`(Safari内核,Chrome内核原型)。包括`Google Chrome`、`360极速浏览器`以及`搜狗高速浏览器`。

	4. `Presto`(Opera前内核) (已废弃)

- ### html5有哪些新特性、移除了哪些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

	- 处理兼容问题有两种方式：

		1. IE8/IE7/IE6支持通过`document.`方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签。

		2. 使用是`html5shim`框架

		具体可参考这篇文章 [HTML5新增元素如何兼容旧浏览器有哪些方法][2]

		[2]:http://www.jb51.net/html5/163906.html

	- 区分：DOCTYPE声明\新增的结构元素\功能元素

- ### 简述一下你对HTML语义化的理解？

	1. **什么是HTML语义化？**
	
		基本上都是围绕着几个主要的标签，像标题（H1~H6）、列表（li）、强调（strong em）等等。

		根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。


	2. **为什么要语义化？**

	- 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；

	- 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；

	- 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

	- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

	- 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

- ### HTML5的离线储存怎么使用，工作原理能不能解释一下？
	
	可参考这篇文章：[HTML5离线存储和本地缓存][3]

	[3]:http://www.cnblogs.com/xqhppt/p/4157862.html

- ### 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？

	- 在线的情况下，浏览器发现html头部有`manifest`属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储;

	- 离线的情况下，浏览器就直接使用离线存储的资源。

- ### 请描述一下`cookies`，`sessionStorage`和`localStorage`的区别？

	1. `cookie`数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而`sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。

	2. 存储大小限制也不同，`cookie`数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。`sessionStorage`和`localStorage`虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

	3. 数据有效期不同，`sessionStorage`：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；`localStorage`：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据;`cookie`只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

	4. 作用域不同，`sessionStorage`不在不同的浏览器窗口中共享，即使是同一个页面；`localStorage` 在所有同源窗口中都是共享的；`cookie`也是在所有同源窗口中都是共享的。

- ### `iframe`有那些缺点？

	现在已经可以用`Ajax`替代框架使用了。详细请看这篇文章：[iframe的优缺点][4] 。

	[4]:http://msdwd.blog.163.com/blog/static/21591913620135810831211/

- ### `Label`的作用是什么？是怎么用的？
	
	`Label`中有两个属性是非常有用的,一个是`for`、另外一个就是`ACCESSKEY`了。 

	- **for属性**

		功能：表示Label标签要绑定的HTML元素，你点击这个标签的时候，所绑定的元素将获取焦点。

		用法：	`<Label FOR="InputBox">姓名</Label><input ID="InputBox" type="text">` 

	- **ACCESSKEY属性**

		功能：表示访问Label标签所绑定的元素的热键，当您按下热键，所绑定的元素将获取焦点。

		用法：	`<Label FOR="InputBox" ACCESSKEY＝"N">姓名</Label><input ID="InputBox" type="text">`

	- **局限性**

		accessKey属性所设置的快捷键不能与浏览器的快捷键冲突，否则将优先激活浏览器的快捷键。 

	- **TIPS**

		要将 LABEL 绑定到其它的控件，请将 LABEL 元素的 FOR 属性设置为与该控件的 ID 相同。将 LABEL 绑定到控件的 NAME 属性毫无用处。但是，要提交表单，你必须为 LABEL 元素所绑定到的控件指定 NAME。 

		如果用户单击`label`，则会先触发LABEL上的`onclick`事件，然后触发由`for`属性所指定的控件上的 onclick 事件。按下`LABEL`设定的快捷键将设置焦点但并不触发 onclick 事件。 

- ### HTML5的`form`如何关闭自动完成功能？

	含义：当你往输入框输入内容的时候，浏览器会从你以前的同名输入框的历史记录中查找出类似的内容并列在输入框下面，这样就不用全部输入进去了，直接选择列表中的项目就可以了。

	但有时候我们希望关闭输入框的自动完成功能，例如当用户输入内容的时候，我们希望使用AJAX技术从数据库搜索并列举而不是在用户的历史记录中搜索。

	关闭输入框的自动完成功能有3种方法：

	1. 在`IE`的`Internet选项`菜单里的内容--自动完成里面设置

	2. 设置`Form`的`autocomplete`为"on"或者"off"来开启或者关闭自动完成功能

	3. 设置`输入框`的`autocomplete`为"on"或者"off"来开启或者关闭该输入框的自动完成功能

- ### 如何实现浏览器内多个标签页之间的通信?

	主要还是通过`localStorage`设置登录标志，并为`window`指定监听程序，当该标志改变时对网页进行重定向至登录界面或者给出其他提示。具体可参考这篇文章：[浏览器跨标签通讯][5]

	[5]:http://web.jobbole.com/82225/

- ### 实现不使用`border`画出1px高的线，在不同浏览器的标准模式和怪异模式下都能保持同一效果。

	<div style="height:1px;overflow:hidden;background:red"></div>

	自己查看源代码吧~（手动滑稽）

-------------

# CSS部分

- ### 介绍一下CSS的盒子模型。

	1. 有两种:`IE盒子模型`、`标准W3C盒子模型`；低版本的IE盒子模型的`content`部分包含了`border`和`pading`，即`box-sizing: border-box`；标准的则为`box-sizing:content-box`；

	2. 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)。

- ### `CSS`选择符有哪些？哪些属性可以继承？

	- id选择器（#classId）
	- 类选择器（.className）
	- 标签选择器（div，h1，p，span，table）
	- 相邻选择器（h1 + p）
	- 子选择器（ul > li）
	- 后代选择器（li a）
	- 通配符选择器（*）
	- 属性选择器（a[rel = "external"]）
	- 伪类选择器（a:hover，li:nth-child）
	- 可继承的样式：font-size，font-family，color，UL，LI，DL，DD，DT
	- 不可继承的样式：border，padding，margin，width，height

- ### `CSS`优先级算法以及权重如何计算？

	- 就近原则，同权重情况下以样式定义最近者为准；
	- 载入样式以最后载入的定位为准；
	- 优先级：`!important` > `id` > `class` > `tag`  ;  `important` 比`内联`优先级高

	以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100

	如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现

- ### `CSS3`新增伪类有那些？

	- `p:first-of-type`选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
	- `p:last-of-type`选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
	- `p:only-of-type`选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
	- `p:only-child`选择属于其父元素的唯一子元素的每个 <p> 元素。
	- `p:nth-child(2)`选择属于其父元素的第二个子元素的每个 <p> 元素。
	- `:enabled`:disabled 控制表单控件的禁用状态。
	- `:checked`单选框或复选框被选中。

- ### `display`有哪些值？说明他们的作用。
	
	主要有`inline`,`inline-block`,`block`,`table`系,`flex`等。

- ### `position`的值`relative`、`absolute`以及`fixed`定位原点是？
	
	1. `relative`（相对定位）的定位原点是以自己本身原来所在位置做为原点的。

	2. `absolute`（绝对定位）的定位原点是离自己这一级元素最近的一级position设置为absolute或者relative的父元素的左上角为原点的，（当然，如果自己的所有父元素都没有设置position，那么就以body为定位原点）

	3. `fixed`生成绝对定位的元素，相对于浏览器窗口进行定位

- ### 请解释一下`CSS3`的`Flexbox`（弹性盒布局模型），以及适用场景？

	参考阮一峰的这两篇文章：[Flex 布局教程：语法篇][6] 和 [Flex 布局教程：实例篇][7]。

	[6]:http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool
	[7]:http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

- ### 用纯`CSS`创建一个三角形的原理是什么？

	1. div+css画三角形代码原理采用的是均分原理。

	2. 在矩形的直角，两条边的样式要均分，比如左上角`border-top`和`border-left`的样式要均分如果`border-left`无色透明，`border-top`有色，就会出来一个45度的锐角。

	源码如下：

	{% highlight css %}
	.caret {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: 2px;
		vertical-align: middle;
		border-top: 4px solid;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
	}
	{% endhighlight %}

可参考这篇文章：[CSS实现三角形图标的原理][8]。

[8]:http://www.tuicool.com/articles/3eaINn

- ### `li`与`li`之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
	
	请参考我博客的另一篇文章：[去除inline-block元素间间距的N种方法][9]。

	[9]:http://zibiaowu.github.io/2016/06/01/remove-inline-block-margin/

- ### CSS里的`visibility`属性有个`collapse`属性值是干嘛用的？在不同浏览器下以后什么区别？

	对于CSS里的`visibility`属性,大多时候，你会把它的值设置成`visible`(这是所有页面元素的缺省值)，或者是`hidden`。后者相当于`display: none`，但仍然占用页面空间。

	其实visibility可以有第三种值，就是`collapse`。它的表现跟`hidden`是一样的。但例外的是，如果这个元素是table相关的元素，它的表现却跟`display: none`一样，也就是说，它们占用的空间也会释放。

	但遗憾的是，各种浏览器对`collapse`值的处理方式不一样。

	- 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。

	- 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

- ### `position`跟`display`、`margin collapse`、`overflow`、`float`这些特性相互叠加后会怎么样？

	分为以下两点：

	1. `display`、`position` 和`float`的相互关系;

	2. `position`跟`display`、`overflow`、`float`下的`margin collapse`(外边距折叠)。

	详细请看这篇文章：[position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？][10]

	[10]:http://www.cnblogs.com/jackyWHJ/p/3756087.html

- ### 浏览器是怎样解析CSS选择器的？

	**从后往前判断**。

	浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，直到真个选择器都匹配完，还在集合中的元素就匹配这个选择器了。

	举个例子，有选择器：
		
		body.ready #wrapper > .lol233

	先把所有`class`中有`lol233`的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的 parent id 不为 #wrapper 则把元素从集合中删去。 再向上，从这个元素的父元素开始向上找，没有找到一个 tagName 为 body 且 class 中有 ready 的元素，就把原来的元素从集合中删去。

	为什么从后往前匹配因为效率和文档流的解析方向。效率不必说，找元素的父亲和之前的兄弟比遍历所有儿子快而且方便。关于文档流的解析方向，是因为现在的 CSS，一个元素只要确定了这个元素在文档流之前出现过的所有元素，就能确定他的匹配情况。应用在即使 html 没有载入完成，浏览器也能根据已经载入的这一部分信息完全确定出现过的元素的属性。

- ### 在网页中应该使用奇数还是偶数的字体？为什么呢？

	坐看知乎大神的各种发言：[现在网页设计中的为什么少有人用 11px、13px、15px 等奇数的字体？][11]。

	[11]:http://www.zhihu.com/question/20440679

- ### 元素竖向的百分比设定是相对于容器的高度吗？

	当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如`padding-top`, `padding-bottom`, `margin-top`, `margin-bottom`等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

- ### 全屏滚动的原理是什么？用到了`CSS`的那些属性？
	
	图片轮播原理,只不过图片宽高100%、超出隐藏、调整比例适应屏幕大小。

- ### `::before`和`:after`中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

	- 单冒号(:)用于CSS3**伪类**;
	- 双冒号(::)用于CSS3**伪元素**。

	伪元素由双冒号和伪元素名称组成。双冒号是在css3规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类，比如:first-line、:first-letter、:before、:after等。

	对于CSS2之前已有的伪元素，比如:before，单冒号和双冒号的写法::before作用是一样的。

	提醒，如果你的网站只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全

- ### 如何修改`chrome`记住密码后自动填充表单的黄色背景 ？
	
	[Chrome 自动填充的表单是淡黄色的背景，有方法自定义吗][12]

	[12]:https://segmentfault.com/q/1010000000671971

- ### 你对`line-height`是如何理解的？

	[css行高line-height的一些深入理解及应用][13]

	[13]:http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/

- ### 设置元素浮动后，该元素的`display`值是多少？

	自动变成`display:block`。

- ### 怎么让`Chrome`支持小于12px 的文字？

	1. 使用`-webkit-text-size-adjust:none`;

	2. 使用`transform:scale()`;
	但是要注意一点，如果设置这个属性的元素有背景的话，给这个属性会使背景也随着变化，所以，我们可以再套个`<span>`，而且`transform:scale()`这个属性只为可以缩放可以定义宽高的元素，而span是行内元素,因此我们需要给`span`元素定义一个`display:block`,这样就可以了。

------------

# JavaScript部分

- ### `JavaScript`原型，原型链 ? 有什么特点？
	
	每个对象都会在其内部初始化一个属性，就是`prototype`(原型)，当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，于是就这样一直找下去，也就是我们平时所说的原型链的概念。

	特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变。

	当我们需要一个属性时，JavaScript引擎会先看当前对象中是否有这个属性，如果没有的话，就会查找它的prototype对象是否有这个属性，如此递推下去，一致检索到Object内建对象。

- ### `JavaScript`有几种类型的值？
	
	- **栈**：原始数据类型（Undefined，Null，Boolean，Number，String）

	- **堆**：引用数据类型（对象、数组、函数）

	两种类型的区别：存储位置不同

	原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

- ### `Javascript`如何实现继承？创建对象的几种方式？

	参考我另一篇文章：[JavaScript学习笔记之面向对象][20]。

	[20]:http://zibiaowu.github.io/2016/06/26/JS-note-3-OO/

- ### `Javascript`作用链域?

	要明确:JS中没有块级作用域（ES6可以用`let`模拟块级作用域，这里都说的是`var`定义的作用域），而且存在变量提前和函数声明提前。

	当一个函数的执行环境被创立之后，要找某个变量，则会先在当前执行环境中找，如果没有，则在外部函数中找，直到全局对象window中，这就是变量的作用域链。

	详细的可参考这篇帖子：[Js作用域与作用域链详解][22]

	[22]:http://blog.csdn.net/yueguanghaidao/article/details/9568071

- ### 谈谈`this`对象的理解。

	`this`对象是在运行时基于函数的运行环境绑定的：在全局中函数中，this指向window，而当函数被作为某个对象的方法调用时，this等于那个对象。

	**TIPS**

	1. 匿名函数的执行环境具有全局性（包括函数的自执行），因此其this对象通常指向window；
	
	2. 每个函数在被调用时都会自动取得两个特殊变量：`this`和`arguments`。内部函数在搜索这两个变量时，只会搜索到其活动对象为止（参考作用域链），永远不会直接访问外部函数中的这两个变量。

	{% highlight javascript %}
	var name = "The window";

	var object = {
		name : "My Object",

		getNameFunc : function(){
			return function(){
				return this.name;
			}
		}
	}

	alert(object.getNameFunc()());	//The window
	{% endhighlight %}
	
解决方法是把外部作用域的`this`对象保存在另一个变量中，一般为`that`。
	
	{% highlight javascript %}
	var name = "The window";

	var object = {
		name : "My Object",

		getNameFunc : function(){
			var that = this;
			return function(){
				return that.name;
			}
		}
	}

	alert(object.getNameFunc()());	//My Object
	{% endhighlight %}

强烈推荐[JavaScript中的this][25]！

[25]:http://qiutc.me/post/this-this-this-in-javascript.html

- ### `eval`是做什么的？

	它的功能是把对应的字符串解析成JS代码并运行；

	应该避免使用eval，因为不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

- ### `null`，`undefined`的区别？

  - `undefined`:是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined； 
  
  	例如变量被声明了，但没有赋值时，就等于undefined。

  - `null`: 是一个对象(空对象, 没有任何属性和方法)；

  	例如作为函数的参数，表示该函数的参数不是对象；

	**注意**：在验证`null`时，一定要使用`===`，因为`==`无法分别`null`和`undefined`。

- ### `["1", "2", "3"].map(parseInt)`答案是多少？

	[1,NaN,NaN]

	因为`parseInt`需要两个参数`(val,radix)`，其中`radix`表示解析时用的基数。
	map传了3个(element,index,array)，对应的 radix 不合法导致解析失败。

- ### 关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

	1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。

	2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件；

	3. `ev.stopPropagation();`（旧ie的方法 `ev.cancelBubble = true;`）

	**补充**：

	- w3c的绑定事件函数`addEventListener(event,function,useCapture)`的最后一个参数默认是`false`，表示事件在冒泡阶段触发，`true`表示在捕获阶段触发。

	- 不同浏览器处理事件流是不一样的，IE下只支持事件冒泡，而其他大部分浏览器都是同时支持事件冒泡和捕获的。

	- 关于事件，可参考此文章：[浏览器中关于事件的那点事儿][30]

	[30]:http://kb.cnblogs.com/page/199251/

- ### 什么是闭包（closure），为什么要用它？

	闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

	闭包特性：

	1. 函数内再嵌套函数

	2. 内部函数可以引用外层的参数和变量

	3. 参数和变量不会被垃圾回收机制回收

- ### `new`操作符具体干了什么呢?

	1. 创建一个空对象，并且`this`变量引用该对象，同时还继承了该函数的原型。

	2. 属性和方法被加入到`this`引用的对象中。

	3. 新创建的对象由`this`所引用，并且最后隐式的返回`this`。

- ### Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

	`hasOwnProperty`函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。

	使用方法：
	`object.hasOwnProperty(proName)`其中参数`object`是必选项，一个对象的实例。`proName`是必选项，一个属性名称的字符串值。

	如果`object`具有指定名称的属性，那么`hasOwnProperty`函数方法返回 true，反之则返回 false。

- ### js延迟加载的方式有哪些？

	1. defer，给`<script>`标签加上`defer='defer'`属性，仅 IE 支持

	2. async，H5新属性。且仅适用于外部脚本（只有在使用 src 属性时）

	3. 创建 script，插入到 DOM 中，加载完毕后 callBack

	**TIPS**： 

	- 如果 async="async"：JS异步加载，加载完毕后立刻异步执行，不能保证脚本按顺序执行。
	
	- 如果不使用 async 且 defer="defer"：JS异步下载，dom结构解析完(标签 + 样式(内容不一定下载完))才异步执行	 

	- 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本 ，可能会阻塞DOM的构建


- ### 同步和异步的区别?

	同步的概念应该是来自于操作系统中关于同步的概念:
	不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式)。同步强调的是顺序性，谁先谁后；异步则不存在这种顺序性。

	- 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

	- 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。

- ### 如何解决跨域问题?

	`CROS`、`jsonp`、`iframe`、`window.name`、`window.postMessage`、服务器上设置代理页面等。

	这里有一篇文章非常详细：[浅谈web跨域的实现][26]。

	另外，关于jsonp的原理，看这里:[说说JSON和JSONP][31]

	[26]:http://www.cnblogs.com/vajoy/p/4295825.html
	[31]:http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html

- ### `documen.write`和 `innerHTML`的区别?

	`document.write`只能重绘整个页面;`innerHTML`可以重绘页面的一部分。

- ### `JavaScript`中的作用域与变量声明提升？

	见[JavaScript学习笔记之一][21]。

	[21]:http://zibiaowu.github.io/2016/06/01/JS-notes-1/

- ### 那些操作会造成内存泄漏？

	内存泄漏是指任何对象在您不再拥有或需要它之后任然存在。

	垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量，如果一个对象的引用数量为0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

	`setTimeout`的第一个参数使用字符串而非函数的话，会引发内存泄漏。`闭包`、`控制台日志`、`循环`（在两个对象彼此引用且彼此保留时，就会产生一个循环）

- ### `Script`标签放置的位置有什么影响？浏览器会如何解析它们？

	关于JS脚本放置位置和浏览器解析的问题，我觉得这两篇文章写的挺好：[javascript放在head和body的区别][23]，[JS一定要放在Body的最底部么？聊聊浏览器的渲染机制][24]。

	[23]:http://blog.csdn.net/business122/article/details/7954225
	[24]:https://segmentfault.com/a/1190000004292479?_ea=560235

------------------

# 其他问题

- ### 什么叫优雅降级和渐进增强？

	- 渐进增强`progressive enhancement`：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

	- 优雅降级`graceful degradation`：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

	- 区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

- ### 你有用过哪些前端性能优化的方法？

	关于前端性能优化，大家参考YaHoo的黄金法则即可。我这里简单从服务器和前端方面总结一下：

	**服务器端**

	- 合并JS，CSS和图片文件以减少前端http的请求数;

	- 打包，压缩资源文件；

	- 配置好路径，减少重定向，使用CDN等(域名拆分太多会增加DNS查询时间，一般分成3-5个为佳)；

	**前端**

	- 减少DOM操作，尽量使用CSS实现样式和交互；

	- 使用cookie和缓存等

	具体参考[前端优化：雅虎35条][27]以及[【译】唯快不破：Web 应用的 13 个优化步骤][28]

	[27]:http://www.tuicool.com/articles/J3uyaa
	[28]:https://zhuanlan.zhihu.com/p/21417465?refer=no-backend

- ### `http状态码`有那些？分别代表是什么意思？

	**404 Not Found**

- ### 一个页面从输入`URL`到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）

	1. 查找浏览器缓存
	2. DNS解析、查找该域名对应的IP地址、重定向（301）、发出第二个GET请求
	3. 进行HTTP协议会话
	4. 客户端发送报头(请求报头)
	5. 服务器回馈报头(响应报头)
	6. html文档开始下载
	7. 文档树建立，根据标记请求所需指定MIME类型的文件
	8. 文件显示

	浏览器这边做的工作大致分为以下几步：

	- **加载**：根据请求的URL进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图象等）。

	- **解析**：对加载到的资源（HTML、JS、CSS等）进行语法解析，建议相应的内部数据结构（比如HTML的DOM树，JS的（对象）属性表，CSS的样式规则等等）

- ### `Git`知道`branch`,` diff`, `merge`么?

- ### 知道什么是`SEO`并且怎么优化么? 知道各种`meta data`的含义么?

- ### 对前端安全有什么看法？
	
	了解常见web攻击方式及其简单预防，主要为`XSS`和`CSRF`。

	[浅谈前端安全][29]

	[29]:http://www.alibuybuy.com/posts/14111.html