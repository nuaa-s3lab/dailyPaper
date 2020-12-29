(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{540:function(t,e,s){t.exports=s.p+"assets/img/1.b3727d8f.png"},541:function(t,e,s){t.exports=s.p+"assets/img/2.3eb85f65.png"},542:function(t,e,s){t.exports=s.p+"assets/img/3.44e312e0.png"},543:function(t,e,s){t.exports=s.p+"assets/img/4.eacc3699.png"},544:function(t,e,s){t.exports=s.p+"assets/img/5.a867b30b.png"},545:function(t,e,s){t.exports=s.p+"assets/img/6.ee1dfd49.png"},546:function(t,e,s){t.exports=s.p+"assets/img/7.1729c6dd.png"},547:function(t,e,s){t.exports=s.p+"assets/img/8.d9d86867.png"},548:function(t,e,s){t.exports=s.p+"assets/img/9.be1a52f5.png"},562:function(t,e,s){"use strict";s.r(e);var n=s(6),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("大家好，今天我为大家带来了发表在 "),n("em",[t._v("EuroSys 2020")]),t._v(" 的工作《BinRec: dynamic binary lifting and recompilation》。这篇论文其实已经被上海交大软件安全研究组 GoSSIP 在 "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/8h3kmZPxfWcYVTLkJF0X4w",target:"_blank",rel:"noopener noreferrer"}},[t._v("G.O.S.S.I.P 学术论文推荐 2020-04-23"),n("OutboundLink")],1),t._v(" 中介绍过了，但是他们写的不是很详细，正好我对这篇论文挺感兴趣的，就在这里稍微详细地进行介绍吧~")]),t._v(" "),n("p",[n("img",{attrs:{src:s(540),alt:""}})]),t._v(" "),n("p",[t._v("现有的二进制提升（把机器语言提升到中间语言的级别）方法依赖于静态反汇编，存在以下三个缺点：")]),t._v(" "),n("ol",[n("li",[t._v("无法准确建模间接控制流的目标")]),t._v(" "),n("li",[t._v("无法区分代码指针和数据常量")]),t._v(" "),n("li",[t._v("无法确定数据字节和指令字节的边界")])]),t._v(" "),n("p",[t._v("而启发式反汇编的方法通常对二进制有特定的假设，例如是典型的发布版本（typical release）、去符号及调试信息、被故意混淆等假设，而实际中会遇到更多情况：手写汇编、高度优化的代码、非标准编译器编译的代码、混淆/打包后的代码、位置无关的代码等等问题。")]),t._v(" "),n("p",[t._v("而作者们实现的 BinRec 工具利用动态分析的方式解决了以下五个问题：")]),t._v(" "),n("ol",[n("li",[t._v("代码和数据引用的歧义性")]),t._v(" "),n("li",[t._v("间接控制流")]),t._v(" "),n("li",[t._v("外部对内部的调用（例如 "),n("code",[t._v("qsort")]),t._v(" 函数中的自定义函数参数）")]),t._v(" "),n("li",[t._v("不规范的代码")]),t._v(" "),n("li",[t._v("混淆（虚拟化混淆）")])]),t._v(" "),n("p",[t._v("他们的设计如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(541),alt:""}})]),t._v(" "),n("p",[t._v("可以看出，为了尽可能地覆盖二进制的 trace，他们通过不同的输入辅助动态分析来取最大的代码集合。")]),t._v(" "),n("p",[t._v("但是很显然，很多时候仍然不能完全地取到所有测试集合，因此他们开发出了一种新的二进制提升的增强机制，在运行时遇到没有覆盖的路径可以自动化地记录 trace，并最后合并到新的二进制文件中，这样即使遇到了新的路径，也不至于 crack。")]),t._v(" "),n("p",[t._v("除此之外，文章对很多静态分析难以处理的问题都进行了讨论。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:s(542)}}),t._v(" "),n("p",[t._v("不过比较难处理的数据引用问题 BinRec 也没有对其进行研究，只是将原本的二进制作为环境变量插入到新的二进制中，维护两套栈和寄存器以方便处理相关的问题。")]),t._v(" "),n("p",[t._v("总的来说，BinRec 把二进制提升到 LLVM IR 级别并重新编译，与未经优化编译的程序相比性能没有下降太多，甚至有的还更优。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:s(543)}}),t._v(" "),n("p",[t._v("而在另一方面，由于 BinRec 能够自动添加新的 trace，因此在代码覆盖率上也有很好的表现。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:s(544)}}),t._v(" "),n("p",[t._v("他们还讨论了遇到新的 trace，生成新的 binary 的时间，大概需要 140 秒。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:s(545)}}),t._v(" "),n("p",[t._v("而与其他的二进制提升工具对比，BinRec 由于没有使用启发式的方法，因此会需要更多的时间开销，但是在提升能力上要远远胜出。")]),t._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:s(546)}}),t._v(" "),n("p",[t._v("之后文章还讨论了 BinRec 可能的应用。例如二进制控制流缓解（在他们的方法中，原来的栈被模拟成了一个大数组）、虚拟化反混淆（利用编译优化）以及对相关二进制工具的支持。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:s(547)}}),t._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:s(548)}}),t._v(" "),n("p",[t._v("最后文章也讨论了 BinRec 的种种限制")]),t._v(" "),n("ol",[n("li",[t._v("只能处理 x86")]),t._v(" "),n("li",[t._v("不能处理 PE（这俩都不叫问题吧）")]),t._v(" "),n("li",[t._v("实现线程安全地处理动态跟踪及数据结构需要很多努力")]),t._v(" "),n("li",[t._v("没有实现对自修改代码的处理")]),t._v(" "),n("li",[t._v("没有恢复栈插槽（stack slots）和变量间的映射")])]),t._v(" "),n("p",[t._v("总的来说确实是一篇很有趣的文章，里面的介绍也很全面，让我这个对该方面不是很了解的人也有了大概的印象。")]),t._v(" "),n("ul",[n("li",[t._v("PDF: "),n("a",{attrs:{href:"https://download.vusec.net/papers/binrec_eurosys20.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://download.vusec.net/papers/binrec_eurosys20.pdf"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("slide: "),n("a",{attrs:{href:"https://download.vusec.net/slides/binrec-feast18.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://download.vusec.net/slides/binrec-feast18.pdf"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("项目 GitHub（尚未开放代码）: "),n("a",{attrs:{href:"https://github.com/securesystemslab/BinRec",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/securesystemslab/BinRec"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);