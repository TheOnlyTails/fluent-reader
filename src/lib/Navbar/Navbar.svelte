<script lang="ts">
  import Book from "@fluentui/svg-icons/icons/book_20_regular.svg?raw"
  import Login from "@fluentui/svg-icons/icons/arrow_enter_20_filled.svg?raw"
  import { Button, IconButton } from "fluent-svelte"
  import { user } from "$lib/data"
</script>

<nav>
  <header>
    <a href="/">{@html Book} Fluent Reader</a>
  </header>
  <ul>
    <li>
      <Button href="/feeds">Feeds</Button>
    </li>
    <li>
      <Button href="/profile">Profile</Button>
    </li>
  </ul>
  {#if !$user}
    <IconButton href="/login" title="Login with GitHub">
      {@html Login}
    </IconButton>
  {/if}
</nav>

<style lang="scss">
	@use "src/styles/mixins" as *;

	nav {
		display: flex;
		gap: 2rem;
		padding: 1rem;
		border-block-end: solid 1px var(--fds-divider-stroke-default);
		background: var(--fds-solid-background-secondary);

		header a {
			font-family: var(--fds-font-family-display);
			font-size: 1.5rem;

			display: flex;
			align-items: center;
			gap: 0.5ch;

			// disable link styling
			color: currentColor;
			text-decoration: none;
		}

		ul {
			list-style: none;
			display: flex;
			gap: 1rem;
			padding: 0;
			margin: 0;
		}

		:global(:last-child) {
			margin-inline-start: auto;
		}
	}

	:global(svg) {
		@include icon;
	}
</style>