import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://abduvohid.uz",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
