import axios from 'axios';
import { convertTmdbMovieToMovie } from '../converters/movie.converter';

const getMovies = async (): Promise<Movies> => {
  const response = await axios.get<TmdbMovies>(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
  );
  const responseMovies = response.data.results;
  const convertedResult: Movies = {
    page: 1,
    totalPages: response.data.total_pages,
    movies: responseMovies.map(convertTmdbMovieToMovie),
  };
  return convertedResult;
};

export { getMovies };
