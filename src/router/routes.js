import AllMoviesPage from '../pages/AllMovies';
import FavoritesPage from '../pages/Favorites';
import NewMoviePage from '../pages/NewMovie';
import SingleMovie from '../pages/SingleMovie';
import path from "../router/paths";

const routes = [
    {
        component: AllMoviesPage,
        path: path.main,
    },
    {
        component: FavoritesPage,
        path: path.favorites,
    },
    {
        component: NewMoviePage,
        path: path.newMovie,
    },
    {
        component: SingleMovie,
        path: path.SingleMovie
    }
]

export default routes;