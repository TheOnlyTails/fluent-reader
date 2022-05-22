<script lang="ts">
  import { user, feeds as feedsPromise } from "$lib/data"
  import { FeedCard } from "$lib"
</script>

{#if $user}
  <div class="feeds">
    {#await $feedsPromise}
      <h1 class="title-loading">Loading</h1>
    {:then feeds}
      <h1 class="title-feeds">Your Feeds</h1>
      {#each feeds as feedUrl}
        {#await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`) then feed}
          <FeedCard {feed} />
        {/await}
      {:else}
        <h1>No feeds yet! Add some above!</h1>
      {/each}
    {/await}
  </div>
{:else}
  <h1 class="title-login">Login with Github <a href="/login">here</a>!</h1>
{/if}

<style lang="scss">
	@use "src/styles/mixins" as *;

	.title {
		&-loading {
			@include loading-dots;
		}
	}
</style>