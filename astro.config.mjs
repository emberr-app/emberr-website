// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://emberr.app',
  integrations: [react(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/poppins_regular.ttf'], weight: 400, style: 'normal', display: 'swap' },
          { src: ['./src/assets/fonts/poppins_medium.ttf'], weight: 500, style: 'normal', display: 'swap' },
          { src: ['./src/assets/fonts/poppins_bold.ttf'], weight: 700, style: 'normal', display: 'swap' }
        ]
      }
    }
  ]
});
