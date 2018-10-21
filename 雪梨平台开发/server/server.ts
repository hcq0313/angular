import express from 'express';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}

const courses = [
    new Course(1,'混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(2,'2017级web开发（二）',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",15,80),
    new Course(3,'2016级测试',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",12,60),
    new Course(4,'2017级软件测试',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(5,'c语言',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(6,'2018级信息素养实践',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(7,'2018级计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",15,80),
    new Course(8,'2017级数据结构',"http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",12,60),
    new Course(9,'18级新生训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(10,'软件过程',"http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",15,100),
    new Course(9,'混合应用开发',"http://usercontent.edu2act.cn/media/team/18-03-14/S3Cjz2Brd9pEroqRDfCLx3.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(10,'2017级网络原理',"http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130",15,100)
]

app.get('/api/courses',(req,res)=>{
    res.json(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});


//=========================================================课程==========================================================
class Course2{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public introduction:string,
        public task:number,
        public person:number,
        public video:string
    ){}
}
const courses2 = [
    new Course2(1,'Github开源之旅视频课程...',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190","完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github",14,3736,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Course2(2,'css3基础',"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190","CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",12,3453,"http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Course2(3,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190","HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。",15,1810,"http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new Course2(4,'Selenlum IDE WEB',"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫",12,2160,"http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"),
    new Course2(5,'扩展ICONIX软件过程实践',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190","ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开",15,2100,"http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Course2(6,'自动化测试入门视频上',"http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE",15,1200,"http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4"),
    new Course2(7,'网页制作与开发',"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190","本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具",18,1120,"http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4"),
    new Course2(8,'产品&交互设计那些事儿',"http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190","本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具",13,2146,"http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4"),
    new Course2(9,'VR AR产品设计的思考...',"http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190","这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究",11,1687,"http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4"),
    new Course2(10,'ProcessOn界面原型绘制',"http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190","ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。。",13,1543,"http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4"),
    new Course2(11,'ProcessOn绘制流程图',"http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190","绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。",16,1534,"http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4"),
    new Course2(12,'项目管理平台Redmine',"http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190","本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用",10,1221,"http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4")
]

app.get('/api/courses2',(req,res)=>{
    res.json(courses2);
});

app.get('/api/courses2/:id',(req,res)=>{
    res.json(courses2.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(courses2);
});


//===================================================社区==================================================================
class community{
    constructor(
        public id:number,
        public images:string,
        public courseName:string,
        public introduction:string,
        public time:string,
        public read:number,
        public commit:number
    ){}
}
const conmmunitys = [
    new community(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg","WEB开发（二）—— 函数","(一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。","刘秀梅 · 2018-10-11 15:10",1275,4),
    new community(2,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg"," 类定义关键字详解","JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名","刘秀梅 · 2018-10-11 15:10",1275,4),
    new community(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg"," 一个java文件中可包含多个main方法","一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方","刘秀梅 · 2018-10-11 15:10",1275,4),
    new community(4,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg"," 数据结构——线性表的经典应用","1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。","刘秀梅 · 2018-10-11 15:10",1275,4),
    new community(5,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg","  栈和队列之间的相互转化","队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元","刘秀梅 · 2018-10-11 15:10",1275,4)
];
app.get('/api/conmmunitys',(req,res)=>{
    res.json(conmmunitys);
});

app.get('/api/conmmunitys/:id',(req,res)=>{
    res.json(conmmunitys.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(conmmunitys);
});

//====================================================首页已完成=================================================================
class task{
    constructor(
        public id:number,
        public taskname:string,
        public time:string,
        public yanshou:string,
        public coursename:string,
        public grade:number
    ){}
}
const tasks=[
    new task(1,"任务五 canvas","已截止","待验收","2016级HTML5与CSS3前端开发",10),
    new task(1,"任务二--js基础练习与应用","已截止","待验收","2016级混合应用开发",10),
    new task(1,"任务四 文件与拖放","已截止","待验收","2016级HTML5与CSS3前端开发",10),
    new task(1,"任务一--组件交互与服务","已截止","待验收","2016级混合应用开发",10),
    new task(1,"任务三 web存储","已截止","待验收","2016级HTML5与CSS3前端开发",10),
];
app.get('/api/tasks',(req,res)=>{
    res.json(tasks);
});

app.get('/api/tasks/:id',(req,res)=>{
    res.json(tasks.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(tasks);
});

//====================================================首页已完成=================================================================
class task1{
    constructor(
        public id:number,
        public taskname:string,
        public time:string,
        public yanshou:string,
        public coursename:string,
        public grade:number
    ){}
}
const tasks1=[
    new task(1,"任务二十三","已截止","优秀","2016级H5方向基础课",10),
    new task(2,"任务二十二","已截止","优秀","2016级H5方向基础课",10),
    new task(3,"第六章综合练习题","已截止","优秀","2016级操作系统",10),
    new task(4,"任务二十一","已截止","优秀","2016级H5方向基础课",10),
    new task(5,"存储器管理综合练习题","已截止","优秀","2016级操作系统",10),
];
app.get('/api/tasks1',(req,res)=>{
    res.json(tasks1);
});

app.get('/api/tasks1/:id',(req,res)=>{
    res.json(tasks1.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(tasks1);
});


//====================================================首页已完成=================================================================
class joinc{
    constructor(
        public id:number,
        public img:string,
        public coursename:string,
        public task:number,
        public person:number
    ){}
}
const joincs=[
    new joinc(1,"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130","2016级混合应用开发 ",2,91),
    new joinc(2,"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130","2016级HTML5与CSS3前端开发 ",2,91),
    new joinc(3,"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130","JavaScript进阶（2016级H5方向基础课） ",2,91),
    new joinc(4,"http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130","2016级操作系统",2,91),
    new joinc(5,"http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130","2016级数据库原理 ",2,91),
];
app.get('/api/joincs',(req,res)=>{
    res.json(joincs);
});

app.get('/api/joincs/:id',(req,res)=>{
    res.json(joincs.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(joincs);
});

//====================================================课程-正在学习=================================================================
class video{
    constructor(
        public id:number,
        public video:string,
 
    ){}
}
const videos=[
    new video(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new video(2,"http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new video(3,"http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new video(4,"http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"),
    new video(5,"http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new video(6,"http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4"),
    new video(7,"http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4"),
    new video(8,"http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4"),
    
   
];
app.get('/api/videos',(req,res)=>{
    res.json(videos);
});

app.get('/api/videos/:id',(req,res)=>{
    res.json(videos.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(videos);
});

//====================================================课程-正在学习=================================================================
class study{
    constructor(
        public id:number,
        public img:string,
        public coursename:string,
        public introduction:string,
        public keshi:number,
        public person:number
    ){}
}
const studys=[
    new study(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190","Github 开源之旅视频...","完成本课程之后，能够达到以下目标：- 实名注册 Github ",14,3738),
    new study(2,"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190","网页制作与开发","本课程利用线上与线下相结合的授课方式，以网页开发主流软件Drea",2,91),
    new study(3,"http://usercontent.edu2act.cn/media/cs/15-11-02/4tKc5uShYJVaBCHmf9yjzj.jpg?imageView2/1/w/320/h/190","软件测试基础","软件测试基础",2,91)
   
];
app.get('/api/studys',(req,res)=>{
    res.json(studys);
});

app.get('/api/studys/:id',(req,res)=>{
    res.json(studys.find((ele)=>ele.id == req.params.id));
});

app.post('/api', function (req, res) {
    res.json(studys);
});
//========================================================8000==================================================================
app.listen(8000);



