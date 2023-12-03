import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  {
    text: "剪报集",
    icon: "newspaper",
    link: "/news/",
  },
  {
    text: "讨论集",
    icon: "blog",
    prefix: "/is/",
    children: [
      {
        text: "Using MIS",
        icon: "pen-to-square",
        prefix: "Using_MIS/",
        children: ["README"]
      }
    ],
  },
]);
