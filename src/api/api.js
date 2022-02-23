import axios from "../utils/axios";


function api() {

  return {
    deleteSingleMovie: (id) => {
      const url = `/movie/delete`;
      return axios.delete(url, {
        params: {
          id
        }
      })
    },

    fetchSingleMovie: (id) => {
        const url = `/movie`;
        return axios.get(url, {
          params: {
              id
          }
        });
      },

    fetchFilteredMovieList: (filter) => {
      const url = `/movie`;
      return axios.get(url, {
        params: {
            filter
        }
      });
    },

    fetchAllMovies: () => {
      const url = `/movie`;
      return axios.get(url, {
      });
    },

    // createMovie: (title1, image1, description1) => {
    //   const url = `/movie`;
    //   return axios.post(url, {
    //     params: {
    //         title: title1,
    //         image: image1,
    //         description: description1,
    //     }
    //   });
    // },

    // fetchFilteredMovies: (title) => {
    //     const url = 'http://127.0.0.1:8080/movie';
    //     fetch(url,
    //         {
    //             method: 'GET',
    //             body: JSON.stringify(title),
    //         }
    //         ).then((response) => {
    //             return response;
    //         });
    //   },

    // deleteSingleMovie: (id) => {
    //   const url = `http://127.0.0.1:8080/movie/delete`;
    //   fetch(url, {
    //     method: 'DELETE',
    //     body: JSON.stringify(id)
    //   });
    // },

    createMovie: (movieData) => {
        const url = 'http://127.0.0.1:8080/movie';
        fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(movieData),
        }
        ).then((response) => {
            console.log(response);
        });
      },
  };
}

export default api();