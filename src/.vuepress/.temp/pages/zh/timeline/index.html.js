import comp from "E:/text/github/bot/my-web/src/.vuepress/.temp/pages/zh/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/timeline/\",\"title\":\"时间轴\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"时间轴\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Timeline\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/timeline/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"A blog demo for Anges Digital\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"时间轴\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hope\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"时间轴\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
