/* eslint-disable indent */
import Home from 'Home';
import Projects from 'Projects';
import Library from 'Library';
import Search from 'Search';
import LikedSongs from 'LikedSongs';
import NotFound from 'NotFound';

export const ROUTES = {
    home: '/',
    search: '/search',
    projects: '/projects',
    library: '/library',
    likedSongs: '/collection/tracks'
}

export const routes = [{
        component: Home,
        path: ROUTES.home,
    },
    {
        component: Projects,
        path: ROUTES.projects,
    },
    {
        component: Library,
        path: ROUTES.library,
    },
    {
        component: Search,
        path: ROUTES.search,
    },
    {
        component: LikedSongs,
        path: ROUTES.likedSongs,
    },
    {
        component: NotFound,
    },
];