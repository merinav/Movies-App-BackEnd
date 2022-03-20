import express from 'express';

import { getMovies } from '../controllers/movie.controller';

const router = express.Router();

router.route('/').get(getMovies);

export default router;
