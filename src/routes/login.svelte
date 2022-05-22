<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit"
  import { supabase, user as userStore } from "$lib/data"

  export const load: Load = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github"
    })

    userStore.set(user)

    return {
      props: {
        user,
        session,
      },
      redirect: "/",
      status: 302,
    }
  }
</script>

<h1>Logging you in</h1>

<style lang="scss">
	@use "src/styles/mixins" as *;

	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		@include loading-dots;
		font-size: 4em;
	}
</style>