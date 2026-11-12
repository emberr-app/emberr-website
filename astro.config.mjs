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
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/inter_regular.ttf'], weight: 400, style: 'normal', display: 'swap' },
          { src: ['./src/assets/fonts/inter_medium.ttf'], weight: 500, style: 'normal', display: 'swap' },
          { src: ['./src/assets/fonts/inter_bold.ttf'], weight: 700, style: 'normal', display: 'swap' }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Lora',
      cssVariable: '--font-lora',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/lora_regular.ttf'], weight: 400, style: 'normal', display: 'swap' },
          { src: ['./src/assets/fonts/lora_bold.ttf'], weight: 700, style: 'normal', display: 'swap' }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      fallbacks: ['monospace'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/jetbrainsmono_regular.ttf'], weight: 400, style: 'normal', display: 'swap' }
        ]
      }
    }
  ]
});
