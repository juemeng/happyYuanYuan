##### 包括但不限于以下内容
> 本文假定阅读者都具备
基本的搜索，下载，安装，配置开发环境能力
基本的操作系统，浏览器，服务端，前端概念
基本掌握一门语言，能够开发web项目
无废话的含义就是：不包括工具下载、安装、技术概念介绍、如何引用。图片只贴必要的，直接游。
  
- **front**
  * reactjs / angular2
  * webpack / browserigy / jspm
  * cssnext / postcss
- **server**  
  * nodejs / asp.net 5
- **数据库**
  * mongodb
- **editor**
  * Visual Studio Code (跨平台)

> note: 用 ‘/’ 隔开的技术会选择其中之一，不排除全部游一遍

##### 第一天

1. 搭建开发环境
 * mac还是win？
 > 用VSCode编写前端以及NodeJS 在win下和mac下没有什么不同，其他要用到技术在不同平台的用法是完全一样的。随意选择就好。本系列第一天在windows上，后面会和mac互相切换来继续。

  * 工欲善其事，必先利其器。不管你以前习惯使用哪种IDE或者文本编辑器，肯定有习惯了的热键，第一步就是先把你习惯的热键在VSCode里配一下，VSCode使用json来保存配置，等后面切换到mac/linux，我们可以直接使用这个配置。如何配热键，请自行移步官网看教程。
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/1076822-9543ccaac9f5ab2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 * step by step
   在磁盘上创建一个文件夹，来当做我们开发的目录。这一步我们可以现在github上创建一个公开的repository,然后clone到本地磁盘。后面我们的代码放到github上来托管。我创建了一个叫做simplyplay(简单游)的repo，然后clone到本地
  `git clone https://github.com/angrymoto/simplyplay.git`
  开启VSCode，打开simplyplay文件夹，在里面新建一个文件夹，起名叫：web,这个后面用来放前端的东西。建好后，添加一个index.html

![open folder](http://upload-images.jianshu.io/upload_images/1076822-fec91fde9e61bf36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![create new file](http://upload-images.jianshu.io/upload_images/1076822-31b1134a740f1645.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    <html>
      <head>
        <title>入门粗略游</title>
        <script type="text/javascript" src="src/react.min.js"></script>
        <script type="text/javascript" src="src/react-dom.min.js"></script>
      </head>
      <body>
        <div id="content"></div>
      </body>
    </html>

引用react.js和react-dom.js (可以从CDN引用)
`<script src="http://cdn.bootcss.com/react/0.14.3/react.min.js"></script>`
`<script src="http://cdn.bootcss.com/react/0.14.3/react-dom.min.js"></script>`

我们现在有了一个简单的页面并引用了react
现在来配置一下VSCode的调试环境，VSCode支持调试node和asp.net 5，我们现在来添加Chrome Debugger。
按Ctrl+P，在弹出框中输入一个问号“?”，选择ext install,安装chrome debugger

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/1076822-b3444888e41bc742.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>因为我们要用react，或者有可能也会用到angular2,所以安装扩展的时候，就把react，jsx，angular2相关的代码帮助工具都装一下
`ext install ` -- 用关键字搜索

装完chrome debugger之后，直接按F5，会弹出刚才的全局命令窗口，可以选择chrome，将会在目录下生成.vscode文件夹，并且生成launch.json配置文件

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/1076822-61e7fe9878bcc3ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 关于launch.json文件，name就是选项的名字，会出现在绿色小箭头旁边的下拉框里，用来从多个调试器里选择
![launch.json](http://upload-images.jianshu.io/upload_images/1076822-a3cbec8ae0b0493c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
后面我们会在里面加上node的调试配置，现在先留这一个，
然后把`file: "index.html"`改成`url: "http://127.0.0.1:8080/index.html"`
因为我们要用一个带监听的web服务器来承载，每次改动页面之后会自动刷新。

从目录打开一个命令行

![open command line](http://upload-images.jianshu.io/upload_images/1076822-b742b58fdb3c93c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
`npm install -g live-server`  --- 安装这个工具
安装完之后在要监视的目录下，运行，会自动打开index.html并监视，本目录下任何文件变化，都会刷新页面。

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/1076822-1343c11893ac7b70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)