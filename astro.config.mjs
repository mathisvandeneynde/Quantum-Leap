import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  // ── Verander dit naar jouw GitHub repo naam ──
  // Als je repo heet "quantum-leap-physics" op GitHub Pages:
  // base: '/quantum-leap-physics'
  // Als je een eigen domein hebt, laat je dit weg.
  base: '/quantum-leap-physics',

  integrations: [mdx()],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
});
