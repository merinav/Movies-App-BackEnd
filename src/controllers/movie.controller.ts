import express from 'express';
import * as movieService from '../services/movie.service';
import { validate } from '../validators/title.validator';

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const pageParam = _req.query.page ? parseInt(_req.query.page as string) || 1 : 1;
  const pageNumber = pageParam > 0 ? pageParam : 1;
  if (typeof _req.query.title != 'undefined' && validate(_req.query.title as string)) {
    try {
      res.json(await movieService.searchMoviesByTitle(_req.query.title as string, pageNumber));
    } catch (error) {
      next(error);
    }
  } else {
    try {
      res.json(await movieService.getMovies(pageNumber));
    } catch (error) {
      next(error);
    }
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
