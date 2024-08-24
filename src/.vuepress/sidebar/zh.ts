import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "代码相关",
      icon: "laptop-code",
      prefix: "code/",
      link: "code/",
      children: "structure",
    },
    {
      text: "数码相关",
      icon: "camera",
      prefix: "digit/",
      link: "digit/",
      children: "structure",
    },
    {
      text: "游戏相关",
      icon: "mouse",
      prefix: "games/",
      link: "games/",
      children: "structure",
    },
    {
      text: "个人日志",
      icon: "book",
      prefix: "note/",
      link: "note/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
