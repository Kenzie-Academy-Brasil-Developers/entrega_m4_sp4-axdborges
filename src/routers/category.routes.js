import { Router } from 'express';

import {
	createCategoryController,
	deleteCategoryController,
	listCategoriesController,
} from '../controllers/categories.controller.js';
const categoryRouter = Router();

categoryRouter.get('', listCategoriesController);
categoryRouter.get('/:id', listCategoriesController);
categoryRouter.post('', createCategoryController);

categoryRouter.delete('/:id', deleteCategoryController);

export default categoryRouter;
