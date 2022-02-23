import MovieItem from '../movies/MovieItem';
import classes from './ListView.module.css';

function ListView(props) {
    return (
        <ul className={classes.list + " ml-5 mr-5"}>
            {props.movies.map(movie => <li key={movie.id}><MovieItem id={movie.id} title={movie.title} img={movie.image} desc={movie.description} year={movie.year}/></li>)}
        </ul>
    );
}

export default ListView;