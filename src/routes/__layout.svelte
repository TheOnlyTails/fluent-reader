<script lang="ts">
  import { Navbar } from "$lib"
  import "../styles/global.scss"
  import "fluent-svelte/theme.css"
</script>

<Navbar />

<main>
  <slot />
</main>
