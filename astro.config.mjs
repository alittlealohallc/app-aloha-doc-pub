import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Environment-aware configuration
const isProduction = process.env.NODE_ENV === 'production';
const siteUrl = process.env.SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: siteUrl,
  
  integrations: [
    starlight({
      title: 'A Little Aloha Public Docs',
      customCss: ['./src/styles/custom.scss'],
      favicon: '/favicon.svg',
      
      logo: {
        src: '/logo-public.svg',
        replacesTitle: true,
      },
      
      social: {
        github: 'https://github.com/alittlealohallc',
      },
      
      editLink: {
        baseUrl: 'https://github.com/alittlealohallc/app-aloha-doc-pub/edit/main/',
      },
      
      locales: {},
      
      sidebar: [],
      
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: 'Public documentation and articles from A Little Aloha LLC',
          },
        },
      ],
      
      pagefind: true,
      
      markdown: {
        shikiConfig: {
          theme: 'github-light-default',
        },
      },
    }),
  ],
  
  vite: {
    ssr: {
      noExternal: ['@astrojs/starlight'],
    },
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
  },
  
  compressHTML: isProduction,
  
  build: {
    inlineStylesheets: 'auto',
  },
});