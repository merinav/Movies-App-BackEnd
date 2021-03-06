import { convertTmdbMovieToMovie } from './movie.converter';

const IMG_PREFIX_ORIGINAL = 'https://image.tmdb.org/t/p/original';

const convertToProductionCountry = (tmdbProductionCountry: TmdbProductionCountry): ProductionCountry => {
  return {
    iso: tmdbProductionCountry.iso_3166_1,
    name: tmdbProductionCountry.name,
  };
};

const convertToSpokenLanguage = (tmdbSpokenLanguage: TmdbSpokenLanguage): SpokenLanguage => {
  return {
    englishName: tmdbSpokenLanguage.english_name,
    iso: tmdbSpokenLanguage.iso_639_1,
    name: tmdbSpokenLanguage.name,
  };
};

const convertToProductionCompanies = (tmdbProductionCompanies: TmdbProductionCompany): ProductionCompany => {
  return {
    id: tmdbProductionCompanies.id,
    logoPath: tmdbProductionCompanies.logo_path,
    name: tmdbProductionCompanies.name,
    originCountry: tmdbProductionCompanies.origin_country,
  };
};

const convertTmdbMovieDetailstoMovieDetails = (tmdbMovieDetails: TmdbMovieDetails): MovieDetails => {
  const movieDetails: MovieDetails = {
    budget: tmdbMovieDetails.budget,
    genres: tmdbMovieDetails.genres,
    homepage: tmdbMovieDetails.homepage,
    originalLanguage: tmdbMovieDetails.original_language,
    originalTitle: tmdbMovieDetails.original_title,
    overview: tmdbMovieDetails.overview,
    productionCompanies: tmdbMovieDetails.production_companies.map(convertToProductionCompanies),
    productionCountries: tmdbMovieDetails.production_countries.map(convertToProductionCountry),
    revenue: tmdbMovieDetails.revenue,
    runtime: tmdbMovieDetails.runtime,
    spokenLanguages: tmdbMovieDetails.spoken_languages.map(convertToSpokenLanguage),
    status: tmdbMovieDetails.status,
    tagline: tmdbMovieDetails.tagline,
    voteCount: tmdbMovieDetails.vote_count,
    ...convertTmdbMovieToMovie(tmdbMovieDetails),
    backdropPath: IMG_PREFIX_ORIGINAL + tmdbMovieDetails.backdrop_path,
    posterPath: IMG_PREFIX_ORIGINAL + tmdbMovieDetails.poster_path,
  };
  return movieDetails;
};

export { convertTmdbMovieDetailstoMovieDetails };
