import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    {
      text: "随笔内容",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
