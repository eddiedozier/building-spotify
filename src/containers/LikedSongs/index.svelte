<script type="text/javascript">
  import { CONSTANTS } from 'globalConstants';
  import LikedHeartIcon from 'shared/icons/likedHeart';
</script>

<svelte:head>
  <title>{CONSTANTS.appName} - Liked Songs</title>
</svelte:head>

<div class="mx-auto px-4 sm:px-6 md:px-8">
  <h1 class="text-2xl font-semibold text-white">Liked Songs</h1>
</div>

<div class="mx-auto px-4 sm:px-6 md:px-8">
  <div class="py-4">
    <div class="border-4 border-dashed border-gray-200 rounded-lg h-64">
      <LikedHeartIcon width="232px" height="232px" />
    </div>
  </div>
</div>
