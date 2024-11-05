import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://amenti4k.github.io',
  output: 'static',
  adapter: netlify()
});