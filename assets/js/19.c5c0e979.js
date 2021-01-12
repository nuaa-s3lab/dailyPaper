(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{605:function(t,a,r){t.exports=r.p+"assets/img/image-20210107215342419.eb1092dc.png"},606:function(t,a,r){t.exports=r.p+"assets/img/image-20210107220547770.da2a3ac7.png"},607:function(t,a,r){t.exports=r.p+"assets/img/image-20210107220901261.f967420e.png"},608:function(t,a,r){t.exports=r.p+"assets/img/image-20210107224008583.bcb3f98f.png"},609:function(t,a,r){t.exports=r.p+"assets/img/image-20210107224109449.07009e45.png"},610:function(t,a,r){t.exports=r.p+"assets/img/image-20210107224357176.a1eec134.png"},611:function(t,a,r){t.exports=r.p+"assets/img/image-20210107224703362.d8fd260c.png"},658:function(t,a,r){"use strict";r.r(a);var e=r(6),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("大家好，今天我为大家带来了来自 "),e("strong",[t._v("CCS 2020")]),t._v(" 的《nhancing State-of-the-art Classifiers with API Semantics to Detect Evolved Android Malware》。")]),t._v(" "),e("h1",{attrs:{id:"论文发现的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#论文发现的问题"}},[t._v("#")]),t._v(" 论文发现的问题")]),t._v(" "),e("ol",[e("li",[t._v("基于ML的恶意软件检测随着恶意软件的发展，其准确率由原来的100%降低到了80%甚至60%")]),t._v(" "),e("li",[t._v("现有工作必须人工标注新的恶意软件，工作量很大。")])]),t._v(" "),e("h1",{attrs:{id:"论文的工作内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#论文的工作内容"}},[t._v("#")]),t._v(" 论文的工作内容")]),t._v(" "),e("ol",[e("li",[t._v("发现了恶意软件的通性：即相同的语义但是有不同实现方式")]),t._v(" "),e("li",[t._v("提出在恶意软件演化过程对语义相似度进行捕捉，并利用捕获到的信息来减缓恶意软件检测软件的老化。\n2.1 文章还发现若android API的调用语义相似，则这些相似性会体现在Google的官方API文档。可以通过语义知识来辅助判别恶意软件")]),t._v(" "),e("li",[t._v("设计了APIGraph，它根据官方文档中提供和提取的信息来构建Android api的关系图。APIGraph中每一个节点表示一个关键实体，例如API、异常或者权限；每一个边表示两个实体的关系，例如API抛出的异常或者API所需的权限。APIGraph然后从关系图中提取API语义，并将相似的API进行聚类。")]),t._v(" "),e("li",[t._v("构建了一个跨越七年的大规模演化数据集，它几乎是当时最大的用于评估模型老化的数据集（TESSERACT）的三倍。")])]),t._v(" "),e("h1",{attrs:{id:"系统设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[t._v("#")]),t._v(" 系统设计")]),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:r(605),alt:"image-20210107215342419"}}),t._v(" "),e("p",[t._v("​\tAPIGraph主要由有两个阶段：首先通过API文档构建API关系图。然后使用API关系图对恶意软件检测软件进行强化。")]),t._v(" "),e("h2",{attrs:{id:"api关系图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api关系图"}},[t._v("#")]),t._v(" API关系图")]),t._v(" "),e("p",[t._v("​\tAPI关系图的节点主要由android的函数、类、包、权限构成。关系图中的边的类型通过关系分类学的思想，基于前人的工作("),e("a",{attrs:{href:"https://www.bing.com/search?q=Improving+API+Caveats+Accessibility+by+Mining+API+Caveats+Knowledge+Graph.+In+Proceedings+of+the+IEEE+International+Conference+on+Software+Maintenance+and+Evolution&PC=U316&FORM=CHROMN",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献1"),e("OutboundLink")],1),t._v("和"),e("a",{attrs:{href:"https://dl.acm.org/doi/10.1109/TSE.2013.12",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献2"),e("OutboundLink")],1),t._v("进行实现，主要由table 1中的关系构成。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(606),alt:"image-20210107220547770"}})]),t._v(" "),e("h2",{attrs:{id:"api文档收集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api文档收集"}},[t._v("#")]),t._v(" API文档收集")]),t._v(" "),e("p",[t._v("​\tAndroid 的官方API文档的是由层级结构组成的，并且每一个HTML文件军用来表示一个最基本的类，其中包括类的层级结构、方法、域等等，具体如Figure 4。")]),t._v(" "),e("p",[t._v("​\t"),e("img",{staticStyle:{zoom:"33%"},attrs:{src:r(607),alt:"image-20210107220901261"}})]),t._v(" "),e("h3",{attrs:{id:"实体的提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体的提取"}},[t._v("#")]),t._v(" 实体的提取")]),t._v(" "),e("p",[t._v("​\t实体的提取主要有以下几步：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("由于类名是用结构化文本描述的，因此每一个HTML中均可提取到一个类；")])]),t._v(" "),e("li",[e("p",[t._v("从类名中将多各包进行拆分从而获得包名；")])]),t._v(" "),e("li",[e("p",[t._v("将每一页文档转化为DOM树，并从中提取类的方法；")])]),t._v(" "),e("li",[e("p",[t._v("通过(https://developer.android.com/reference/android/Manifest.permission)[https://developer.android.com/reference/android/Manifest.permission]提取权限。")])])]),t._v(" "),e("h3",{attrs:{id:"实体之间关系的提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体之间关系的提取"}},[t._v("#")]),t._v(" 实体之间关系的提取")]),t._v(" "),e("p",[t._v("他们使用了两个方法来提取实体的。")]),t._v(" "),e("p",[e("strong",[t._v("结构化文本的关系提取。")]),t._v(" 由于关系由于一些关系能从HTML的元素结构中体现出来（例如方法、类之间的福安息）。因此在提取类实体的时候就可以将类与类中方法的关系进行提取，然后再通过方法的返回值、参数和异常来扩展实体的关系。")]),t._v(" "),e("p",[e("strong",[t._v("基于模板的非结构化文本关系匹配。")]),t._v(" APIGraph能够通过NLP技术来匹配四种模板：conditional, alternative, refers_to 和 uses_permission。匹配的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("手动输入模板")]),t._v(" "),e("li",[t._v("递归得扩展模板的集合")]),t._v(" "),e("li",[t._v("使用NLP进行模板匹配")])]),t._v(" "),e("h2",{attrs:{id:"api关系图的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api关系图的使用"}},[t._v("#")]),t._v(" API关系图的使用")]),t._v(" "),e("p",[t._v("​\tAPIGraph将关系图中的每个API转换为一个嵌入表示，然后将这些嵌入表示进行聚类。API嵌入的概念是将关系图中的每个API转换为一个向量来表示其语义。在APIGraph成功地对api进行聚类后，APIGraph用每一个聚类的中心，来表示聚类中独立api的语义。")]),t._v(" "),e("p",[t._v("​\t然后他们使用关系图对MamaDroid、DroidEvolver、Drebin、Drebin-DL这四个恶意软件检测软件进行增强。")]),t._v(" "),e("h1",{attrs:{id:"数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据集"}},[t._v("#")]),t._v(" 数据集")]),t._v(" "),e("p",[t._v("​\t下面是数据集的构建步骤：")]),t._v(" "),e("ol",[e("li",[t._v("从VirusShare, VirusTotal和 AMD 数据集中下载最初始的数据集；")]),t._v(" "),e("li",[t._v("从Google play下载1,060,000个app，然后将所有应用程序都提供给VirusTotal，并且只保留由VirusTotal的所有AVs报告为良性的1033073个app。")]),t._v(" "),e("li",[t._v("根据样品的出现时间戳对所有样品进行排序，并为七年中的每个月选择一个子集。")])]),t._v(" "),e("h1",{attrs:{id:"评估"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评估"}},[t._v("#")]),t._v(" 评估")]),t._v(" "),e("p",[t._v("APIGraph提取的api关系图的统计：")]),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:r(608),alt:"image-20210107224008583"}}),t._v(" "),e("p",[t._v("从2012年到2018那年恶意软件的进化：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(609),alt:"image-20210107224109449"}})]),t._v(" "),e("p",[t._v("增强的效果")]),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:r(610),alt:"image-20210107224357176"}}),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:r(611),alt:"image-20210107224703362"}}),t._v(" "),e("ul",[e("li",[t._v("论文："),e("a",{attrs:{href:"https://dl.acm.org/doi/abs/10.1145/3372297.3417291",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dl.acm.org/doi/abs/10.1145/3372297.3417291"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);