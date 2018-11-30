module.exports = {
  title: 'vue-minemap',
  description: 'use minemap in vue',
  dest: 'vuepress',
  base: '/vue-minemap/vuepress/',
  head: [
    ['link', {rel: 'stylesheet', href: '/lib/minemap2.0/minemap.css'}],
    ['script', {src: '/lib/minemap2.0/minemap.js'}],
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: '指引', link: '/guide/'},
      {text: '文档', link: '/api/'},
      {text: '示例', link: '/demo/basic-map'},
      {text: 'GitHub', link: 'https://github.com/zhuweileo/vue-minemap'},
    ],
    sidebar: {
      '/demo/': [
        {
          title: '地图示例',
          collapsable: false,
          children: [
            'basic-map',
            'multi-map',
            'change-style',
          ]
        },
        {
          title: '图层示例',
          collapsable: false,
          children: [
            'move-layer',
          ]
        },
        // {
        //   title: '覆盖物示例',
        //   collapsable: false,
        //   children: [
        //     'add-marker',
        //     'add-popup',
        //     'marker-with-popup',
        //   ]
        // },
      ]
    }

  }
};
