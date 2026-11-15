// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  redirects: {
    '/referrals': '/visit-our-welcome-space',
    '/shop': '/our-free-shop',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
