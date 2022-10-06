import { Router } from 'express';

import { createProductController } from '../controllers/products.controller.js';
import { readProductsByCategoryController } from '../controllers/products.controller.js';
import { readProductsController } from '../controllers/products.controller.js';
import { updateProductController } from '../controllers/products.controller.js';
import { deleteProductController } from '../controllers/products.controller.js';

import { verifyNameAndPriceMiddleware } from '../middlewares/verifyNameAndPrice.middleware.js';

const productRouter = Router();

productRouter.get('', readProductsController);
productRouter.get('/:id', readProductsController);
productRouter.post('', verifyNameAndPriceMiddleware,createProductController);
productRouter.patch('/:id', updateProductController);
productRouter.delete('/:id', deleteProductController);
productRouter.get('/categories', readProductsByCategoryController);
productRouter.get('/category/:id', readProductsByCategoryController);

export default productRouter;
