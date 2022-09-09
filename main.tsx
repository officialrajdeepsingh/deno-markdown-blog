/** @jsx h */

import blog, { h } from "blog";
import { Section } from './components/Section.jsx';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


blog({
  author: "Rajdeep singh",
  title: "Hello, my name is Rajdeep Singh",
  description: "Nice to meet you",
  avatar:`${Deno.env.get("URL")}assets/logos/profile.jpg`,
  avatarClass: "rounded-full",
  coverTextColor:"white",
  links: [
    { title: "Email", url: "mailto:officialrajdeepsingh@gmail.com" },
    { title: "GitHub", url: "https://github.com/officialrajdeepsingh" },
    { title: "Twitter", url: "https://twitter.com/Official_R_deep" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/officalrajdeepsingh/" },
  ],
  lang: "en",
  favicon: `${Deno.env.get("URL")}favicon.ico`,
  section: <Section/>,
  theme:"auto",
  cover:`${Deno.env.get("URL")}assets/logos/backgroundbanner.png`,
  ogImage: {
    url: `${Deno.env.get("URL")}assets/logos/Frame.png`,
    twitterCard:"summary_large_image" 
  },
  style:".markdown-body ul, .markdown-body ol { list-style: disc !important;}"
});
