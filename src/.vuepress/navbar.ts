import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  {
    text: "MIS之我见",
    icon: "blog",
    prefix: "/is/",
    children: [
      {
        text: "Using MIS",
        icon: "pen-to-square",
        prefix: "Using_MIS/",
        children: ["README.md"]
      }
    ],
  },
]);
