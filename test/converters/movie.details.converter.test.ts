import { expect } from '@jest/globals';
import { convertTmdbMovieDetailstoMovieDetails } from './../../src/converters/movie-details.converter';

const testGenres = [{ id: 1, name: 'genre_name' }];

const testTmdbMovieDetailsProductionCompanies = [
  {
    id: 2,
    logo_path: 'logo_path',
    name: 'production_company_name',
    origin_country: 'origin_country',
  },
];

const testTmdbMovieDetailsProductionCountries = [
  {
    iso_3166_1: 'iso_3166_1',
    name: 'production_country_name',
  },
];

const testTmdbMovieDetailsSpokenLanguages = [
  {
    english_name: 'english_name',
    iso_639_1: 'iso_639_1',
    name: 'spoken_language_name',
  },
];

const testTmdbMovieDetails: TmdbMovieDetails = {
  budget: 3,
  genres: testGenres,
  homepage: 'homepage',
  original_language: 'original_language',
  original_title: 'original_title',
  overview: 'overview',
  production_companies: testTmdbMovieDetailsProductionCompanies,
  production_countries: testTmdbMovieDetailsProductionCountries,
  revenue: 4,
  runtime: 5,
  spoken_languages: testTmdbMovieDetailsSpokenLanguages,
  status: 'status',
  tagline: 'tagline',
  title: 'title',
  vote_count: 6,
  id: 7,
  release_date: 'date',
  backdrop_path: 'backdrop_Path',
  poster_path: 'poster_Path',
  vote_average: 8,
};

const testMovieDetailsProductionCompanies = [
  {
    id: 2,
    logoPath: 'logo_path',
    name: 'production_company_name',
    originCountry: 'origin_country',
  },
];

const testMovieDetailsProductionCountries = [
  {
    iso: 'iso_3166_1',
    name: 'production_country_name',
  },
];

const testMovieDetailsSpokenLanguages = [
  {
    englishName: 'english_name',
    iso: 'iso_639_1',
    name: 'spoken_language_name',
  },
];

const testMovieDetails: MovieDetails = {
  budget: 3,
  genres: testGenres,
  homepage: 'homepage',
  originalLanguage: 'original_language',
  originalTitle: 'original_title',
  overview: 'overview',
  productionCompanies: testMovieDetailsProductionCompanies,
  productionCountries: testMovieDetailsProductionCountries,
  revenue: 4,
  runtime: 5,
  spokenLanguages: testMovieDetailsSpokenLanguages,
  status: 'status',
  tagline: 'tagline',
  title: 'title',
  voteCount: 6,
  movieId: 7,
  releaseDate: 'date',
  backdropPath: 'https://image.tmdb.org/t/p/original' + 'backdrop_Path',
  posterPath: 'https://image.tmdb.org/t/p/original' + 'poster_Path',
  voteAverage: 8,
};

test('receives TmdbMovieDetails returns MovieDetails', () => {
  expect(convertTmdbMovieDetailstoMovieDetails(testTmdbMovieDetails)).toEqual(testMovieDetails);
});
