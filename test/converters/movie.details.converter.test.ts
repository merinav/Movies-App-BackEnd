import { expect } from '@jest/globals';
import { convertTmdbMovieDetailstoMovieDetails } from './../../src/converters/movie-details.converter';

//genres: Genre[]
const testGenre: Genre = {
  id: 1,
  name: 'genre_name',
};

const testGenreArray = [testGenre, testGenre];

//production_companies: TmdbProductionCompany[]
const testTmdbMovieDetailsProductionCompanies: TmdbProductionCompany = {
  id: 2,
  logo_path: 'logo_path',
  name: 'production_company_name',
  origin_country: 'origin_country',
};

const testTmdbMovieDetailsProductionCompaniesArray = [
  testTmdbMovieDetailsProductionCompanies,
  testTmdbMovieDetailsProductionCompanies,
];

//production_countries: TmdbProductionCountry[]
const testTmdbMovieDetailsProductionCountries: TmdbProductionCountry = {
  iso_3166_1: 'iso_3166_1',
  name: 'production_country_name',
};

const testTmdbMovieDetailsProductionCountriesArray = [
  testTmdbMovieDetailsProductionCountries,
  testTmdbMovieDetailsProductionCountries,
];

//spoken_languages: TmdbSpokenLanguage[]
const testTmdbMovieDetailsSpokenLanguages: TmdbSpokenLanguage = {
  english_name: 'english_name',
  iso_639_1: 'iso_639_1',
  name: 'spoken_language_name',
};

const testTmdbMovieDetailsSpokenLanguagesArray = [
  testTmdbMovieDetailsSpokenLanguages,
  testTmdbMovieDetailsSpokenLanguages,
];

//testTmdbMovieDetails
const testTmdbMovieDetails: TmdbMovieDetails = {
  budget: 3,
  genres: testGenreArray,
  homepage: 'homepage',
  original_language: 'original_language',
  original_title: 'original_title',
  overview: 'overview',
  production_companies: testTmdbMovieDetailsProductionCompaniesArray,
  production_countries: testTmdbMovieDetailsProductionCountriesArray,
  revenue: 4,
  runtime: 5,
  spoken_languages: testTmdbMovieDetailsSpokenLanguagesArray,
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

//productionCompanies: ProductionCompany[]
const testMovieDetailsProductionCompanies: ProductionCompany = {
  id: 2,
  logoPath: 'logo_path',
  name: 'production_company_name',
  originCountry: 'origin_country',
};

const testMovieDetailsProductionCompaniesArray = [
  testMovieDetailsProductionCompanies,
  testMovieDetailsProductionCompanies,
];

//productionCountries: ProductionCountry[]
const testMovieDetailsProductionCountries: ProductionCountry = {
  iso: 'iso_3166_1',
  name: 'production_country_name',
};

const testMovieDetailsProductionCountriesArray = [
  testMovieDetailsProductionCountries,
  testMovieDetailsProductionCountries,
];

// spokenLanguages: SpokenLanguage[]
const testMovieDetailsSpokenLanguages: SpokenLanguage = {
  englishName: 'english_name',
  iso: 'iso_639_1',
  name: 'spoken_language_name',
};

const testMovieDetailsSpokenLanguagesArray = [testMovieDetailsSpokenLanguages, testMovieDetailsSpokenLanguages];

//testMovieDetails
const testMovieDetails: MovieDetails = {
  budget: 3,
  genres: testGenreArray,
  homepage: 'homepage',
  originalLanguage: 'original_language',
  originalTitle: 'original_title',
  overview: 'overview',
  productionCompanies: testMovieDetailsProductionCompaniesArray,
  productionCountries: testMovieDetailsProductionCountriesArray,
  revenue: 4,
  runtime: 5,
  spokenLanguages: testMovieDetailsSpokenLanguagesArray,
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

//test
test('receives TmdbMovieDetails returns MovieDetails', () => {
  expect(convertTmdbMovieDetailstoMovieDetails(testTmdbMovieDetails)).toEqual(testMovieDetails);
});
