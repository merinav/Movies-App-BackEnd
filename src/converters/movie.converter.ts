const IMG_PREFIX_500 = 'https://image.tmdb.org/t/p/w500';

function convert(tmdbMovie: TmdbMovie): Movie {
  const movie: Movie = {
    movieId: tmdbMovie.id,
    title: tmdbMovie.title,
    releaseDate: tmdbMovie.release_date,
    backdropPath: IMG_PREFIX_500 + tmdbMovie.backdrop_path,
    posterPath: IMG_PREFIX_500 + tmdbMovie.poster_path,
    voteAverage: tmdbMovie.vote_average,
  };
  return movie;
}

export { convert };
