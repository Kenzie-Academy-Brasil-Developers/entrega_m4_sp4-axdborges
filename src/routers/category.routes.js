import { Router } from 'express';

import {
	createCategoryController,
	deleteCategoryController,
	readCategoriesController,
	updateCategoryController,
} from '../controllers/categories.controller.js';
import { verifyNameAlreadyExistsMiddleware } from '../middlewares/verifyNameAlreadyExists.middleware.js';

const categoryRouter = Router();

categoryRouter.get('', readCategoriesController);
categoryRouter.get('/:id', readCategoriesController);
categoryRouter.post('', verifyNameAlreadyExistsMiddleware,createCategoryController);
categoryRouter.patch('/:id', updateCategoryController);
categoryRouter.delete('/:id', deleteCategoryController);

export default categoryRouter;
