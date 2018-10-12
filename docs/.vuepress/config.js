module.exports = {
  title: 'vue-minemap',
  description: 'use minemap in vue',
  dest: 'vuepress',
  head:[
    ['link',{rel: 'stylesheet',href: '//minedata.cn/minemapapi/v1.4/minemap.css'}],
    ['script',{src: '//minedata.cn/minemapapi/v1.4/minemap.js'}],
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '指引', link: '/guide/' },
      { text: '文档', link: '/api/' },
      { text: '示例', link: '/demo/basic-map' },
    ],
    sidebar: {
      '/demo/': [
        {
          title: '地图示例',
          collapsable: false,
          children: [
            'basic-map',
            'multi-map',
          ]
        },
        {
          title: '图层示例',
          collapsable: false,
          children: [
            'move-layer',
          ]
        }
      ]
    }

  }
};
