import NewMovieForm from "../components/movies/NewMovieForm";
import { useHistory } from "react-router-dom";
import api from "../api/api";

function EditMoviePage() {
    const history = useHistory();

    function addMovieHandler(movieData) {

        api.createMovie(movieData);
        history.replace('/');
    }

    return (
        <section>
            <h1>Add New Movie</h1>
            <NewMovieForm onAddMovie={addMovieHandler}/>
        </section>
    );
}

export default NewMoviePage;