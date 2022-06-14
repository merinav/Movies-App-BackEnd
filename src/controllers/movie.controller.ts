import express from 'express';
import * as movieService from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const pageNumber = _req.query.page ? parseInt(_req.query.page as string) || 1 : 1;
  try {
    res.json(await movieService.getMovies(pageNumber));
  } catch (error) {
    next(error);
  }
};

export { getMovies };

const getMovie = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  if (Number.isInteger(Number(_req.params.movieId))) {
    try {
      res.json(await movieService.getMovieDetails(_req.params.movieId));
    } catch (error) {
      next(error);
    }
  } else {
    next(new Error('Movie not found'));
  }
};

export { getMovie };
