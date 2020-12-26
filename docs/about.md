---
title: 关于
sidebar: auto
---

## 项目结构

### 目录结构

```
./
├── README.md
├── docs
│   ├── .vuepress
│   │   └── config.js
│   ├── 2020
│   ├── README.md
│   ├── about.md
│   └── template.md
└── newpaper.py
```

其中，`docs/` 目录是文档和图片存放的位置。

### 配置文件

相关的配置文件存放在 `docs/.vuepress/config.js` 中。其参数简介如下。

- `base`: 项目的基础路径。
- `theme`: 主题。目前使用了 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/) 这一主题。
- `head`: 根据[移动端优化](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%BC%98%E5%8C%96)，添加了这一项。
- `themeConfig`: 主题配置。
  - `lastUpdated`: [最后更新时间](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4)插件。
  - `blogConfig`: 配置分类和标签，[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html) 主题独有的配置。
  - `nav`: 导航栏配置，可以参考[这里](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)。
  - `sidebar`: 并不智能的侧边栏，需要手动配置，可以参考[这里](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)。
- `plugins`: 网站需要单独配置的插件列表。
  - [`@vuepress/back-to-top`](https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html): back-to-top 插件。
  - [`@maginapp/vuepress-plugin-katex`](https://github.com/maginapp/vuepress-plugin-katex): 用来支持数学公式的 KaTeX 插件，支持的语法可以参考 [Supported Functions](https://katex.org/docs/supported.html)。
  - [`@vuepress/medium-zoom`](https://vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html): [medium-zoom](https://github.com/francoischalifour/medium-zoom) 插件，理论上可以让图片查看更丝滑，但是目前好像没有生效。
  - [`@vuepress/google-analytics`](https://vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html): Google Analytics 插件。
- `markdown`: 这一项的目的是支持复选框。可以参考[进阶配置](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%BF%9B%E9%98%B6%E9%85%8D%E7%BD%AE)进行设置。

## 如何新增一篇文章？

### 基础篇

1. `git clone https://github.com/nuaa-s3lab/dailyPaper.git`

::: tip
这一步将在当前页面创建一个 `dailyPaper` 文件夹，其目录结构如下：

```
./
├── README.md
├── docs
│   ├── 2020
│   ├── README.md
│   ├── about.md
│   └── template.md
└── newpaper.py
```

其中 `docs` 目录是文档及图片存放的目录。
:::

2. 将文章放入 `docs/<year>/<date>.md` 下，命名格式为 `<date>.md`
3. 将引用的图片放入 `docs/<year>/img/` 目录下，命名格式为 `<date>-<i>.png/jpg/...`

::: tip
论文推荐模板请参考[这里](./template.md)
:::

4. 在 `docs/<year>/README.md` 下补充论文
5. 在 `docs/.vuepress/config.js` 中 `sidebar` 下补充你的日期。

::: tip
4 和 5 的目的是将你的论文在网页上显示。其中，4 的目的是将你的论文添加到 `https://nuaa-s3lab.github.io/dailyPaper/<year>/` 中，5 的目的是让你的论文在侧边栏显示。
:::

6. `git push origin master`

::: tip
最后一步，将你的论文 push 到 GitHub 上。之后就会调用 GitHub Actions 自动构建论文。你可以在 <https://github.com/nuaa-s3lab/dailyPaper/actions> 上查看构建情况，如果出现了问题，请及时修改或联系其他同学。
:::

### 进阶篇

推荐首先 fork 项目，确认无误后再进行 pull request，最后 merge 进主分支，这样比较安全。

当然如果不想搞这么麻烦直接修改也行。

## 更新项目

``` bash
git pull origin master
```

## 如何本地运行？

::: tip

本项目已经开启 [GitHub actions](https://github.com/features/actions)，只要本地使用 [Typora](https://typora.io/) 预览没有问题，就基本上可以放心 push。也就是说只要你的 Markdown 足够熟练，可以不需要本地运行查看效果，直接 push 即可。

:::

首先确定你的电脑中已经配置好了 [yarn](https://yarnpkg.com/)，你可以通过

``` bash
yarn config set registry https://registry.npm.taobao.org/
yarn config set proxy http://<ip>:<port> # 可选
```

配置 yarn 的源及 proxy。

接下来执行

```bash
yarn
yarn docs:dev
```

即可在 <http://localhost:8080/dailyPaper/> 预览本项目。

## 常见问题

### 图片引用

图片引用请使用相对路径，即 `./img/xxx.png`。如果使用 `img/xxx.png` 则会导致无效引用。

::: details trick

由于显示文章需要在 `docs/.vuepress/config.js` 补充日期，因此可以提前添加文章，等到该日期到来后再添加日期（

:::

### 字体加粗

网站是用 [markdown-it](https://www.npmjs.com/package/markdown-it) 渲染 Markdown 的。

错误示范：

``` md
​**Java Style Crypto Identification.**该方式，native通过JNI层调用java函数。 JCA使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的API。
```

显示效果：

​ **Java Style Crypto Identification.**该方式，native通过JNI层调用java函数。 JCA使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的API。

正确示范：

``` md
​**Java Style Crypto Identification**.该方式，native通过JNI层调用java函数。 JCA使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的API。
```

显示效果

​**Java Style Crypto Identification**.该方式，native通过JNI层调用java函数。 JCA使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的API。

::: warning
请不要将标点符号（包括中文标点）放置在加粗位置的末端，请放在加粗位置的外面。
:::

另外，上文中还有一些不符合规范的地方，这里修改为符合[中文文案排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines)规范的格式如下：

``` md
​**Java Style Crypto Identification** 该方式，native 通过 JNI 层调用 java 函数。JCA 使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的 API。
```

显示效果：

​**Java Style Crypto Identification** 该方式，native 通过 JNI 层调用 java 函数。JCA 使用 provider-based 架构，它包含一系列功能包括加密、秘钥生成与管理、证书校验等的 API。

## 碎碎念

人的力量是有限的，而论文的数量是无限的。每天开组会固然可以分享论文，但是太消耗精力了。因此我希望能参照 [G.O.S.S.I.P 学术论文推荐 2020](https://github.com/GoSSIP-SJTU/dailyPaper) 的模式进行每日论文推荐。如果大家有感兴趣的就可以深入阅读，这样就再好不过啦。
