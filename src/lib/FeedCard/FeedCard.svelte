<script lang="ts">
  type Feed = {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }

  type FeedItem = {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    categories: string[]
  }

  export let feed: { feed: Feed, items: FeedItem[] };
  $: info = feed.feed
  $: items = feed.items
</script>

<article>
  <a href={info.link}>{info.title}</a>
</article>