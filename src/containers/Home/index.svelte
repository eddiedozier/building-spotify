<script type="text/javascript">
  import { CONSTANTS } from 'globalConstants';
  import GenreCategory from 'shared/genreCategory';
  import api from 'artists.json';

  const randomizeData = [];

  for (let i = 0; i <= 3; i++) {
    randomizeData.push(api.data[Math.floor(Math.random() * 4 + 0)]);
  }
</script>

<style type="text/css">
  section {
    margin-bottom: 3.75rem;
  }
</style>

<svelte:head>
  <title>{CONSTANTS.appName}</title>
</svelte:head>

<section>
  <GenreCategory title="Recently played" data={api.data} />
  <GenreCategory
    title="Your heavy rotation"
    data={[api.data[api.data.length - 1]]} />
  <GenreCategory
    title="Jump back in"
    subTitle="Your top listens from the past few months."
    data={randomizeData} />
</section>
