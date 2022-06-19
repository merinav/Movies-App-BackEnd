import axios from 'axios';
import NodeCache from 'node-cache';
import { convertTmdbMovieToMovie } from '../converters/movie.converter';
import { convertTmdbMovieDetailstoMovieDetails } from '../converters/movie-details.converter';

const movieCache = new NodeCache();

const getMovies = async (pageNumber: number): Promise<Movies> => {
  const moviesKey = `movies-page-${pageNumber}`;
  const movies: Movies = movieCache.get(moviesKey)!;
  if (movies) {
    return movies;
  } else {
    const response = await axios.get<TmdbMovies>(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${pageNumber}&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
    );
    const convertedMovies: Movies = {
      page: Number(pageNumber),
      totalPages: response.data.total_pages,
      movies: response.data.results.map(convertTmdbMovieToMovie),
    };
    movieCache.set(moviesKey, convertedMovies);
    return convertedMovies;
  }
};

export { getMovies };

const getMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  const movieDetailsKey = `movie-${movieId}`;
  const movieDetails: MovieDetails = movieCache.get(movieDetailsKey)!;
  if (movieDetails) {
    return movieDetails;
  } else {
    const response = await axios.get<TmdbMovieDetails>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    );
    const convertedMovieDetails: MovieDetails = convertTmdbMovieDetailstoMovieDetails(response.data);
    movieCache.set(movieDetailsKey, convertedMovieDetails);
    return convertedMovieDetails;
  }
};

export { getMovieDetails };

const searchMoviesByTitle = async (movieTitle: string, pageNumber: number): Promise<Movies> => {
  const response = await axios.get<TmdbMovies>(
    `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&page=${pageNumber}&api_key=${process.env.API_KEY}`,
  );
  const convertedSearchByTitleResult: Movies = {
    page: Number(pageNumber),
    totalPages: response.data.total_pages,
    movies: response.data.results.map(convertTmdbMovieToMovie),
  };
  return convertedSearchByTitleResult;
};

export { searchMoviesByTitle };
