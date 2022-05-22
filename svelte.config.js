import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer(), cssnano()]
    }
  }),

  experimental: {
    inspector: {
      toggleKeyCombo: "alt-a"
    }
  },

  kit: {
    adapter: adapter(),
  }
}

export default config
