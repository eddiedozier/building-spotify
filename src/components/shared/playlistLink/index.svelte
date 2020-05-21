<script type="text/javascript">
  import { link } from 'svelte-routing';
  export let route = '/';
  export let text = '/';
</script>

<style type="text/css">
  .playlist-item {
    font-family: 'Circular Spotify Tx T Light', Helvetica, sans-serif;
    font-size: 14px;
    padding: 6px 0 5px 8px;
    letter-spacing: 0.03em;
  }
</style>

<a use:link href={route} class="playlist-link">
  <li class="playlist-item">{text}</li>
</a>
