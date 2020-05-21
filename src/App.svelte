<script type="text/javascript">
  import { Router, Route } from 'svelte-routing';
  import 'alpinejs';

  import Layout from 'Layout';
  import { routes } from 'routes';
</script>

<style global src="./global.css">

</style>

<Router>
  {#each routes as { component, path }}
    <Route {path}>
      <Layout>
        <svelte:component this={component} />
      </Layout>
    </Route>
  {/each}
</Router>
