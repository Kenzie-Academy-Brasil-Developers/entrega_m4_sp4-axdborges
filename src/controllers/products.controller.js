import {
	createProductService,
	deleteProductService,
	readProductsService,
	updateProductService,
	readProductsByCategoryService,
	readProductsServiceById,
} from '../services/products.service.js';

export const readProductsController = async (request, response) => {
	const { id } = request.params;
	try {
		if (!id) {
			const read = await readProductsService();
			return response.status(200).json(read);
		}
		const read = await readProductsServiceById(id);
		return response.status(200).json(read);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const createProductController = async (request, response) => {
	const { name, price, category_id } = request.body;
    
	try {
		const createdProduct = await createProductService(name, price, category_id);
		return response
			.status(201)
			.json({ message: 'Product Created', product: createdProduct });
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const updateProductController = async (request, response) => {
	const { id } = request.params;
	try {
		const updatedProduct = await updateProductService(request.body, id);
		return response.status(200).json(updatedProduct);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const deleteProductController = async (request, response) => {
	const { id } = request.params;

	try {
		const deletedProduct = await deleteProductService(id);
		return response.status(204).json(deletedProduct);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const readProductsByCategoryController = async (request, response) => {
	const { id } = request.params;
	try {
		const read = await readProductsByCategoryService(id);
		return response.status(200).json(read);
	} catch (error) {
		return response.status(400).json(error.message);
	}
};
