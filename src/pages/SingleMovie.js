import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api";
import Card from "../components/ui/Card";

function SingleMovie() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const location = useLocation();

  useEffect(() => {
     console.log(location.pathname); // result: '/secondpage'
     console.log(location.state.detail); // result: 'some_value'
     api.fetchSingleMovie(location.state.detail)
      .then((response) => {
        setMovie(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => { 
        setMovie();
      });
  }, []);

  if (isLoading) {  
    return (
      <section>
        <h5>Loading...</h5>
      </section>
    );
  }

  return (
    <section>
        <h1>{movie.title}</h1>
            <div className="row">
                <div className="col-6 mx-auto" >
                    <Card>
                        <div className="p-2">
                            <img src={movie.image} width="100%"></img>

                            <div className="m-2">
                                <p>Construction Year : {movie.year}</p>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
    </section>);
}

export default SingleMovie;