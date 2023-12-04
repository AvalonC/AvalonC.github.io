import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/":[
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
    "README",
    "Structure",
    {
      text: "Part1.Why MIS?",
      icon: "book",
      prefix: "part1/",
      collapsible: true,
      children: [
        "The_Importance_of_MIS"
      ],
    },
  ],
});
