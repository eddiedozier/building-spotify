import {
  ROUTES
} from 'routes';

export const getSidenavProps = ({
  isCurrent,
  href
}) => {
  const baseClasses = `side-nav-link group flex sidebar-text items-center text-sm leading-5
              font-medium hover:text-white focus:outline-none focus:text-white transition ease-in-out duration-200`;
  if (isCurrent) {
    const classes = `active-nav focus:bg-activeGray ${baseClasses}`;

    if (href === ROUTES.likedSongs) {
      return {
        class: `${baseClasses} playlist-link-active`
      }

    } else {
      return {
        class: classes,
      };
    }
  }

  if (href === ROUTES.likedSongs) {
    return {
      class: `${baseClasses} playlist-link`,
    };
  }

  return {
    class: baseClasses,
  };
}