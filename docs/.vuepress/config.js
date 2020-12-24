module.exports = {
    base: "/dailyPaper/",
    title: 'NUAA S3lab Paper Daily',
    description: 'NUAA S3lab Paper Daily',
    themeConfig: {
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
                target:'_self',
                rel:''
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