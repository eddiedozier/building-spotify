<script type="text/javascript">
  import { ROUTES } from 'routes';
  import SideNavLink from 'shared/sidenavLink';
  import { getSidenavProps } from 'helper';

  export let isActive = false;
</script>

<li>
  <SideNavLink route={ROUTES.home} getProps={getSidenavProps} name="Home">

    <svg
      class="side-nav-icon"
      viewBox="0 0 512 512"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg">
      {#if isActive}
        <path
          d="M448
          463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746
          192 110.984v316.19z" />
      {:else}
        <path
          d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063
          L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L
          428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L
          448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L
          213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" />
      {/if}
    </svg>

  </SideNavLink>
</li>
