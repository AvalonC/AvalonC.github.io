import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AvalonC's Blog",
  description: "AvalonC's Blog",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
