<script type="text/javascript">
  import { ROUTES } from 'routes';
  import SideNavLink from 'shared/sidenavLink';
  import { getSidenavProps } from 'helper';

  export let isActive = false;
</script>

<li>
  <SideNavLink
    route={ROUTES.library}
    getProps={getSidenavProps}
    name="Your Library">
    <svg
      viewBox="0 0 512 512"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      class="side-nav-icon">

      {#if isActive}
        <path
          d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64
          463.746v-384h42.666v384h-42.666zM170.667
          463.746v-384h42.667v384h-42.666z"
          fill="currentColor" />
      {:else}
        <path
          d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64
          463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" />
      {/if}
    </svg>
  </SideNavLink>
</li>
