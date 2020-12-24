module.exports = {
    base: "/dailyPaper/",
    title: 'NUAA S3lab Daily Paper',
    description: 'NUAA S3lab Paper Daily',
    theme: 'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        blogConfig: {
            tag: {
                text: 'Tag'
            }
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
            '/2020/': [
                '',
                '1224',
                '1223',
            ],
            '/': [
                '',
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
        ]
    ],
    markdown: {
        plugins: ['task-lists']
    }
}