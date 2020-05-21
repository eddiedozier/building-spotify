<script type="text/javascript">
  import CardPlayer from 'shared/cardPlayer';

  export let title = '';
  export let subTitle = '';
  export let data = [];
</script>

<style>
  .grid-template {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
    grid-auto-rows: 0;
    grid-template-rows: auto 1fr;
    overflow: hidden;
    max-height: 238px;
  }
  .genre-container {
    min-height: 300px;
  }
  span {
    font-size: 14px;
    font-family: 'Circular Spotify Tx T Light', Helvetica, sans-serif;
  }
</style>

<section class="mx-auto px-4 sm:px-6 md:px-8">
  <div class="flex items-center justify-between">
    <div class="flex-initial">
      <a href="/" class="inline-block">
        <h2 class="genre-header-text text-white">{title}</h2>
      </a>
      <span class="text-textGray block">{subTitle}</span>
    </div>
    {#if data.length > 3}
      <div class="flex-initial text-white">
        <a href="/" class="genre-see-all">See All</a>
      </div>
    {/if}

  </div>

  <div class="genre-container flex flex-col py-3">
    <div class="grid-template">
      {#each data as { artist, type, image, albums }}
        <CardPlayer title={artist} {type} {image} />
        {#each albums as { name, cover }}
          <CardPlayer title={name} type={artist} image={cover} />
        {/each}
      {/each}
    </div>
  </div>
</section>
