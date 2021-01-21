(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{666:function(t,a,e){t.exports=e.p+"assets/img/image-20210120224832880.84cbf1b6.png"},667:function(t,a,e){t.exports=e.p+"assets/img/image-20210120215730289.49dabc33.png"},668:function(t,a,e){t.exports=e.p+"assets/img/image-20210120215818851.c934e6aa.png"},669:function(t,a,e){t.exports=e.p+"assets/img/image-20210120220550147.ece671a5.png"},670:function(t,a,e){t.exports=e.p+"assets/img/image-20210120222757031.a733cc19.png"},671:function(t,a,e){t.exports=e.p+"assets/img/image-20210120223238212.f566ea8a.png"},672:function(t,a,e){t.exports=e.p+"assets/img/image-20210120223640709.48f46b5d.png"},673:function(t,a,e){t.exports=e.p+"assets/img/image-20210120224132231.2bfa069a.png"},674:function(t,a,e){t.exports=e.p+"assets/img/image-20210120224504352.7cb2320a.png"},716:function(t,a,e){"use strict";e.r(a);var s=e(6),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("大家好，今天为大家带来了发表在 "),s("strong",[t._v("USENIX ATC 2020")]),t._v(" 的工作《Acclaim: Adaptive Memory Reclaim to Improve User Experience in Android Systems》，通过精细得计算系统申请的页的大小来用于提升android的用户体验。")]),t._v(" "),s("p",[t._v("他们发现Android中申请页的效率很低，尤其是高IO的情况下page fault很高。由于下面两个原因：")]),t._v(" "),s("ol",[s("li",[t._v("android 申请的页过大")]),t._v(" "),s("li",[t._v("app在后台疯狂吞噬内存")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:e(666),alt:"image-20210120224832880"}}),t._v(" "),s("h1",{attrs:{id:"android目前的机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android目前的机制"}},[t._v("#")]),t._v(" Android目前的机制")]),t._v(" "),s("h2",{attrs:{id:"i-o模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-o模型"}},[t._v("#")]),t._v(" I/O模型")]),t._v(" "),s("p",[t._v("下图是android 的I/O栈。当app启动的时候，kerner会从cache中找页，若cache hit 则从cache中拿cache的时间仅有几纳秒；若cache miss则会出现page fault，若内存被占满了系统则会释放page，这一套流程下来申请page的时间就高达数微秒。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(667),alt:"image-20210120215730289"}}),t._v(" "),s("p",[t._v("​\t下图是不同情况下app启动的延迟：")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(668),alt:"image-20210120215818851"}}),t._v(" "),s("h2",{attrs:{id:"发生缺页的三种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发生缺页的三种情况"}},[t._v("#")]),t._v(" 发生缺页的三种情况")]),t._v(" "),s("ol",[s("li",[t._v("第一次执行程序，物理内存中并未存储该app的页的信息；")]),t._v(" "),s("li",[t._v("地址读取错误的时候，该进程会被杀掉，进程持有的资源会被释放")]),t._v(" "),s("li",[t._v("读一个已经被驱逐的页。")])]),t._v(" "),s("h2",{attrs:{id:"系统重新申请页的两种模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统重新申请页的两种模式"}},[t._v("#")]),t._v(" 系统重新申请页的两种模式")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("后台申请，在页满足系统需要的时候异步申请page")])]),t._v(" "),s("li",[s("p",[t._v("直接申请，当页不足以满足系统运行的时候直接申请page，并且这种情况下系统的开销将会非常大。")]),t._v(" "),s("p",[t._v("下图是申请页的流程：")])])]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(669),alt:"image-20210120220550147"}}),t._v(" "),s("p",[t._v("当内存完全不够用的时候，android系统就会杀掉后台进程来释放页。")]),t._v(" "),s("h1",{attrs:{id:"acclam-系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acclam-系统"}},[t._v("#")]),t._v(" Acclam 系统")]),t._v(" "),s("p",[t._v("​\t他们的设计思想是让系统使用后台应用释放的的页来让系统刚好申请足够前台运行程序运行大小的页。基于此，他们提出了Acclam。Acclam有两个模块预测的出"),s("strong",[t._v("轻量级的内存申请模式(LWP)"),s("strong",[t._v("和")]),t._v("前台感知驱逐 (FAE)")]),t._v("。FAE首先将后台应用程序中空闲的页重新定位到前台应用程序；然后LWP基于当前工作量来并结合FAE中释放的页来系统减少申请新页的大小。")]),t._v(" "),s("h2",{attrs:{id:"轻量级的内存申请模式-lwp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻量级的内存申请模式-lwp"}},[t._v("#")]),t._v(" 轻量级的内存申请模式(LWP)")]),t._v(" "),s("p",[t._v("​\tLWP包括一个轻量级的预测器和一个调制器。他们使用滑动窗口实现了预测器，它使用采样的请求页的大小作为输入，输出预测出的申请页的大小和申请页数量的趋势，然后调制器基于预测器的输出和后台释放的页大小重新计算最终需要申请的页的大小。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(670),alt:"image-20210120222757031"}}),t._v(" "),s("h2",{attrs:{id:"前台感知驱逐-fae"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前台感知驱逐-fae"}},[t._v("#")]),t._v(" "),s("strong",[t._v("前台感知驱逐 (FAE)")])]),t._v(" "),s("p",[t._v("​\tFAE首先需要知道哪些页是属于后台应用程序，然后才能对后台的页进行回收。FAE基于UID来判断该UID是否是前台程序。当用户将app切换到前端时，该app所对应的UID会传递给kernel其余UID则为后台程序。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(671),alt:"image-20210120223238212"}}),t._v(" "),s("p",[t._v("​\t\t当对后台app进行驱逐的时候，该app对应的页会被放入inactive list。")]),t._v(" "),s("p",[t._v("​\t"),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(672),alt:"image-20210120223640709"}})]),t._v(" "),s("p",[t._v("除此之外他们还对释放后台播放的音乐和视频的app进行了约束，这些和这些功能相关的页不会被移动到inactive list")]),t._v(" "),s("h2",{attrs:{id:"实验结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验结果"}},[t._v("#")]),t._v(" 实验结果")]),t._v(" "),s("p",[t._v("​\t在执行不同大小的读写操作的时候，效果做好的时候Acclaim的延迟基本上比Baseline低了49.3%")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(673),alt:"image-20210120224132231"}}),t._v(" "),s("p",[t._v("除此之外，Acclaim能够显著降低app的启动时间")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:e(674),alt:"image-20210120224504352"}}),t._v(" "),s("ul",[s("li",[t._v("论文详情:"),s("a",{attrs:{href:"https://www.usenix.org/conference/atc20/presentation/liang-yu",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.usenix.org/conference/atc20/presentation/liang-yu"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=i.exports}}]);