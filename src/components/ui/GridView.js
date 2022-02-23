import MovieItem from '../movies/MovieItem';
import classes from './ListView.module.css';

function GridView(props) {
    return (
        <div className="row">
            {props.movies.map(movie => <div className='col-md-3' key={movie.id}><MovieItem id={movie.id} title={movie.title} img={movie.image} desc={movie.description} year={movie.year}/></div>)}
        </div>
    );
}

export default GridView;