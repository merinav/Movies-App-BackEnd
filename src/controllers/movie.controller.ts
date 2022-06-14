import express from 'express';
import * as movieService from '../services/movie.service';

import url = require('url');

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  require('url');
  const queryObject = url.parse(_req.url, true).query;
  const pageParemeter = queryObject.page;
  let pageNumber = '1';
  if (typeof pageParemeter === 'string' && Number.isInteger(Number(pageParemeter))) {
    pageNumber = pageParemeter;
  }
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
