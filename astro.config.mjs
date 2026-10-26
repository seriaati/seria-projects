// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://projects.seria.moe",
  build: {
    inlineStylesheets: "always",
  },
  fonts: [
    {
      name: "Cormorant Garamond",
      cssVariable: "--serif",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      name: "Cormorant Garamond",
      cssVariable: "--serif",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["italic"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      name: "DM Sans",
      cssVariable: "--sans",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      name: "Birthstone",
      cssVariable: "--script",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      fallbacks: ["cursive"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
