import { useState, useEffect } from "react";
import ListView from "../components/ui/ListView";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridView from "../components/ui/GridView";
import api from "../api/api";

function AllMoviesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    setIsLoading(true);

    api.fetchAllMovies()
      .then((response) => {
        setIsLoading(false);
        setLoadedMovies(response.data);
      })
      .catch((error) => { 
          setLoadedMovies([]);
      });

  }, []);

  useEffect(() => {
    if (searchTitle) {
      api.fetchFilteredMovieList(searchTitle).then((response) => {
        setIsLoading(false);
        setLoadedMovies(response.data);
      })
    } else {
      api.fetchAllMovies()
      .then((response) => {
        setIsLoading(false);
        setLoadedMovies(response.data);
      })
      .catch((error) => { 
          setLoadedMovies([]);
      });
    }
  }, [searchTitle]);

  function searchHandler(event) {
    setSearchTitle(event.target.value);
  }

  if (isLoading) {  
    return (
      <section>
        <h5>Loading...</h5>
      </section>
    );
  }

  return (
  <section>
      <h1>All Movies</h1>
      <div className="row">
        <div className="col-md-6">
          <input onChange={searchHandler} type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="col-md-6 text-right">       
          <button
              className="grid-list-toggle"
              onClick={() => setToggleViewMode(!toggleViewMode)}
          >
            <FontAwesomeIcon icon={toggleViewMode ? faGrip : faList } />          
          </button>
        </div>
      </div>
      {toggleViewMode ? <GridView movies={loadedMovies} /> : <ListView movies={loadedMovies} /> }
     
  </section>);
}

export default AllMoviesPage;