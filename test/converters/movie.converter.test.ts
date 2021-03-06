import { expect } from '@jest/globals';
import { convertTmdbMovieToMovie } from './../../src/converters/movie.converter';

const testTmdbMovie = {
  id: 1,
  title: 'Title',
  release_date: 'Date',
  backdrop_path: 'backdropPath',
  poster_path: 'posterPath',
  vote_average: 9,
};

const testMovie = {
  movieId: 1,
  title: 'Title',
  releaseDate: 'Date',
  backdropPath: 'https://image.tmdb.org/t/p/w500' + 'backdropPath',
  posterPath: 'https://image.tmdb.org/t/p/w500' + 'posterPath',
  voteAverage: 9,
};

test('receives TmdbMovie returns Movie', () => {
  expect(convertTmdbMovieToMovie(testTmdbMovie)).toEqual(testMovie);
});
