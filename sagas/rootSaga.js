
//Saga effects
import { fork, call } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
//Add movie
import { watchAddNewMovie, watchUpdateMovie, watchDeleteMovie } from './movieSagas';

export default function* rootSaga() {
    yield fork(watchFetchMovies),
    yield fork(watchAddNewMovie),
    yield fork(watchUpdateMovie),
    yield fork(watchDeleteMovie)

}