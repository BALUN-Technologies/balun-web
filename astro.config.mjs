// import { defineConfig } from "astro/config";

// import react from "@astrojs/react";

// // https://astro.build/config
// import tailwind from "@astrojs/tailwind";

// const isProd = process.env.NODE_ENV === "production";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [react(), tailwind()],
//   site: "https://creativetimofficial.github.io",
//   base: "/astro-launch-ui/",
// });
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://balun-website1.vercel.app", // ← match your deployed URL
  base: "/", // ← base should be '/' for root deployment
});