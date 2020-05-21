<script type="text/javascript">
  import { onMount } from 'svelte';
  import Topbar from './topbar';
  import Sidebar from './sidebar';
  import Playbar from './playbar';

  let mainContainer;
  let position = 0;

  onMount(() => {
    mainContainer.addEventListener('scroll', () => {
      position = mainContainer.scrollTop;
    });
  });
</script>

<div
  class="h-screen flex overflow-hidden bg-darkgray"
  x-data={'{sidebarOpen: false}'}
  x-on:keydown.window.escape="sidebarOpen = false">

  <Sidebar />
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <Topbar {position} />
    <main
      class="flex-1 relative z-0 overflow-y-auto py-3 focus:outline-none"
      bind:this={mainContainer}
      x-data
      x-init="$el.focus()">
      <slot />
    </main>
  </div>
</div>

<Playbar />
