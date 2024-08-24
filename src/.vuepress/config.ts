import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "A blog demo for Anges Digital",
      description: "A blog demo for Anges Digital",
    },
    "/": {
      lang: "zh-CN",
      title: "爱丽数码的博客",
      description: "爱丽数码的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
