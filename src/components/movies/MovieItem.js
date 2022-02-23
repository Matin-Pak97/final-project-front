import Card from '../ui/Card';
import classes from './MovieItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { faPen, faStar as solidFaStar, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from '../../api/api';

function MovieItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    const history = useHistory();

    function itemClickHandler (event) {
        if (event.target.tagName != 'BUTTON' && event.target.tagName != 'svg' && event.target.tagName != 'path') {
            history.push({
                pathname: '/movie',
                state: { detail: props.id }
            })
        }
    }

    function deleteMovieHandler() {
        api.deleteSingleMovie(props.id);
        window.location.reload(false);
    }

    function editMovieHandler() {
    }
    
    function toggleFavoriteStatusHandler () {
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.img,
                description: props.desc,
                year: props.year,
            })
        }
    }

    return (
        <div className={classes.item} onClick={itemClickHandler}>
            <Card>
                <div className={classes.image}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>Construction Year: {props.year}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={deleteMovieHandler}>
                        <FontAwesomeIcon icon={ faTrashCan } />    
                    </button>
                    <button onClick={editMovieHandler} className={classes.edit}>
                        <FontAwesomeIcon  icon={ faPen } />    
                    </button>
                    <button className={classes.fav} onClick={toggleFavoriteStatusHandler}><FontAwesomeIcon icon={itemIsFavorite ? solidFaStar : faStar } /></button>
                </div>
            </Card>
        </div>
    );
}

export default MovieItem;