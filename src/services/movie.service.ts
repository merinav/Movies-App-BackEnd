import axios from 'axios';
import { convertTmdbMovieToMovie } from '../converters/movie.converter';
import { convertTmdbMovieDetailstoMovieDetails } from '../converters/movie-details.converter';

const getMovies = async (): Promise<Movies> => {
  const response = await axios.get<TmdbMovies>(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
  );
  const responseMovies = response.data.results;
  const convertedMovies: Movies = {
    page: 1,
    totalPages: response.data.total_pages,
    movies: responseMovies.map(convertTmdbMovieToMovie),
  };
  console.log(convertedMovies);
  return convertedMovies;
};

export { getMovies };

const getMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  const response = await axios.get<TmdbMovieDetails>(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  const convertedMovieDetails: MovieDetails = convertTmdbMovieDetailstoMovieDetails(response.data);
  console.log(convertedMovieDetails);
  return convertedMovieDetails;
};

export { getMovieDetails };
