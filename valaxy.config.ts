import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]


export default defineValaxyConfig<UserThemeConfig>({
  /**
   * 主题名
   */
  theme: 'yun',

  /**
   * 主题配置
   */
  themeConfig: {
    banner: {
      enable: true,
      title: '一岛糖桔的鲸岛',
      // 手动分割
      // title: ['一岛糖桔的', '鲸岛'],
      cloud: {
        enable: true,    // 首页下方的动态云
      },
    },

    /**
     * 主题配色
     */
    colors: {
      primary: '#0078E7'     // @ default '#0078E7'
    },

    /**
     * 背景图
     */
    bg_image: {
      enable: true,
      url: 'https://www.ydtjv.cn/images/background/bg_white.jpg',     // 日间
      dark: 'https://www.ydtjv.cn/images/background/bg_black.jpg',    // 夜间
      opacity: 0.6,                                                   // 透明度
    },


    /**
     * 自定义页面（显示在社交导航栏下方）
     */
    pages: [
      {
        name: '我的小可爱们',
        url: '/links/',                 // 网页文件位于 pages/links/index.md
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    /**
     * 说点什么
     * 自定义 API 链接，在 public 下新建 json 的方式来使用，public/saywords.json
     * ["xxxx", "xxxxx"]
     */
    say: {
      enable: false,
      api: 'https://www.ydtjv.cn/api/words',
      hitokoto: {            // https://hitokoto.cn/
        enable: true,
        api: 'https://v1.hitokoto.cn/?encode=json',
      }
    },

    /**
     * 公告
     */
    notice: {
      enable: false,
      hideInPages: true,     // 在 /pages/[page] 中隐藏
      content: "这是一条公告"
    },

    /**
     * 点击时的烟花效果
     */
    fireworks: {
      enable: true,
      /**
       * 烟花颜色
       * 默认 ['#66A7DD', '#3E83E1', '#214EC2']
       */
      colors: ['#66A7DD', '#3E83E1', '#214EC2'],
    },


    /**
     * 页脚
     */
    footer: {
      /**
       * Powered by valaxy & valaxy-theme-${name}, default is yun
       */
      powered: true,

      /**
       * 建站时间
       */
      since: 2024,


      // beian: {
      //   enable: true,
      //   /**
      //    * Chinese Users | 中国用户
      //    * 备案 ICP
      //    * 国内用户需要在网站页脚展示备案 ICP 号
      //    * https://beian.miit.gov.cn/
      //    */
      //   icp: '苏ICP备17038157号',
      // },
    },
  },

  unocss: { safelist },
})
