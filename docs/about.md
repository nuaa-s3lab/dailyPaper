---
title: 关于
---

## 如何新增一篇文章？

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
yarn config set proxy http://<ip>:<port>
```

配置 yarn 的源及端口。

接下来执行

```bash
yarn
yarn docs:dev
```

即可在 <http://localhost:8080/dailyPaper/> 预览本项目。

## 常见问题

图片引用请使用相对路径，即 `./img/xxx.png`。如果使用 `img/xxx.png` 则会导致无效引用。

::: details trick

由于显示文章需要在 `docs/.vuepress/config.js` 补充日期，因此可以提前添加文章，等到该日期到来后再添加日期（

:::
