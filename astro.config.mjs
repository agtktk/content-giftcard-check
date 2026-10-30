import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({site:'https://content-giftcard-check.pages.dev',output:'static',trailingSlash:'always',integrations:[mdx()],devToolbar:{enabled:false}});
