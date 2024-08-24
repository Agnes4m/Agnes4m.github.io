import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "数码",
    icon: "pen-to-square",
    prefix: "/digit/",
    children: [
      { text: "手机概述", icon: "pen-to-square", link: "phone" },
      {
        text: "手机",
        icon: "pen-to-square",
        prefix: "phone/",
        children: [
          { text: "苹果15", icon: "pen-to-square", link: "15" },
        ],
      },
    ],
  },
  {
    text: "代码",
    icon: "pen-to-square",
    prefix: "/code/",
    children: [
      {
        text: "python",
        icon: "pen-to-square",
        prefix: "python/",
        children: [
          { text: "求生之路插件", icon: "pen-to-square", link: "l4d2" },
          { text: "安装", icon: "pen-to-square", link: "install" },
          { text: "类型", icon: "pen-to-square", link: "type" },
        ],
      },
      
    ],
  }
]);
