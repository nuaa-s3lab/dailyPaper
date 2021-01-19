module.exports = {
    base: "/dailyPaper/",
    title: 'NUAA S3lab Daily Paper',
    description: 'NUAA S3lab 每日论文推荐',
    theme: 'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        blogConfig: {
            tag: {
                text: 'Tag'
            },
            category: {
                text: 'Category' // 默认文案 “分类”
            },
        },
        nav: [
            {
                text: 'About',
                ariaLabel: 'Year',
                items: [
                    {
                        text: '关于本项目',
                        link: '/about/',
                        icon: 'reco-blog'
                    },
                    {
                        text: 'RSS 订阅',
                        link: 'https://nuaa-s3lab.github.io/dailyPaper/rss.xml',
                        icon: 'reco-rss'
                    },
                ],
                icon: 'reco-message'
            },
            {
                text: 'Year',
                ariaLabel: 'Year',
                items: [
                    {
                        text: '2021',
                        link: '/2021/'
                    },
                    {
                        text: '2020',
                        link: '/2020/'
                    }
                ],
                icon: 'reco-date'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/nuaa-s3lab',
                target: '_self',
                rel: '',
                icon: 'reco-github'
            }
        ],
        sidebar: {
            '/2021/': [
                '',
                '0119',
                '0118',
                '0115',
                '0114',
                '0113',
                '0112',
                '0111',
                '0108',
                '0107',
                '0106',
                '0105',
                '0104',
                '0103',
                '0102',
                '0101',
                '/2020/'
            ],
            '/2020/': [
                '/2021/',
                '',
                '1231',
                '1230',
                '1229',
                '1228',
                '1227',
                '1226',
                '1225',
                '1224',
                '1223',
            ],
            '/': [
                '',
                '2021/',
                '2020/'
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@maginapp/vuepress-plugin-katex',
            {
                delimiters: 'dollars'
            }
        ],
        [
            '@vuepress/medium-zoom',
            // {
            //     selector: 'img',
            //     options: {
            //         margin: 16
            //     }
            // },
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-131763109-3' // UA-00000000-0
            }
        ],
        [
            '@vuepress-reco/vuepress-plugin-rss',
            {
                'site_url': 'https://nuaa-s3lab.github.io/dailyPaper'
            }
        ]
    ],
    markdown: {
        plugins: ['task-lists']
    }
}