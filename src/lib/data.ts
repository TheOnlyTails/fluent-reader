import { derived } from "svelte/store"
import { createClient, type User } from "@supabase/supabase-js"
import { localStore } from "$lib/local-store"

export const supabase = createClient("https://vcrysldwlgqzunsrwrkb.supabase.co", import.meta.env.VITE_SUPABASE_KEY)

export const user = localStore<User | null>("user", null)

export const feeds = derived(user, async (user) => {
    if (user) {
      let { data: feeds }: { data: string[] | null, error: any } = await supabase.from("feeds")
        .select("feeds")
        // .eq("github_username", user.github_username)

      return feeds
    } else {
      return null
    }
  }
)