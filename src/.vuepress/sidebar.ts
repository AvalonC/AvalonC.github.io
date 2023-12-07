import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    {
      text: "随笔",
      icon: "pen-to-square",
      children: "structure"
    },
  ],
  "/news/": [
    {
      text: "电子剪报",
      icon: "newspaper",
      children: "structure"
    },
  ],
  "/is/Using_MIS/": [
    {
      text: "Using MIS(11th edition)",
      icon: "copy",
      children: "structure"
    },
  ],
});
