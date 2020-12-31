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
                link: '/about/'
            },
            {
                text: 'Year',
                ariaLabel: 'Year',
                items: [
                    {
                        text: '2020',
                        link: '/2020/'
                    }
                ]
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
            ],
            '/2020/': [
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
            '@vuepress/medium-zoom'
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-131763109-3' // UA-00000000-0
            }
        ]
    ],
    markdown: {
        plugins: ['task-lists']
    }
}