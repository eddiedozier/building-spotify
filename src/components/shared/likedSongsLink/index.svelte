<script type="text/javascript">
  import { ROUTES } from 'routes';
  import SideNavLink from 'shared/sidenavLink';
  import { getSidenavProps } from 'helper';
  import LikedHeartIcon from 'shared/icons/likedHeart';
</script>

<SideNavLink
  route={ROUTES.likedSongs}
  getProps={getSidenavProps}
  name="Liked Songs">

  <LikedHeartIcon width="32px" height="32px" classes="mr-4" />
</SideNavLink>
