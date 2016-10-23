import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import axios from 'axios';

// GENRES
export function retrieveMoviesGenresSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_GENRES_SUCCESS,
		moviesGenres: res.data
	};
}

export function retrieveMoviesGenres() {
	return function (dispatch) {
		return axios.get(`${api.URL}/genre/movie/list?api_key=${api.KEY}`)
		.then(res => {
			dispatch(retrieveMoviesGenresSuccess(res));
		})
		.catch(error => {
			console.log(error); //eslint-disable-line
		});
	};
}

// POPULAR
export function retrievePopularMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	};
}

export function retrievePopularMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/popular?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrievePopularMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Popular', error); //eslint-disable-line
		});
	};
}

// NOW PLAYING
export function retrieveNowPlayingMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
		nowPlayingMovies: res.data
	};
}

export function retrieveNowPlayingMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/now_playing?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveNowPlayingMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Now Playing', error); //eslint-disable-line
		});
	};
}

// MOVIES LIST
export function retrieveMoviesListSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_LIST_SUCCESS,
		list: res.data
	};
}

export function retrieveMoviesList(type, page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/${type}?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveMoviesListSuccess(res));
		})
		.catch(error => {
			console.log('Movies List', error); //eslint-disable-line
		});
	};
}

// SEARCH RESULTS
export function retrieveMoviesSearchResultsSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS,
		searchResults: res.data
	};
}

export function retrieveMoviesSearchResults(query, page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/search/movie/?api_key=${api.KEY}&query=${query}&page=${page}`)
		.then(res => {
			dispatch(retrieveMoviesSearchResultsSuccess(res));
		})
		.catch(error => {
			console.log('Movies Search Results', error); //eslint-disable-line
		});
	};
}

// MOVIE DETAILS
export function retrieveMovieDetailsSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIE_DETAILS_SUCCESS,
		details: res.data
	};
}

export function retrieveMovieDetails(movieId) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/${movieId}?api_key=${api.KEY}&append_to_response=casts,images,videos`)
		.then(res => {
			dispatch(retrieveMovieDetailsSuccess(res));
		})
		.catch(error => {
			console.log('Movie Details', error); //eslint-disable-line
		});
	};
}

// SIMILAR MOVIES
// export function retrieveSimilarMoviesSuccess(res) {
// 	return {
// 		type: types.RETRIEVE_SIMILAR_MOVIES_SUCCESS,
// 		similarMovies: res.data
// 	};
// }
//
// export function retrieveSimilarMovies(movieId, page) {
// 	return function (dispatch) {
// 		return axios.get(`${api.URL}/movie/${movieId}/similar?api_key=${api.KEY}&page=${page}`)
// 		.then(res => {
// 			dispatch(retrieveSimilarMoviesSuccess(res));
// 		})
// 		.catch(error => {
// 			console.log('Similar Movies', error); //eslint-disable-line
// 		});
// 	};
// }
