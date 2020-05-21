<script type="text/javascript">
  export let title = '';
  export let type = '';
  export let image = '';

  let playing = false;

  function togglePlaying() {
    playing = !playing;
  }
</script>

<style type="text/css">
  .artist-container {
    @apply bg-activeGray;
    width: 164px;
    height: 238px;
    padding: 20px 20px 16px;
    border-radius: 8px;
  }
  .img-container {
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
  }
  img {
    max-height: 124px;
    width: 100%;
  }
  .info {
    min-height: 62px;
  }
  .title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: left;
    word-break: break-all;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.24px;
    z-index: 1;
  }
  .type {
    @apply text-textGray;
    font-size: 12px;
    line-height: 18px;
    text-overflow: ellipsis;
    padding: 0;
    margin-top: 4px;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .player {
    right: 16px;
    opacity: 0;
    pointer-events: none;
    bottom: 16px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
    border-radius: 500px;
  }
  .artist-container:hover .player {
    opacity: 1;
    pointer-events: auto;
    position: absolute;
  }
  button {
    @apply bg-appGreen;
    z-index: 1;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.76px;
    text-transform: uppercase;
    --size: 40px;
    border: 0;
    border-radius: 100%;
    color: #fff;
    transition: transform 33ms cubic-bezier(0.3, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size);
    width: var(--size);
    min-width: var(--size);
  }
  button:hover {
    transform: scale(1.06);
  }
</style>

<div class="artist-container flex flex-1 flex-col relative">
  <div class="img-container rounded-full">
    <img src={image} alt={title} class:rounded-full={type === 'Artist'} />
  </div>
  <div class="info">
    <a href="/" {title}>
      <span class="title text-white overflow-hidden">{title}</span>
    </a>
    <span class="type">{type}</span>
  </div>
  <div class="player">
    <button type="button" on:click={togglePlaying} class="focus:outline-none">
      {#if playing}
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <rect x="5" y="3" width="4" height="18" fill="currentColor" />
          <rect x="15" y="3" width="4" height="18" fill="currentColor" />
        </svg>
      {:else}
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="currentColor" />
        </svg>
      {/if}
    </button>
  </div>
</div>
