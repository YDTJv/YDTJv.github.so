import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({

  /**
   * 基础配置
   */
  url: 'https://www.ydtjv.cn',
  lang: 'zh-CN',
  title: '一岛糖桔 | Blog',       // 网站标题
  author: {
    name: '一岛糖桔',                                    // 头像下方名
    avatar: 'https://www.ydtjv.cn/images/avatar.svg',   // 头像
    status: {
      emoji: '👩‍💻',                                      // 当前状态
    },
  },

  /**
   * 副标题
   */
  subtitle: '',
  description: '许我人间一两风，填我十万八千梦。',       // 描述

  /**
   * 站点图标
   */
  favicon: 'https://www.ydtjv.cn/favicon.svg',

  /**
   * 所有文章默认的 Frontmatter
   */
  frontmatter: {
    time_warning: false,      // 显示阅读时间警告
    // password: "123123"        // 内容加密的密码
  },

  /**
   * 社交信息
   */
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    {
      name: 'QQ 2595190770',
      link: 'https://ydtjv.cn',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/YDTJv',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=4904950084',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/635106786',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=d0VCTkJGTkdAQEc3BgZZFBga',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  /**
   * 搜索栏
   */
  search: {
    enable: true,
    type: 'fuse',
  },
  
  /**
   * 评论
   */
  comment: {
    enable: true,
  },

  /**
   * 赞助（打赏）信息
   */
  sponsor: {
    enable: true,
    title: '赏杯汽水喝呗！',
    methods: [
      {
        name: '支付宝',
        url: 'https://www.yunyoujun.cn/images/donate/zfb_donate.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      // {
      //   name: 'QQ 支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
      //   color: '#12B7F5',
      //   icon: 'i-ri-qq-line',
      // },
      {
        name: '微信支付',
        url: 'https://www.yunyoujun.cn/images/donate/vx_donate.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  /**
   * 设置代码块高度限制
   */
  codeHeightLimit: 300,      // 代码块高度不会超过 300px，并自动折叠。

  /**
   * 内容加密
   */
  encrypt: {
    enable: false,
  },

  /**
   * 客户端重定向
   */
  // redirects: {
  //   useVueRouter: true,
  //   rules: [
  //     {
  //       from: ['/foo', '/bar'],
  //       to: '/about',
  //     },
  //     {
  //       from: '/v1/about',
  //       to: '/about',
  //     },
  //   ]
  // },

  /**
   * 图片预览（Medium Zoom）
   */
  mediumZoom: { enable: false },     // 内置 medium-zoom 进行图片预览，默认关闭

  /**
   * 懒加载 Vanilla Lazyload
   */
  vanillaLazyload: {
    // 默认不开启
    enable: true,
  }
})
