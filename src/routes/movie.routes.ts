import express from 'express';

import { getMovie } from '../controllers/movie.controller';

const router = express.Router();

router.route('/:movieId').get(getMovie);

export default router;
