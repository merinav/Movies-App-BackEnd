const convert = (tmdbMovie: TmdbMovie): Movie => {
  const prefix = 'https://image.tmdb.org/t/p/w500';
  const movie: Movie = {
    movieId: tmdbMovie.id,
    title: tmdbMovie.title,
    releaseDate: tmdbMovie.release_date,
    backdropPath: prefix + tmdbMovie.backdrop_path,
    posterPath: prefix + tmdbMovie.poster_path,
    voteAverage: tmdbMovie.vote_average,
  };
  return movie;
};
export { convert };
