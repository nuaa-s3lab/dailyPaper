(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{525:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"如何新增一篇文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何新增一篇文章"}},[t._v("#")]),t._v(" 如何新增一篇文章？")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("git clone https://github.com/nuaa-s3lab/dailyPaper.git")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("这一步将在当前页面创建一个 "),s("code",[t._v("dailyPaper")]),t._v(" 文件夹，其目录结构如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./\n├── README.md\n├── docs\n│   ├── 2020\n│   ├── README.md\n│   ├── about.md\n│   └── template.md\n└── newpaper.py\n")])])]),s("p",[t._v("其中 "),s("code",[t._v("docs")]),t._v(" 目录是文档及图片存放的目录。")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("将文章放入 "),s("code",[t._v("docs/<year>/<date>.md")]),t._v(" 下，命名格式为 "),s("code",[t._v("<date>.md")])]),t._v(" "),s("li",[t._v("将引用的图片放入 "),s("code",[t._v("docs/<year>/img/")]),t._v(" 目录下，命名格式为 "),s("code",[t._v("<date>-<i>.png/jpg/...")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("论文推荐模板请参考"),s("RouterLink",{attrs:{to:"/template.html"}},[t._v("这里")])],1)]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("在 "),s("code",[t._v("docs/<year>/README.md")]),t._v(" 下补充论文")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中 "),s("code",[t._v("sidebar")]),t._v(" 下补充你的日期。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("4 和 5 的目的是将你的论文在网页上显示。其中，4 的目的是将你的论文添加到 "),s("code",[t._v("https://nuaa-s3lab.github.io/dailyPaper/<year>/")]),t._v(" 中，5 的目的是让你的论文在侧边栏显示。")])]),s("ol",{attrs:{start:"6"}},[s("li",[s("code",[t._v("git push origin master")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("最后一步，将你的论文 push 到 GitHub 上。之后就会调用 GitHub Actions 自动构建论文。你可以在 "),s("a",{attrs:{href:"https://github.com/nuaa-s3lab/dailyPaper/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nuaa-s3lab/dailyPaper/actions"),s("OutboundLink")],1),t._v(" 上查看构建情况，如果出现了问题，请及时修改或联系其他同学。")])]),s("h2",{attrs:{id:"更新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新项目"}},[t._v("#")]),t._v(" 更新项目")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),s("h2",{attrs:{id:"如何本地运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何本地运行"}},[t._v("#")]),t._v(" 如何本地运行？")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("本项目已经开启 "),s("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub actions"),s("OutboundLink")],1),t._v("，只要本地使用 "),s("a",{attrs:{href:"https://typora.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora"),s("OutboundLink")],1),t._v(" 预览没有问题，就基本上可以放心 push。也就是说只要你的 Markdown 足够熟练，可以不需要本地运行查看效果，直接 push 即可。")])]),s("p",[t._v("首先确定你的电脑中已经配置好了 "),s("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),s("OutboundLink")],1),t._v("，你可以通过")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" proxy http://"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("配置 yarn 的源及端口。")]),t._v(" "),s("p",[t._v("接下来执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev\n")])])]),s("p",[t._v("即可在 "),s("a",{attrs:{href:"http://localhost:8080/dailyPaper/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/dailyPaper/"),s("OutboundLink")],1),t._v(" 预览本项目。")]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("p",[t._v("图片引用请使用相对路径，即 "),s("code",[t._v("./img/xxx.png")]),t._v("。如果使用 "),s("code",[t._v("img/xxx.png")]),t._v(" 则会导致无效引用。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("trick")]),t._v(" "),s("p",[t._v("由于显示文章需要在 "),s("code",[t._v("docs/.vuepress/config.js")]),t._v(" 补充日期，因此可以提前添加文章，等到该日期到来后再添加日期（")])])])}),[],!1,null,null,null);a.default=r.exports}}]);