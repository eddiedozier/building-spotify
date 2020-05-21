<script type="text/javascript">
  import { Link } from 'svelte-routing';
  export let route = '/';
  export let name = '';
  export let getProps;
</script>

<style type="text/css">
  p {
    margin-top: 1px;
  }
</style>

<Link to={route} {getProps}>
  <slot />
  <p>{name}</p>
</Link>
