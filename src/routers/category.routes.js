import { Router } from 'express';

import  listCategoriesController  from '../controllers/categories.controller.js';

const categoryRouter = Router();

categoryRouter.get('', listCategoriesController);

export default categoryRouter;
