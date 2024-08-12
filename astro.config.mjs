import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vue from "@astrojs/vue";
import robotsTxt from 'astro-robots-txt'

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelgdro.com",
  integrations: [tailwind(), vue(), sitemap(), robotsTxt()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});