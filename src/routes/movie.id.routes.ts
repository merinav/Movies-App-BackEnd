import express from 'express';

import { getMovies } from '../controllers/movie.id.controller';

const router = express.Router();

router.route('/').get(getMovies);

export default router;
