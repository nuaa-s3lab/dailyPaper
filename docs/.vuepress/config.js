module.exports = {
    title: 'NUAA S3lab Paper Daily',
    description: 'NUAA S3lab Paper Daily',
    themeConfig: {
        nav: [
            {
                text: 'Year',
                ariaLabel: 'Year',
                items: [
                    {
                        text: '2020',
                        link: '/2020/'
                    }
                ]
            }
        ],
        sidebar: {
            '/2020/': [
                '',
                '1223'
            ],
            '': [
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