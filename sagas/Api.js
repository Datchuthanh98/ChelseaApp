
const axios = require('axios');
const urlGetMovies = 'http://192.168.1.116:3000/movies';
const urlPostMovies = 'http://192.168.1.116:3000/movies';
const urlUpdateMovie = 'http://192.168.1.116:3000/movies';
const urlDeleteMovie = 'http://192.168.1.116:3000/movies';


function* getMoviesFromApi() {
    return yield fetch(urlGetMovies).then(res =>res.json()).catch(err=> console.log(err))
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    return yield (response.status === 200);//true or false
}
//send PUT request to update existing Movie
function* updateMovieFromApi(updatedMovie) {
    console.log(updatedMovie);
    const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
    const response = yield fetch(urlLink, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: updatedMovie.id,
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear,
        }),
    });
    return yield (response.status === 200);//true or false
}
//send DELETE request to update existing Movie
function* deleteMovieFromApi(deletedMovieId) {
    const urlLink = `${urlDeleteMovie}/${deletedMovieId}`;
    const response = yield fetch(urlLink, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    });
    return yield (response.status === 200);//true or false
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi,
    deleteMovieFromApi
}; 