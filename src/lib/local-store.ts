import { writable } from "svelte/store"
import { browser } from "$app/env"

export const localStore = <T>(key: string, defaultValue: T) => {
  const store = writable<T>(browser
    ? JSON.parse(window.localStorage.getItem(key) ?? JSON.stringify(defaultValue))
    : defaultValue
  )

  store.subscribe((value) => {
    if (browser) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  })

  return store
}
